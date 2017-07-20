import React from 'react'
import { Image, TextInput, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import icon from './assets/icon.png'
import styles from './styles'

const { wrapper, input, closeIcon, closeIconWrapper, message, benefit, career, image } = styles

const mapSearchColor = {
  message: message,
  benefit: benefit,
  career: career,
}

const InputSearch = ({ value, placeholder, onChangeText, onClearSearch, contentType }) => {
  return (
    <View style={[wrapper, mapSearchColor[contentType.toLowerCase()]]}>
      <Image source={icon} style={image} />
      <TextInput
        key={`input-search-${placeholder}`}
        style={input}
        onChangeText={onChangeText}
        value={value}
        autoCorrect={true}
        autoCapitalize='none'
        placeholder={placeholder}
        placeholderTextColor='white'
        underlineColorAndroid='transparent'
      />
    </View>
  )
}

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func,
  contentType: PropTypes.string
}

export default InputSearch

