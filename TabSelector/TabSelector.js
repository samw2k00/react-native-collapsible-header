import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const {
  wrapper,
  text,
  border,
  minimizedNotActiveText,
  messageText,
  careerText,
  benefitText,
  messageBorder,
  careerBorder,
  benefitBorder
} = styles

const TabSelector = ({ label, onPress, selected, minimized, contentType }) => {

  const mapContentType ={
    message : {
      text: messageText,
      border: messageBorder
    },
    career: {
      text: careerText,
      border: careerBorder
    },
    benefit: {
      text: benefitText,
      border: benefitBorder
    }
  }

  const textStyle = minimized ? minimizedNotActiveText : text

  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={wrapper}>
        <Text style={[textStyle, (minimized && selected) && mapContentType[contentType].text]}>{label}</Text>
        {selected && <View style={[border, minimized && mapContentType[contentType].border]} />}
      </View>
    </TouchableWithoutFeedback>
  )

}


TabSelector.propTypes = {
  ...TouchableWithoutFeedback.propTypes,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  minimized: PropTypes.bool,
  contentType: PropTypes.string
}

export default TabSelector

