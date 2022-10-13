import React from "react"
import { Heading, Text as RebassText, TextProps as RebassTextProps } from "rebass"

export const Text = ({ size = "md", weight = "normal", ...props }) => (
  <RebassText tabIndex={-1} sx={{ fontSize: size, fontWeight: weight }} {...props} />
)

export const H1 = props => <Heading as="h1" fontSize="h1" {...props} />

export const H2 = props => <Heading as="h2" fontSize="h2" {...props} />

export const H3 = props => <Heading as="h3" fontSize="h3" {...props} />

export const H4 = props => <Heading as="h4" fontSize="h4" {...props} />

export const H5 = props => <Heading as="h5" fontSize="h5" {...props} />

export const H6 = props => <Heading as="h6" fontSize="h6" {...props} />

export const P = props => <Text as="p" size="p" mb={4} {...props} />

export const FeatureTitle = props => <Text fontSize={{ _: 20, sm: 26, md: 26, lg: 26, xl: 36 }} sx={{ fontWeight: "600", fontStyle: "normal", color: "app.primary.30", textAlign: ["center", "center", "center"] }} {...props}></Text>

export const FeatureDesc = props => <Text
  fontSize={{ _: 14, sm: 14, md: 14, lg: 15, xl: 18 }}
  sx={{
    fontWeight: "normal",
    fontStyle: "normal",
    color: "app.secondary.20",
    textAlign: ["center", "center", "center"],
  }}
  {...props}
>
</Text>

export const AuthSubtitle = props => <Text fontSize={{ _: 14, sm: 14, md: 16, lg: 18, xl: 24 }} sx={{ fontWeight: "500", color: "app.primary.30" }} {...props}></Text>

export const AuthTitle = props => <Text fontSize={{ _: 20, sm: 20, md: 24, lg: 26, xl: 36 }} sx={{ fontWeight: "500", color: "app.primary.30" }} {...props}></Text>

export const ErrorText = props => <Text fontSize={{ _: 8, sm: 8, md: 10, lg: 11, xl: 12 }} sx={{ fontWeight: "500", color: "app.secondary.90" }} {...props}></Text>

export const Span = props => (
  <Text
    sx={{ ":focus": { outline: "none" } }}
    tabIndex={-1}
    as="span"
    fontWeight="inherit"
    fontSize="inherit"
    {...props}
  />
)

export const Label = props => <Text as="label" size="label" {...props} />
