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
    data: PropTypes.any
  }
  scroll = new Animated.Value(0);


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

  componentWillMount() {
    this._animatedValueY = 0
    this.scroll.addListener((value) => {
      if (value.value < 0) {
        if (value.value < -Math.abs(this.props.headerHeight)) {
          this._animatedValueY = -Math.abs(this.props.headerHeight)
        } else {
          this._animatedValueY = Math.ceil(value.value)
        }
      }
      if (value.value > 0) {
        if (value.value > this.props.headerHeight) {
          this._animatedValueY = this.props.headerHeight
        } else {
          this._animatedValueY = Math.ceil(value.value)
        }
      }
    })
    this.scollerPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,  //eslint-disable-line 
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => { //eslint-disable-line 
        this.scroll.setOffset(this._animatedValueY)
        this.scroll.setValue(0) //Initial value
      },
      onPanResponderMove: Animated.event([
        null, { dy: this.scroll }
      ])
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
