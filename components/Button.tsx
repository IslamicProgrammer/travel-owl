import React from "react"
import { Button as BaseButton, ButtonProps } from "react-native"

interface IButton extends ButtonProps {}

const Button: React.FC<IButton> = ({ ...args }) => {
  return <BaseButton {...args} />
}

const styles = {
  backgroundColor: "#0077ff",
}

export default Button
