import { PasswordInput, PasswordInputProps } from "@mantine/core"

interface BasePasswordInputProps extends PasswordInputProps {}

const BasePasswordInput = (props: BasePasswordInputProps) => {
  return (
    <PasswordInput {...props} />
  )
}

export default BasePasswordInput