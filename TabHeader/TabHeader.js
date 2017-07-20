import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import TabBarTop from '../TabBarTop'
import InputSearch from '../InputSearch'
import styles from './styles'

const { wrapper, message, career, benefit, minimizedBackGroundColor } = styles

const mapHeaderColor = {
  message: message,
  benefit: benefit,
  career: career,
}


const TabHeader = ({
  placeholder,
  onChangeText,
  onClearSearch,
  value,
  leftLabel,
  onPressLeft,
  rightLabel,
  onPressRight,
  leftSelected,
  rightSelected,
  contentType,
  minimized
}) => {

  return (
    <View style={[wrapper, mapHeaderColor[contentType.toLowerCase()], minimized && minimizedBackGroundColor]}>
      {!minimized &&
        <InputSearch
          placeholder={placeholder}
          onChangeText={onChangeText}
          onClearSearch={onClearSearch}
          value={value}
          contentType={contentType}
        />}
      <TabBarTop
        minimized={minimized}
        contentType={contentType}
        leftLabel={leftLabel}
        onPressLeft={onPressLeft}
        rightLabel={rightLabel}
        onPressRight={onPressRight}
        leftSelected={leftSelected}
        rightSelected={rightSelected}
      />
    </View>
  )
}

TabHeader.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  leftLabel: PropTypes.string.isRequired,
  onPressLeft: PropTypes.func.isRequired,
  rightLabel: PropTypes.string.isRequired,
  onPressRight: PropTypes.func.isRequired,
  leftSelected: PropTypes.bool,
  rightSelected: PropTypes.bool,
  contentType: PropTypes.string,
  minimized: PropTypes.bool,
}

export default TabHeader

