/*
  Collapsible using panResponder
  Created by Sam Wei
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
    data: PropTypes.any,
    ramsayContent: PropTypes.bool
  }



  scroll = new Animated.Value(0)
  scrollValue = 0

  position = this.scroll.interpolate({
    inputRange: [-(this.props.headerHeight), 0, this.props.headerHeight],
    outputRange: [-(this.props.headerHeight), 0, 0],
    extrapolate: 'clamp'
  });

  opacity = this.scroll.interpolate({
    inputRange: [-(this.props.headerHeight), 0, this.props.headerHeight],
    outputRange: [0, 1, 1]
  });

  componentWillUnmount() {
    this.scroll.removeAllListeners()
  }

  checkMoving = ({ dy }) => {
    const draggedDown = dy > 3
    const draggedUp = dy < -3

    if (draggedDown || draggedUp) {
      return true
    } else {
      return false
    }
  }

  componentWillMount() {
    this._animatedValueY = 0
    this.scroll.addListener((value) => {
      this.scrollValue = value.value - this._animatedValueY // get the raw value with no offset
      if (value.value < 0) {
        if (value.value < -Math.abs(this.props.headerHeight)) {
          // capped this to the header height (negative)
          this._animatedValueY = -Math.abs(this.props.headerHeight)
        } else {
          this._animatedValueY = Math.ceil(value.value)
        }
      }
      if (value.value > 0) {
        this._animatedValueY = 0
      }
    })
    this.scollerPanResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => !!this.checkMoving(gestureState),
      onPanResponderGrant: (e, gestureState) => { //eslint-disable-line 
        this.scroll.setOffset(this._animatedValueY)
        this.scroll.setValue(0) //Initial value
      },
      onPanResponderMove: Animated.event([
        null, { dy: this.scroll }
      ]),
      onPanResponderRelease: () => { 
        let toValue = this.scroll._value > (this.props.headerHeight /2) ? 0 + this.props.headerHeight : 0 - this.props.headerHeight
        this.scroll.flattenOffset()
        Animated.timing(this.scroll, {
          toValue,
          duration: 250,
          useNativeDriver: true
        }).start()
      }
    })
  }


  render() {

    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={[
            {
              backgroundColor: this.props.headerColor || '#fff',
              height: this.props.headerHeight,
              transform: [{ translateY: this.position }]
            }
          ]}>
          <Animated.View style={{ flex: 1, opacity: this.opacity }}>
            {this.props.renderHeader}
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={[
            {
              transform: [{ translateY: this.position }]
            }
          ]}>
          <FlatList
            contentContainerStyle={[{paddingBottom: this.props.headerHeight}, this.props.ramsayContent !== true && {paddingTop: 15}]}
            data={this.props.data}
            renderItem={this.props.renderItem}
            scrollEventThrottle={16}
            {...this.props}
            {...this.scollerPanResponder.panHandlers}
          />
        </Animated.View>
      </View>
    )
  }
}
