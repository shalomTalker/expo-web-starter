import * as React from 'react';
import { useColorScheme } from 'react-native-appearance';
const fontFamily = 'Arimo';
const fontStyle = 'normal';
const fontWeight = '500';
const fontSize_8 = 8;
const fontSize_10 = 10;
const fontSize_12 = 12;
const fontSize_13 = 13;
const fontSize_14 = 14;
const fontSize_15 = 15;
const fontSize_16 = 16;
const fontSize_17 = 17;
const fontSize_18 = 18;
const characterSpacing_0 = 0;
const lineSpacing_11 = 11;
const lineSpacing_16 = 16;
const lineSpacing_18 = 18;
const lineSpacing_20 = 20;
const lineSpacing_21 = 21;
const lineSpacing_22 = 22;
const lineSpacing_28 = 28;

const lightColors = {
  primary: '#EFEFEF',
  secondary: '#000000',
  lightGray: '#EFEFEF',
  lightBlack: '#808080',
  green: '#31B44B',
  lightGreen: '#53B467',
  gray: '#707070',
  red: '#ED1C24',
  lightRed: '#FF8B9E',
  c1: '#0F4547',
  c2: '#4B5258',
  c3: '#727073',
  c4: '#947a70',
  c5: '#30302f'

};

// Dark theme colors
const darkColors = {
  primary: '#000000',
  secondary: '#EFEFEF',
  lightGray: '#EFEFEF',
  lightBlack: '#808080',
  green: '#5AB86D',
  lightGreen: '#90BD98',
  gray: '#B3B3B3',
  red: '#EE4E54',
  lightRed: '#FAA8B5',
  c1: '#0F4547',
  c2: '#4B5258',
  c3: '#727073',
  c4: '#947a70',
  c5: '#30302f'

};

export const ThemeContext = React.createContext({
  isDark: false,
  ...lightColors,
  setScheme: () => { },
  G_Styles: {
    section: {
      backgroundColor: lightColors.primary,
      shadowColor: lightColors.secondary,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      borderRadius: 12,
    },
    longButton: {
      backgroundColor: lightColors.green,
      borderRadius: 24,
    },
    mainTitle: {
      fontFamily,
      fontStyle,
      fontWeight,
      fontSize: fontSize_18,
      lineHeight: lineSpacing_28,
      letterSpacing: characterSpacing_0,
      color: lightColors.secondary,
    },
    title: {
      fontFamily,
      fontStyle,
      fontWeight,
      fontSize: fontSize_17,
      lineHeight: lineSpacing_22,
      letterSpacing: characterSpacing_0,
      color: lightColors.secondary,
    },
    itemTitle: {
      fontFamily,
      fontStyle,
      fontWeight,
      fontSize: fontSize_13,
      lineHeight: lineSpacing_22,
      letterSpacing: characterSpacing_0,
      color: lightColors.secondary,
    },
    caption: {
      fontFamily,
      fontStyle,
      fontWeight,
      fontSize: fontSize_10,
      lineHeight: lineSpacing_16,
      letterSpacing: characterSpacing_0,
      color: lightColors.lightBlack,
    },

    subtitle: {
      fontFamily,
      fontStyle,
      fontWeight,
      fontSize: fontSize_15,
      lineHeight: lineSpacing_20,
      letterSpacing: characterSpacing_0,
      color: lightColors.lightBlack,
    },
  },
});

export const ThemeProvider = props => {
  // Getting the device color theme, this will also work with react-native-web
  const colorScheme = useColorScheme(); // Can be dark | light | no-preference

  /*
   * To enable changing the app theme dynamicly in the app (run-time)
   * we're gonna use useState so we can override the default device theme
   */
  const [isDark, setIsDark] = React.useState(colorScheme === 'dark');

  // Listening to changes of device appearance while in run-time
  React.useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);
  const colors = isDark ? darkColors : lightColors;
  const defaultTheme = {
    isDark,
    // Chaning color schemes according to theme
    ...colors,
    // Overrides the isDark value will cause re-render inside the context.
    setScheme: scheme => setIsDark(scheme === 'dark'),
    G_Styles: {
      section: {
        backgroundColor: colors.primary,
        shadowColor: colors.secondary,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 12,
      },
      longButton: {
        backgroundColor: colors.green,
        borderRadius: 24,
      },
      mainTitle: {
        fontFamily,
        fontStyle,
        fontWeight,
        fontSize: fontSize_18,
        lineHeight: lineSpacing_28,
        letterSpacing: characterSpacing_0,
        color: colors.secondary,
      },
      title: {
        fontFamily,
        fontStyle,
        fontWeight,
        fontSize: fontSize_17,
        lineHeight: lineSpacing_22,
        letterSpacing: characterSpacing_0,
        color: colors.secondary,
      },
      itemTitle: {
        fontFamily,
        fontStyle,
        fontWeight,
        fontSize: fontSize_13,
        lineHeight: lineSpacing_22,
        letterSpacing: characterSpacing_0,
        color: colors.secondary,
      },
      caption: {
        fontFamily,
        fontStyle,
        fontWeight,
        fontSize: fontSize_10,
        lineHeight: lineSpacing_16,
        letterSpacing: characterSpacing_0,
        color: isDark ? colors.secondary : colors.lightBlack,
      },

      subtitle: {
        fontFamily,
        fontStyle,
        fontWeight,
        fontSize: fontSize_15,
        lineHeight: lineSpacing_20,
        letterSpacing: characterSpacing_0,
        color: isDark ? colors.secondary : colors.lightBlack,
      },
    },
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext);


