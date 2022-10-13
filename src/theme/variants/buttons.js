const base = {
  borderStyle: "solid",
  borderWidth: 1,
  boxShadow: "nav",
  cursor: "pointer",
  // paddingX: 4,
  // paddingY: 4,
  fontFamily: "body",
  fontSize: "button",
  fontWeight: "button",
  letterSpacing: "0.016rem",
  borderRadius: "8px",
}

const common = {
  primary: {
    ...base,
    backgroundColor: "app.primary.30",
    borderColor: "transparent",
    color: "app.secondary.50",
    "&:hover": {
      backgroundColor: "app.primary.80",
      color: "app.secondary.50"
    },
    "&:active": {
      backgroundColor: "app.primary.30",
    },
    "&:disabled": {
      backgroundColor: "app.secondary.70",
      cursor: 'not-allowed',
      color: "app.secondary.80"
    }
  },
  secondary: {
    ...base,
    borderStyle: 'none',
    color: 'app.primary.30',
    backgroundColor: "app.secondary.50",
    "&:hover": {
      backgroundColor: "app.secondary.110",
      color: "app.primary.30"
    },
    "&:active": {
      backgroundColor: "app.secondary.110",
      color: "app.primary.30"
    },
    "&:disabled": {
      backgroundColor: "app.secondary.70",
      cursor: 'not-allowed',
      color: "app.secondary.80"
    }
  },
}

export const buttons = {
  ...common,
}
