import color from 'color'
import { Platform, Dimensions, PixelRatio, StyleSheet } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS
const platformStyle = undefined

export { StyleSheet }
export default {
  platformStyle,
  platform,

  // debugs
  debugBackgroundColor: '#FAEC14',
  
  // AndroidRipple
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  // New Variable
  badgePadding: platform === 'ios' ? 3 : 0,

  // Button
  btnFontFamily: 'Cochin',
  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',

  // CheckBox
  CheckboxWidth: 25,
  CheckboxHeight: 23,
  CheckboxRadius: 5,
  CheckboxBorderWidth: 1,  
  checkboxColor: '#009B8B',
  checkboxTickColor: '#009B8B',

  // Segment
  segmentBackgroundColor: '#3F51B5',
  segmentActiveBackgroundColor: '#fff',
  segmentTextColor: '#fff',
  segmentActiveTextColor: '#3F51B5',
  segmentBorderColor: '#fff',
  segmentBorderColorMain: '#3F51B5',

  // New Variable
  get defaultTextColor() {
    return this.textColor
  },

  get btnPrimaryBg() {
    return this.brandPrimary
  },
  get btnPrimaryColor() {
    return this.inverseTextColor
  },
  get btnInfoBg() {
    return this.brandInfo
  },
  get btnInfoColor() {
    return this.inverseTextColor
  },
  get btnSuccessBg() {
    return this.brandSuccess
  },
  get btnSuccessColor() {
    return this.inverseTextColor
  },
  get btnDangerBg() {
    return this.brandDanger
  },
  get btnDangerColor() {
    return this.inverseTextColor
  },
  get btnWarningBg() {
    return this.brandWarning
  },
  get btnWarningColor() {
    return this.inverseTextColor
  },
  get btnTextSize() {
    return platform === 'ios' ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8
  },

  buttonPadding: 6,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6
  },

  // Card
  cardDefaultBg: '#fff',

  // Color
  brandPrimary: '#009B8B',
  brandInfo: '#62B1F6',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandSidebar: '#252932',

  // Font
  fontFamily: 'Cochin',
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4
  },

  // Footer
  footerHeight: 55,
  footerDefaultBg: '#2874F0',

  // FooterTab
  tabBarTextColor: '#8bb3f4',
  tabBarTextSize: platform === 'ios' ? 14 : 11,
  activeTab: platform === 'ios' ? '#007aff' : '#fff',
  sTabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: '#fff',
  tabActiveBgColor: platform === 'ios' ? '#1569f4' : undefined,

  // Tab
  tabDefaultBg: '#2874F0',
  topTabBarTextColor: '#b3c7f9',
  topTabBarActiveTextColor: '#fff',
  topTabActiveBgColor: platform === 'ios' ? '#1569f4' : undefined,
  topTabBarBorderColor: '#fff',
  topTabBarActiveBorderColor: '#fff',

  // Header
  toolbarBtnColor: '#fff',
  toolbarDefaultBg: '#2874F0',
  toolbarHeight: platform === 'ios' ? 64 : 56,
  toolbarIconSize: platform === 'ios' ? 20 : 22,
  toolbarSearchIconSize: platform === 'ios' ? 20 : 23,
  toolbarInputColor: platform === 'ios' ? '#CECDD2' : '#fff',
  searchBarHeight: platform === 'ios' ? 30 : 40,
  toolbarInverseBg: '#222',
  toolbarTextColor: '#fff',
  iosStatusbar: 'light-content',
  toolbarDefaultBorder: '#2874F0',
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).rgb().string()
  },

  // Icon
  iconFamily: 'Entypo',
  iconFontSize: platform === 'ios' ? 30 : 28,
  iconMargin: 7,
  iconHeaderSize: platform === 'ios' ? 33 : 24,

  // InputGroup
  inputLabelFontSize: 18,
  inputControlFontSize: 13,
  inputFontSize: 17,
  inputBorderColor: '#009b8b',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputBorderWidth: 1,
  inputBorderRadius: 3,

  get inputColor() {
    return this.textColor
  },
  get inputColorPlaceholder() {
    return '#575757'
  },

  inputLabelMarginBottom: 10,
  inputGroupMarginBottom: deviceHeight <=570 ? 5: 20,
  inputHeightBase: 45,
  inputPaddingLeft: 5,
  inputControlMarginLeft: 13,
  inputPaddingHorizontal: 13,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: platform === 'ios' ? 37 : 30,
  lineHeight: platform === 'ios' ? 20 : 24,

  // List
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listItemHeight: 45,
  listBtnUnderlayColor: '#DDD',

  // Card
  cardBorderColor: '#FFFFFF',
  cardBorderBottomLeftRadius: 22,
  cardBorderBottomRightRadius: 22,
  cardBorderTopLeftRadius: 22,
  cardBorderWidth: 1,
  cardPadding: 13,
  cardMarginBottom: 10,
  emergencyColor: '#ED6158',
  separatorColor: 'rgba(219, 211, 216, 0.77)',
  separatorWidth: 1,
  cardHeaderBottomPadding:13,
  cardFooterTopPadding: 13,

  // Header Card
  headerCardPaddingBottom: 12,
  headerCardMarginBottom: 12,
  

  // Avatar
  avatarSize: 32,
  avatarSizeBig: 46,
  get avatarRadius() {
    return this.avatarSize / 2
  },
  get avatarRadiusBig() {
    return this.avatarSizeBig / 2
  },
  
  // Author
  authorCardMarginLeft: 5,
  authorCardColor: '#626666',
  authorCardEmergencyColor: '#000000',
  authorCardFontSize: 12,
  authorCardLineHeight: 18,

  // GlobalSection
  GlobalSectionCardMarginTop: 20,
  GlobalSectionCardMarginBottom: 12,

  
  // Icon
  iconCardWidth: 19,
  iconCardHeight: 19,

  //Body
  bodyCardColor: '#172C51',
  bodyCardFontFize: 16,
  bodyCardLineHeight: 21,
  
  //footer
  footerCardColor: '#626666',
  footerCardFontFize: 10,
  footerCardLineHeight: 13,

  
  // Changed Variable
  listItemPadding: platform === 'ios' ? 10 : 12,

  listNoteColor: '#808080',
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: platform === 'ios' ? 25 : 25,
  radioBtnBorderWidth: 1,
  radioBtnInnerSize: 15,

  // New Variable
  radioBtnLineHeight: platform === 'ios' ? 20 : 20,
  radioBtnLabelColor: '#192e4f',

  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  tabTextColor: '#222222',
  tabNavBgColor: '#F8F8F8',

  // Text
  textColor: '#000',
  inverseTextColor: '#fff',
  noteFontSize: 14,

  // Title
  titleFontfamily: 'Cochin',
  titleFontSize: platform === 'ios' ? 17 : 19,
  subTitleFontSize: platform === 'ios' ? 12 : 14,
  subtitleColor: '#FFF',

  // Signin
  signinBgColor:'#F8F8F8',

  // New Variable
  titleFontColor: '#FFF',

  // Other
  borderRadiusBase: platform === 'ios' ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,

  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).rgb().string()
  },

  dropdownBg: '#000',
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  jumbotronBg: '#C9C9CE',
  jumbotronPadding: 30,
  deviceWidth,
  deviceHeight,

  // New Variable
  inputGroupRoundedBorderRadius: 30,

  // Individual Tab Row Count
  tabHeaderTextColor: '#626666',

  // Filter Button Text color
  filterButtonTextColor: '#626666',
  filterBorderColor: '#c9c9c9',
}
