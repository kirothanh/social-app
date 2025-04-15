import {TextInput, TextInputProps} from "@mantine/core";
import {forwardRef} from "react";

interface BaseTextInputProps extends TextInputProps {}

const BaseTextInput = forwardRef<HTMLInputElement, BaseTextInputProps>(
  (props, ref) => {
    return <TextInput {...props} ref={ref} />;
  }
);

export default BaseTextInput;
