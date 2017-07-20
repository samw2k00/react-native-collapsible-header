import variables, { StyleSheet } from '../style'

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: 'center',
    flex:1,
  },
  border: {
    marginTop:8,
    height: 4,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19,
    fontFamily: variables.fontFamily,
    color: 'white',
  },
  minimizedNotActiveText:{
    color:'#808080'
  },
  messageText:{
    color: '#009b8b',
  },
  careerText:{
    color: '#0081b8',
  },
  benefitText:{
    color: '#F25C5A',
  },
  messageBorder:{
    backgroundColor: '#009b8b',
  },
  careerBorder:{
    backgroundColor: '#0081b8',
  },
  benefitBorder:{
    backgroundColor: '#F25C5A',
  }
})

export default styles
