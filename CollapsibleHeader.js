/*
  This code is heavily modified to suited the client need,
  Original  https://github.com/sonaye/react-native-collapsible-header
  By https://github.com/sonaye
  Modify by Sam Wei
*/
import React, { Component } from 'react'
import { Animated, FlatList, View, Platform, Text } from 'react-native'
import PropTypes from 'prop-types'

const statusBarHeight = Platform.select({ ios: 0, android: 24 })

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

export default class CollapsibleHeader extends Component {

  static propTypes = {
    renderHeader: PropTypes.any,
    headerColor: PropTypes.any,
    renderItem: PropTypes.any,
    headerHeight: PropTypes.any.isRequired,
    renderRemainHeader: PropTypes.any,
    remainHeaderHeight: PropTypes.number.isRequired,
    remainHeaderColor: PropTypes.any,
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
          outputRange: [0, 1],
          extrapolateLeft: 'clamp'
        }),
        this.offsetAnim
      ),
      0,
      this.props.headerHeight //label height
    )
  };

  componentDidMount() {
    this.state.scrollAnim.addListener(({ value }) => {
      const diff = value - this.scrollValue
      this.scrollValue = value
      this.clampedScrollValue = Math.min(
        Math.max(this.clampedScrollValue + diff, 0),
        this.props.headerHeight
      )
    })

    this.state.offsetAnim.addListener(({ value }) => {
      this.offsetValue = value
    })
  }

  componentWillUnmount() {
    this.state.scrollAnim.removeAllListeners()
    this.state.offsetAnim.removeAllListeners()
  }

  onScrollEndDrag = () => {
    this.scrollEndTimer = setTimeout(this.onMomentumScrollEnd, 250)
  };

  onMomentumScrollBegin = () => {
    clearTimeout(this.scrollEndTimer)
  };

  onMomentumScrollEnd = () => {
    const toValue = this.scrollValue > this.props.headerHeight &&
      this.clampedScrollValue > (this.props.headerHeight) / 2
      ? this.offsetValue + this.props.headerHeight
      : this.offsetValue - this.props.headerHeight

    Animated.timing(this.state.offsetAnim, {
      toValue,
      duration: 350,
      useNativeDriver: true
    }).start()
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

    const oppositeNavBarTranslate = clampedScroll.interpolate({
      inputRange: [0, this.props.headerHeight],
      outputRange: [0, this.props.remainHeaderHeight + statusBarHeight],
      extrapolate: 'clamp'
    })

    const oppositeNavbarOpacity = clampedScroll.interpolate({
      inputRange: [0, this.props.headerHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    return (
      <View style={{ flex: 1 }}>
        <AnimatedFlatList
          contentContainerStyle={{ paddingTop: this.props.headerHeight + 10 }}
          data={this.props.data}
          keyExtractor={(item, i) => `collapsible-item-${i}`}
          onMomentumScrollBegin={this.onMomentumScrollBegin}
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
            { useNativeDriver: true }
          )}
          onScrollEndDrag={this.onScrollEndDrag}
          renderItem={this.props.renderItem}
          scrollEventThrottle={1}
          {...this.props}
        />
        <Animated.View
          style={[
            {
              backgroundColor: this.props.remainHeaderColor || '#fff',
              height: this.props.remainHeaderHeight,
              left: 0,
              paddingTop: 0,
              position: 'absolute',
              right: 0,
              top: -(this.props.remainHeaderHeight + statusBarHeight),
              transform: [{ translateY: oppositeNavBarTranslate }]
            }
          ]}>
          <Animated.View style={{ flex: 1, opacity: oppositeNavbarOpacity }}>
            {this.props.renderRemainHeader}
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={[
            {
              backgroundColor: this.props.headerColor || '#fff',
              height: this.props.headerHeight,
              left: 0,
              paddingTop: 0,
              position: 'absolute',
              right: 0,
              top: 0,
              transform: [{ translateY: navbarTranslate }]
            }
          ]}>

          <Animated.View style={{ flex: 1, opacity: navbarOpacity }}>
            {this.props.renderHeader}
          </Animated.View>
        </Animated.View>
      </View>
    )
  }
}
