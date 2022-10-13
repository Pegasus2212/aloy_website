const fill = {
  flex: 1,
  flexBasis: "grow",
}

const center = {
  alignItems: "center",
  justifyContent: "center",
}

const warning = {
  background: "yellow",
}

export const flex = {
  fill,
  center,
  fillCentered: { ...fill, ...center },
  warning,
}
