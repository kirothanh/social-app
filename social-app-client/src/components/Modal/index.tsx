import { Modal, ModalProps } from "@mantine/core"

interface BaseModalProps extends ModalProps {}

const BaseModal = (props: BaseModalProps) => {
  return (
    <Modal {...props}></Modal>
  )
}

export default BaseModal