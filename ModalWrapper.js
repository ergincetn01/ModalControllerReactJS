import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from "antd";
import { closeModal } from "./ModalActions";

export default function ModalWrapper({
  children,
  size,
  title,
  setWidth,
}) {
  const dispatch = useDispatch();
  return (
    <Modal
      width={setWidth}
      visible={true}
      onCancel={() => dispatch(closeModal())}
      size={size}
      footer=""
      title={title}
    >
      {children}
    </Modal>
  );
}
/*Wrapper is a type of created here. 
We utilize useDispatch hook for controlling the action and closeModal from ModalActions
In Ant Desgin Modal, some of the modal properties are size, footer, visible, onOk and onCancel.
"visible" prop take boolean values. 
onOk & onCancel props can be configured with functions.

*/
