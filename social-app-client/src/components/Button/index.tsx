import { Button, ButtonProps } from "@mantine/core"

export interface BaseButtonProps extends ButtonProps {
  type?: "button" | "submit" | "reset"
}
const BaseButton = (props: BaseButtonProps) => {
  return (
    <Button {...props} />
  )
}

export default BaseButton
