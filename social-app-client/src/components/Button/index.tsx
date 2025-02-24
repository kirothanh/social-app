import { Button, ButtonProps } from "@mantine/core"

export interface BaseButtonProps extends ButtonProps {}
const BaseButton = (props: BaseButtonProps) => {
  return (
    <Button {...props} />
  )
}

export default BaseButton
