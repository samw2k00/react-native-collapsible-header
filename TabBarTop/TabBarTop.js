import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import TabSelector  from '../TabSelector'
import styles from './styles'

const { wrapper, minimizedBackground, } = styles

class TabBarTop extends Component {

  static propTypes = {
    leftLabel: PropTypes.string.isRequired,
    onPressLeft: PropTypes.func.isRequired,
    rightLabel: PropTypes.string.isRequired,
    onPressRight: PropTypes.func.isRequired,
    leftSelected: PropTypes.bool,
    rightSelected: PropTypes.bool,
    minimized: PropTypes.bool,
    contentType: PropTypes.string
  }

  handleLeft = () => this.props.onPressLeft()
  handleRight = () => this.props.onPressRight()

  render() {
    return (
      <View style={[wrapper, this.props.minimized && minimizedBackground ]}>
        <TabSelector
          label={this.props.leftLabel}
          onPress={this.handleLeft}
          selected={this.props.leftSelected}
          minimized={this.props.minimized}
          contentType={this.props.contentType}
        />
        <TabSelector
          label={this.props.rightLabel}
          onPress={this.handleRight}
          selected={this.props.rightSelected}
          minimized={this.props.minimized}
          contentType={this.props.contentType}
        />
      </View>
    )
  }

}

export default TabBarTop

