import variables, { StyleSheet } from '../style'

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    margin: 8,
    marginTop:20,
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  image: {
    marginHorizontal: 10,
    width: 14,
    height: 14,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    fontFamily: variables.fontFamily,
    color: 'white',
    marginLeft: 3,
    paddingTop: variables.platform === 'ios' ? 0 : 10
  },
  closeIconWrapper: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    height: 40,
    marginHorizontal: 10
  },
  closeIcon: {
    fontSize: 20,
    fontFamily: variables.fontFamily,
    color: 'white',
  },
  message: {
    backgroundColor: '#018e80'
  },
  benefit: {
    backgroundColor: '#C44B49',
  },
  career: {
    backgroundColor: '#00affa'
  }
})

export default styles
