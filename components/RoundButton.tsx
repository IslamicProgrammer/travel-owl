import React from "react"
import { FAB as MIUButton, FABProps } from "@react-native-material/core"

interface IButton extends FABProps {}

const Button: React.FC<IButton> = ({ ...args }) => {
  return <MIUButton style={[args.style, styles]} {...args} />
}

const styles = {
  backgroundColor: "#0077ff",
}

export default Button
