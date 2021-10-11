/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dimensions, Platform } from 'react-native';
import parsePhoneNumber from 'libphonenumber-js';

export const KLMN = Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix';
export const Dolbak = Platform.OS === 'ios' ? 'The Dolbak' : 'TheDolbak-Brush';
export const Etna = Platform.OS === 'ios' ? 'Etna' : 'etna-free-font';
export const Narrow = '3270Narrow';

export const win = Dimensions.get('window');
export const W = win.width;
export const H = win.height;
export const header_H = 80;
export const screen_H = H - header_H;
export const getPrecentOfWidth = num => (num / 100) * W;
export const getPrecentOfHeight = num => (num / 100) * H;

export const Device = {
  // eslint-disable-next-line
  select(variants) {
    if (W >= 300 && W <= 314) return variants.mobile300 || {};
    if (W >= 315 && W <= 341) return variants.mobile315 || {};
    if (W >= 342 && W <= 359) return variants.mobile342 || {};
    if (W >= 360 && W <= 374) return variants.mobile360 || {};
    if (W >= 375 && W <= 399) return variants.mobile375 || {};
    if (W >= 400 && W <= 409) return variants.mobile400 || {};
    if (W >= 410 && W <= 414) return variants.mobile410 || {};
    if (W >= 415 && W <= 480) return variants.mobile415 || {};
    if (W >= 481) return variants.mobile481 || {};
  },
};

export const keyExtractor = (item, index) => index.toString();
export const generateRandomId = () => Math.random().toString(36).substr(2, 8);
export const generateLettersId = len => {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

export const goBack = navigation => () => navigation.goBack();

export const onScreen =
  (screen, navigation, obj = {}) =>
    () => {
      navigation.navigate(screen, { screenProps: obj });
    };

export const goHome = navigation => () => navigation.popToTop()();

export const isString = param => typeof param === 'string';
export const isObjectEmpty = (obj = {}) => Object.keys(obj).length === 0;

export const isToday = someDate => {
  const today = new Date();
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  );
};
export const formatTime = (date = Date.now()) => {
  const minutes = date.getMinutes();
  const minutesString = minutes < 10 ? '0' + minutes : minutes;
  const hours = date.getHours();
  return `${hours}:${minutesString}`;
};

export const generateTimeBySeconds = seconds => {
  const moreThanHour = seconds >= 3600;
  return new Date(seconds * 1000)
    .toISOString()
    .substr(moreThanHour ? 11 : 14, moreThanHour ? 8 : 5);
};

export const getAge = dateString => {
  if (dateString) {
    const mmddyyyy = formatFromILDate(dateString);
    var today = new Date();
    var birthDate = new Date(mmddyyyy);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
  return '';
};

export const formatToILDate = (timeStamp = Date.now()) => {
  return new Date(timeStamp).toLocaleDateString('he-IL');
};

export const formatFromILDate = dateString => {
  if (typeof dateString == 'string') {
    return dateString.search(/[/|.]+/) != -1 && !dateString.endsWith('0Z')
      ? new Date(
        `${dateString.split(/[\s./]+/)[1]}/${dateString.split(/[\s./]+/)[0]
        }/${dateString.split(/[\s./]+/)[2]}`,
      )
      : new Date(dateString);
  } else {
    return new Date(dateString);
  }
};

export const formatPhoneNumber = number => {
  const cleanNumber = number.replace(/\D/g, '');
  const parsedNumber = parsePhoneNumber(cleanNumber, 'IL');
  return parsedNumber.formatInternational().replace(/ /g, '');
};

/* Colors: */

export const white = '#FFFFFF';
export const black = '#000000';
export const lightBlack = '#808080';
export const gray = '#707070';
export const lightGray = '#EFEFEF';
export const red = '#ED1C24';
export const lightRed = '#FF8B9E';
export const green = '#31B44B';


/* Font/text values */
const fontFamilyArimo = 'Arimo';
const fontStyleNormal = 'normal';
const fontWeightNormal = '500';
const fontSize_8 = 8;
const fontSize_10 = 10;
const fontSize_12 = 12;
const fontSize_13 = 13;
const fontSize_14 = 14;
const fontSize_15 = 15;
const fontSize_16 = 16;
const fontSize_18 = 18;
const characterSpacing_0 = 0;
const lineSpacing_11 = 11;
const lineSpacing_16 = 16;
const lineSpacing_18 = 18;
const lineSpacing_20 = 20;
const lineSpacing_21 = 21;
const lineSpacing_22 = 22;
const lineSpacing_28 = 28;

/* Character Styles */
export const G_Styles = {
  section: {
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: white,
    // // shadowColor: '#00000029',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.6,
    // shadowRadius: 16,

    // elevation: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  roundedBorder: {
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: gray,
  },
  longButton: {
    backgroundColor: green,
    borderRadius: 24,
  },
  mainTitle: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_18,
    lineHeight: lineSpacing_28,
    letterSpacing: characterSpacing_0,
    color: black,
  },
  title: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_15,
    lineHeight: lineSpacing_22,
    letterSpacing: characterSpacing_0,
    color: black,
  },
  itemTitle: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_13,
    lineHeight: lineSpacing_22,
    letterSpacing: characterSpacing_0,
    color: black,
  },
  caption: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_10,
    lineHeight: lineSpacing_16,
    letterSpacing: characterSpacing_0,
    color: lightBlack,
  },

  subTitle: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_10,
    lineHeight: lineSpacing_16,
    letterSpacing: characterSpacing_0,
    color: lightBlack,
  },
  navigationText: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_8,
    lineHeight: lineSpacing_11,
    letterSpacing: characterSpacing_0,
    color: black,
  },
  buttonTitle: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_14,
    lineHeight: lineSpacing_18,
    letterSpacing: characterSpacing_0,
    color: black,
  },
  sectionTitle: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_14,
    lineHeight: lineSpacing_21,
    letterSpacing: characterSpacing_0,
    color: black,
  },
  redIcon: {
    fontSize: fontSize_12,
    lineHeight: lineSpacing_16,
    letterSpacing: characterSpacing_0,
    color: red,
  },
  grayIcon: {
    fontSize: fontSize_12,
    lineHeight: lineSpacing_16,
    letterSpacing: characterSpacing_0,
    color: gray,
  },
  greenIcon: {
    fontSize: fontSize_12,
    lineHeight: lineSpacing_16,
    letterSpacing: characterSpacing_0,
    color: green,
  },
  blackIcon: {
    fontSize: fontSize_12,
    lineHeight: lineSpacing_16,
    letterSpacing: characterSpacing_0,
    color: black,
  },
  headerIcon: {
    fontSize: fontSize_16,
    lineHeight: lineSpacing_20,
    letterSpacing: characterSpacing_0,
    color: black,
  },
};


export const LOGO_URI = 'https://i.ibb.co/PYFmPMr/logo.png'

export const IMAGE_2_URI = 'https://i.ibb.co/rdw5VTz/image-2.jpg'
export const IMAGE_1_URI = 'https://i.ibb.co/GJds5YN/image-1.jpg'



export const LOGO_HEADER_URI = 'https://i.ibb.co/vsJZ3Px/logo-header.png'


export const MAP_URI = 'https://i.ibb.co/S7HTX1T/map.png'




export const ADDRESS_URI = 'https://i.ibb.co/FX7JfCT/address.png'


export const TELEPHONE_URI = 'https://i.ibb.co/9wJTqMM/telephone.png'


export const FAX_URI = 'https://i.ibb.co/ynYK22q/fax.png'

export const EMAIL_URI = 'https://i.ibb.co/2PLZvmZ/email.png'

export const FAVICON_URI = 'https://i.ibb.co/6HjF65B/favicon.png'


