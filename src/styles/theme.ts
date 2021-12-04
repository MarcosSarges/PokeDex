import { RFValue } from 'react-native-responsive-fontsize';

const Montserrat = {
  light: 'Montserrat-Light',
  regular: 'Montserrat-Regular',
  medium: 'Montserrat-Medium',
};

const MontserratAlternative = {
  regular: 'MontserratAlternates-Regular',
  medium: 'MontserratAlternates-Medium',
};

const theme = {
  fonts: {
    headline1: {
      fontSize: RFValue(96),
      fontFamily: Montserrat.light,
      letterSpacing: -1.5,
    },
    headline2: {
      fontSize: RFValue(60),
      fontFamily: Montserrat.light,
      letterSpacing: -0.5,
    },
    headline3: {
      fontSize: RFValue(48),
      fontFamily: Montserrat.regular,
    },
    headline4: {
      fontSize: RFValue(34),
      fontFamily: Montserrat.regular,
      letterSpacing: 0.25,
    },
    headline5: {
      fontSize: RFValue(24),
      fontFamily: Montserrat.regular,
    },
    headline6: {
      fontSize: RFValue(20),
      fontFamily: Montserrat.medium,
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontSize: RFValue(16),
      fontFamily: Montserrat.regular,
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontSize: RFValue(14),
      fontFamily: Montserrat.medium,
      letterSpacing: 0.1,
    },
    bodyText1: {
      fontSize: RFValue(16),
      fontFamily: MontserratAlternative.regular,
      letterSpacing: 0.5,
    },
    bodyText2: {
      fontSize: RFValue(14),
      fontFamily: MontserratAlternative.regular,
      letterSpacing: 0.25,
    },
    button: {
      fontSize: RFValue(14),
      fontFamily: MontserratAlternative.medium,
      letterSpacing: 1.25,
    },
    caption: {
      fontSize: RFValue(12),
      fontFamily: MontserratAlternative.regular,
      letterSpacing: 0.4,
    },
    overline: {
      fontSize: RFValue(10),
      fontFamily: MontserratAlternative.regular,
      letterSpacing: 1.5,
    },
  },
  colors: {},
  shadows: {},
};

export default theme;
