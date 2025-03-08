import { Notification } from '@mantine/core';

interface BaseNotificationProps {
  title?: string;
  message: string;
  color?: string;
  onClick?: () => void;
}

const BaseNotification = ({title, message, color="blue", onClick}: BaseNotificationProps) => {
  return (
    <Notification title={title} color={color} onClick={onClick}>
      {message}
    </Notification>
  )
}

export default BaseNotification