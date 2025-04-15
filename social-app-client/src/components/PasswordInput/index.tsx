import {PasswordInput, PasswordInputProps} from "@mantine/core";
import {forwardRef} from "react";

interface BasePasswordInputProps extends PasswordInputProps {}

const BasePasswordInput = forwardRef<HTMLInputElement, BasePasswordInputProps>(
  (props, ref) => {
    return <PasswordInput {...props} ref={ref} />;
  }
);

export default BasePasswordInput;
