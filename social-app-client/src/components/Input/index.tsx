import { TextInput, TextInputProps } from "@mantine/core"

interface BaseTextInputProps extends TextInputProps {}

const BaseTextInput = (props: BaseTextInputProps) => {
  return (
      <TextInput {...props} />
  )
}

export default BaseTextInput