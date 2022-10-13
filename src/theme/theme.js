import { colors } from "./colors"
import { typography } from "./typography"
import * as variants from "./variants/variants"

const BASE_SIZE = 8

// TODO: prefer named map
const space = [
  BASE_SIZE * 0, //    0 -  0px
  BASE_SIZE * 0.25, // 1 -  2px
  BASE_SIZE * 0.5, //  2 -  4px
  BASE_SIZE * 1, //    3 -  8px
  BASE_SIZE * 2, //    4 - 16px
  BASE_SIZE * 3, //    5 - 24px
  BASE_SIZE * 4, //    6 - 32px
  BASE_SIZE * 5, //    7 - 40px
  BASE_SIZE * 6, //    8 - 48px
  BASE_SIZE * 7, //    9 - 56px
]

//const breakpoints = ["40em", "52em", "90em"]

const breakpoints = ['40em', '52em', '64em', '90em']

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const responsive = {
  breakpoints,
  mediaQueries: {
    sm: `@media screen and (min-width: ${breakpoints[0]})`,
    md: `@media screen and (min-width: ${breakpoints[1]})`,
    lg: `@media screen and (min-width: ${breakpoints[2]})`,
    xl: `@media screen and (min-width: ${breakpoints[3]})`,
  },
}

const elevation = {
  shadows: {
    box: "0px 1px 1px rgba(55, 99, 122, 0.2)",
    nav: "0px 2px 4px rgba(55, 99, 122, 0.2)",
    notification: "0px 4px 8px rgba(55, 99, 122, 0.2)",
    temp: "0px 1px 3px rgba(55, 99, 122, 0.2)",
    mobileNav: "0px -2px 3px rgba(55, 99, 122, 0.34)",
    modal: "0px 6px 12px rgba(55,99,122,0.2)",
    node: "0px 4px 16px rgba(0, 0, 0, 0.08)",
  },
  zIndices: [-1, 0, 1, 2, 3, 4, 5],
}

const borders = {
  borderWidth: [0, 1, 2, 4, 8],
  radii: {
    xs: 3,
    sm: BASE_SIZE * 0.25,
    md: BASE_SIZE * 0.5,
    lg: BASE_SIZE * 2,
    default: BASE_SIZE * 1.25,
    circle: 99999,
  },
}

const forms = {
  checkbox: {
    color: colors.app.primary[30],
  },
  input: {
    backgroundColor: "white",
    borderColor: colors.app.primary[30],
    borderRadius: 3,
    fontFamily: typography.fonts.body,
    marginBottom: 5,
  },
  label: {
    fontFamily: typography.fonts.body,
    fontSize: typography.fontSizes.md,
  },
  radio: {
    color: colors.app.primary[30],
  },
}

export const styles = {
  root: {
    fontFamily: "body",
    fontWeight: "body",
    lineHeight: "body",
  },
}

// see system ui theme spec:
// https://styled-system.com/theme-specification


export const themed = {
  colors,
  space,
  styles,
  ...borders,
  ...elevation,
  ...forms,
  ...responsive,
  ...breakpoints,
  ...typography,
  ...variants,
}
