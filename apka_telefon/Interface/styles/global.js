import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  //  backgroundColor: 'pink',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#90caf9',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    width: Dimensions.get('screen').width*0.5,
    height: 200,
  },
  logoText: {
    fontFamily: 'rubik-regular',
    fontSize: 16,
    padding: 5,
  },
  loginScreen: {
    flex: 1,
    backgroundColor: '#90caf9',
    alignItems: 'center',
    paddingTop: 10,
  },
  inRow: {
    flexDirection: 'row',
  },
  h4: {
    fontFamily: 'rubik-regular',
    fontSize: 35,
    textAlign: 'center',
  },
  h5: {
    fontFamily: 'rubik-regular',
    fontSize: 24,
    textAlign: 'center',
  },
  s1: {
    fontFamily: 'rubik-regular',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  s1Result1: {
    fontFamily: 'rubik-regular',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    padding: 5,
  },
  s1Result2: {
    fontFamily: 'rubik-regular',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    padding: 5,
  },
  body1: {
    fontFamily: 'rubik-regular',
    fontSize: 16,
  },
  body2: {
    fontFamily: 'rubik-regular',
    fontSize: 14,
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 70,
  },
  loadingIconContainer: {
    flex: 1,
    paddingTop: 50,
    //backgroundColor: 'pink',
  },
  resultContainer: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    //backgroundColor: 'pink',
  },
  resultButtons: {
    flex: 1,
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 25,
  },
  input: {
    width: Dimensions.get('screen').width*0.6,
    borderBottomWidth: 1,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    borderColor: 'rgba(0, 0, 0, 0.42)',
    paddingLeft: 15,
    padding: 5,
    margin: 5,
    fontFamily: 'rubik-regular',
    fontSize: 16,
    color: '#000',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
  inputContainer: {
    width: Dimensions.get('screen').width*0.6,
    borderBottomWidth: 1,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    borderColor: 'rgba(0, 0, 0, 0.42)',
    margin: 5,
    paddingLeft: 5,
    color: '#000',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
  registerText: {
    marginTop: 12,
    fontFamily: 'rubik-regular',
    fontSize: 14,
  },
  tmp: {
    position: 'absolute',
    bottom: 30,
  },
  sidebarContainer: {
    flex: 1,
    width: 256,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
  },
  sidebarHeader: {
    backgroundColor: '#5d99c6',
    borderTopRightRadius: 18,
    height: 24,
    width: 256,
  },
  sidebarLogo: {
    width: Dimensions.get('screen').width*0.3,
    height: 130,
  },
  sidebarDivider: {
    height:1,
    width:"100%",
    backgroundColor:"rgba(0, 0, 0, 0.12)",
    marginVertical: 20,
  },
  sidebarListItem: {
    flexDirection: 'row',
    height: 48,
    paddingLeft: 16,
  },
  icon: {
    paddingRight: 14,
  },
  imageScroll: {
    flex: 1,
    width: Dimensions.get('screen').width,
  },
  imagesScrollView: {
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badResultImageView: {
    alignItems: 'center',
    padding: 60,
  },
  txt: {
    backgroundColor: 'pink',
    margin: 10,
    padding: 40,
  },
  boldLink: {
    fontFamily: 'rubik-regular',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  shortAdviceText: {
    fontFamily: 'rubik-regular',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    margin: 20,
  },
  resultCircle: {
    width: 160,
    height: 160,
    borderWidth: 3,
    borderRadius: 80,
    borderColor: '#000',
    justifyContent: 'center',
  },
})
