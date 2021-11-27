import React from 'react';
import {
  ModalActionButton,
  ModalActionButtonsWrapper,
  ModalBackground,
  ModalBody,
  ModalCrossButton,
  ModalCrossButtonWrapper,
  ModalHeader, ModalInfoWrapper,
  ModalWrapper
} from "../../elements/widgets";
import { faWindowClose} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({
                 showModal = false,
                 toggleModal,
                 modalHeader,
                 modalBody
}) => {
  return showModal ? (
    <>
      <ModalBackground
        onClick={() => toggleModal(false)}
      />
      <ModalWrapper>
        <ModalCrossButtonWrapper>
          <ModalCrossButton
            onClick={() => toggleModal(false)}
          >
            <FontAwesomeIcon
              icon={ faWindowClose }
              color='var(--app-blue)'
              size="1x"
            />
          </ModalCrossButton>
        </ModalCrossButtonWrapper>

        <ModalInfoWrapper>
          <ModalHeader>
            <h2>
              { modalHeader }
            </h2>
          </ModalHeader>

          <ModalBody>
            { modalBody }
          </ModalBody>

          <ModalActionButtonsWrapper>
            <ModalActionButton>
              Add
            </ModalActionButton>
            <ModalActionButton
              onClick={() => toggleModal(false)}
            >
              Cancel
            </ModalActionButton>
          </ModalActionButtonsWrapper>
        </ModalInfoWrapper>

      </ModalWrapper>
    </>
  ) : null;
};

export default Modal;
