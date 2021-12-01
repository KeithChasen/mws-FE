import React from 'react';
import {
  ModalButton,
  ModalButtonsWrapper,
  ModalBackground,
  ModalBody,
  ModalHeader,
  ModalWrapper
} from "../../elements/widgets/modal";

const Modal = ({
   showModal = false,
   toggleModal,
   modalHeader = 'Confirm the Action',
   modalBody = '',
   confirmButtonLabel = 'Confirm',
   cancelButtonLabel = 'Cancel',
}) => {
  return showModal ? (
    <>
      <ModalBackground onClick={() => toggleModal(false)} />
      <ModalWrapper>
          <ModalHeader>
            <h2>
              { modalHeader }
            </h2>
          </ModalHeader>
          <ModalBody>{ modalBody }</ModalBody>
          <ModalButtonsWrapper>
            <ModalButton onClick={() => toggleModal(false)}>
              { confirmButtonLabel }
            </ModalButton>
            <ModalButton onClick={() => toggleModal(false)}>
              { cancelButtonLabel }
            </ModalButton>
          </ModalButtonsWrapper>
      </ModalWrapper>
    </>
  ) : null;
};

export default Modal;
