import { Title, TitleProps } from "@mantine/core"

interface BaseTitleProps extends TitleProps {}

const BaseTitle = (props: BaseTitleProps) => {
  return (
    <Title {...props}></Title>
  )
}

export default BaseTitle