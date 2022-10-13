// TODO: use utils to generate only the tints/shades used
const app = {
  primary: {
    10: "#E5E5E5",
    20: "#C9FFEF",
    30: "#152F73",
    40: "#0AC88F",
    50: "#0CF4AF",
    60: "#F7FFFD",
    70: "#AAAAAA",
    80: "#1E419D", // Feature thumbnail color and Input field text color
    90: "#B7CBFF",
    100: "#F74545", // Error color
    110: "#FCFDFF",
    120: "#DBE5FF"
  },
  secondary: {
    10: "#888888",
    20: "#5E5E5E",
    30: "#FA2F3B",
    40: "#1E1E1E",
    50: "#F7C545",
    60: "#F3F7FF", // Background color of TextInput
    70: "#7E7E7E",
    80: "#FFFFFF",
    90: "#E84539",
    100: "#2C3344", // Background color for left side navigation section
    110: "#F6BD2C",
    120: "#F44336"
  },
}

export const colors = {
  app,
  // required at this level for form elements but need to review
  // primary: app.primary[30],
  brand: {
    primary: app.primary[30],
    light: app.primary[10],
    dark: app.secondary[10],
  },
  common: {
    black: "#000",
    default: app.primary[30],
    white: "#fff",
  },
  cover: {
    // TODO hex to rgbs converter to use palette reference
    default: "rgba(6,26,34,0.8)",
    slide: "rgba(255,255,255, 0.9)",
  },
  konnectzList: {
    itemBg: "#DBE5FF",
  },
  konnectEditor: {
    sidebar: {
      background: "#ffffff",
      search: {
        background: "#F3F7FF",
        icon: "#B7CBFF",
        text: "#152F73",
      },
      appTile: {
        background: "#ffffff",
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.08)",
        badge: {
          background: "#E84539",
          foreground: "#FFFFFF",
        },
      },

      searchFilter: "#f1f1f1",
      list: "#fefefe",
    },
    editor: {
      background: "#f9fcff",
      nodeBackground: "#ffffff",
      header: {
        background: "#FFFFFF",
      },
      node: {
        input: "#282828",
        button: app.primary[30],
        disabled: app.primary[60],
        port: {
          outer: "#dddddd",
          inner: "",
        },
      },
    },
  },
}
