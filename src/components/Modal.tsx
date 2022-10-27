import { Modal } from "antd"
import { ModalFormProp } from "../models/ModalFormProp";


const ModalForm = ({
  visible,
  onCancel,
  children
}: ModalFormProp) => {
  return (
    <Modal
      visible={visible}
      width={800}
      footer={<div />}
      onCancel={onCancel}
    >
      {children}
    </Modal>
  );
};

export default ModalForm;
