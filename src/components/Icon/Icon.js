import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Text } from "rebass"
import { fontScale } from "../../theme/typography"

// export type IconSize =
//   | "xs"
//   | "sm"
//   | "md"
//   | "lg"
//   | "xl"
//   | "xxl"
//   | "xxxl"
//   | "xxxxl";

export const iconSizes = {
  xs: fontScale[0],
  sm: fontScale[3],
  md: fontScale[7],
  lg: fontScale[8],
  xl: fontScale[11],
  xxl: fontScale[15],
  xxxl: 32,
  xxxxl: 48,
}

// type IconProps = & {
//   icon: IconDefinition;
//   size?: IconSize | number;
//   color?: string;
// };

export const Icon = ({ icon, label, onClick, labelColor, size = "md", color, ...textProps }) => (
  <Text
    as="span"
    onClick={onClick}
    {...textProps}
    color={color}
    fontSize={typeof size === "string" ? iconSizes[size] : size}
  >
    <FontAwesomeIcon icon={icon} color={color} />
    {label && <span style={{ color: labelColor }}>{label}</span>}
  </Text>
)

// type DecoratorIconProps = {
//   icon: IconDefinition;
//   position?: "left" | "right";
//   small?: boolean;
//   size?: IconSize | number;
//   iconColor?: string;
// };

export const DecoratorIcon = ({ icon, position = "left", size, iconColor }) => {
  const rightIconProps = position === "right" ? { pl: 3, ml: "auto" } : {}

  return <Icon icon={icon} as="span" mr={2} {...rightIconProps} size={size} color={iconColor} />
}
