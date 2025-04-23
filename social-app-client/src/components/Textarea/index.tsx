import { Textarea, TextareaProps } from "@mantine/core"
import { forwardRef } from "react";

interface BaseTextareaProps extends TextareaProps {}

const BaseTextArea = forwardRef<HTMLTextAreaElement, BaseTextareaProps>(
  (props, ref) => {
    return <Textarea {...props} ref={ref} />;
  }
);

export default BaseTextArea