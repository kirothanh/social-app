import { Image, ImageProps } from '@mantine/core'

interface BaseImageProps extends ImageProps {}

const BaseImage = (props: BaseImageProps) => {
  return (
    <Image {...props} />
  )
}

export default BaseImage