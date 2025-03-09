import { Avatar, AvatarProps } from '@mantine/core'

interface BaseAvatarProps extends AvatarProps {}

const BaseAvatar = (props: BaseAvatarProps) => {
  return (
    <Avatar {...props} />
  )
}

export default BaseAvatar