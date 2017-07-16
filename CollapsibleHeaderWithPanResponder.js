/*
  This code is heavily modified to suited the client need,
  Original  https://github.com/sonaye/react-native-collapsible-header
  By https://github.com/sonaye
  Modify by Sam Wei
*/
import React, { Component } from 'react'
import { Animated, FlatList, View, PanResponder } from 'react-native'
import PropTypes from 'prop-types'


export default class CollapsibleHeader extends Component {

  static propTypes = {
    renderHeader: PropTypes.any,
    headerColor: PropTypes.any,
    renderItem: PropTypes.any,
    headerHeight: PropTypes.any.isRequired,
    data: PropTypes.any
  }
  scrollAnim = new Animated.Value(0);
  offsetAnim = new Animated.Value(0);

  clampedScrollValue = 0;
  offsetValue = 0;
  scrollValue = 0

  state = {
    scrollAnim: this.scrollAnim,
    offsetAnim: this.offsetAnim,
    clampedScroll: Animated.diffClamp(
      Animated.add(
        this.scrollAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
          extrapolateRight: 'clamp'
        }),
        this.offsetAnim
      ),
      0,
      this.props.headerHeight //label height
    )
  };

  componentWillMount() {

    this.scollerPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,  //eslint-disable-line 
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null, { dy: this.state.scrollAnim }
      ]),
      onPanResponderRelease: (evt, gestureState) => {
        console.log("dy", gestureState.dy)

        const toValue = this.scrollValue > this.props.headerHeight &&
          this.clampedScrollValue > (this.props.headerHeight) / 2
          ? this.offsetValue - this.props.headerHeight
          : this.offsetValue + this.props.headerHeight

        Animated.timing(this.state.offsetAnim, {
          toValue,
          duration: 0,
          useNativeDriver: false
        }).start()
        // if (gestureState.dy < 0) {
        //   this.offsetAnim.setValue(this.props.headerHeight)
        // }else {
        //   this.offsetAnim.setValue(-(this.props.headerHeight))
        // }
      }
    })
  }

  componentDidMount() {
    this.state.scrollAnim.addListener(({ value }) => {
      console.log("---ScrollAnim Value:", value)
      const diff = value - this.scrollValue
      this.scrollValue = value
      this.clampedScrollValue = Math.min(
        Math.max(this.clampedScrollValue + diff, 0),
        this.props.headerHeight * 2
      )
    })

    this.state.offsetAnim.addListener(({ value }) => {
      console.log("+++ OffsetAnim valye:", value)
      this.offsetValue = value
    })

  }

  componentWillUnmount() {
    this.state.scrollAnim.removeAllListeners()
    this.state.offsetAnim.removeAllListeners()
  }

  onScrollEndDrag = () => {
    console.log("OnScroll end", this.state.offsetAnim._value)
    console.log("on scrollvalue", this.scrollValue)
  };


  render() {
    const { clampedScroll } = this.state

    const navbarTranslate = clampedScroll.interpolate({
      inputRange: [0, this.props.headerHeight],
      outputRange: [0, -(this.props.headerHeight)],
      extrapolate: 'clamp'
    })

    const navbarOpacity = clampedScroll.interpolate({
      inputRange: [0, this.props.headerHeight],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })

    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={[
            {
              backgroundColor: this.props.headerColor || '#fff',
              height: this.props.headerHeight,
              transform: [{ translateY: navbarTranslate }]
            }
          ]}>
          <Animated.View style={{ flex: 1, opacity: navbarOpacity }}>
            {this.props.renderHeader}
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={[
            {
              transform: [{ translateY: navbarTranslate }]
            }
          ]}>
          <FlatList
            contentContainerStyle={{ paddingTop: 10, paddingBottom: this.props.headerHeight }}
            data={this.props.data}
            renderItem={this.props.renderItem}
            scrollEventThrottle={16}
            onScrollEndDrag={this.onScrollEndDrag}
            {...this.props}
            {...this.scollerPanResponder.panHandlers}
          />
        </Animated.View>
      </View>
    )
  }
}

