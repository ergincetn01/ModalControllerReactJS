import React from "react";
import { useSelector } from "react-redux";
import LoginModal from "../Modals/AuthModals/LoginModal";
import SignupModal from "../Modals/AuthModals/SignupModal";

export default function ModalManager() {
  const modalRepo = {
      LoginModal,
      SignupModal,
    
  };
  const currentModal = useSelector((state) => state.modals);
  let renderedModal;
  if (currentModal) {
    const { modalType } = currentModal;
    const ModalComponent = modalRepo[modalType];
    renderedModal = <ModalComponent {...modalType} />;
  }

  return <span>{renderedModal}</span>;
}
/*In manager we pass the imported modals in modalRepo and use them properly in next part.
We worked with useSelector hook for effective selection and check it in an if block.
Let's assume we want to work with LoginModal, modal's name the way we imported and pass to modalRepo is selected 
and ModalComponent is created up to its type.*/
