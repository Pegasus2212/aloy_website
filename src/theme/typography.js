export const fontScale = [
  "0.628rem", // 0  - 10.048px
  "0.670rem", // 1  - 10.72px
  "0.714rem", // 2  - 11.424px
  "0.762rem", // 3  - 12.192
  "0.813rem", // 4  - 13.008
  "0.868rem", // 5  - 13.888px
  "0.926rem", // 6  - 14.816px
  "0.988rem", // 7  - 15.808px
  "1.054rem", // 8  - 16.864px
  "1.125rem", // 9  - 18px
  "1.200rem", // 10 - 19.2px
  "1.281rem", // 11 - 20.496px
  "1.367rem", // 12 - 21.872px
  "1.458rem", // 13 - 23.328
  "1.556rem", // 14 - 24.896
  "1.660rem", // 15 - 26.56
]

export const fontSizes = {
  xxxxs: fontScale[0],
  xxxs: fontScale[1],
  xxs: fontScale[2],
  xs: fontScale[4],
  sm: fontScale[5],
  md: fontScale[6],
  lg: fontScale[7],
  xl: fontScale[8],
  xxl: fontScale[9],
  xxxl: fontScale[10],
  xxxxl: fontScale[11],
  // headings
  kicker: "3.125rem",
  metric: "2.61375rem",
  h1: fontScale[15],
  h2: fontScale[14],
  h3: fontScale[13],
  h4: fontScale[12],
  h5: fontScale[11],
  h6: fontScale[10],
  // body
  a: fontScale[7],
  p: fontScale[7],
  button: fontScale[7],
  label: fontScale[7],
  subtitle: fontScale[3],
}

// export type FontSize = keyof typeof fontSizes

const weights = {
  normal: 400,
  bold: 600,
  bolder: 700,
}

export const fontWeights = {
  ...weights,
  body: weights.normal,
  button: weights.bold,
  heading: weights.bolder,
}

// export type FontWeight = keyof typeof fontWeights

export const typography = {
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  fontSizes,
  fontWeights,
  lineHeights: {
    body: 1.5,
    heading: 1.25,
    kicker: 1,
  },
}
