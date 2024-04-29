import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";
import Heading from "./Heading";
import { ModalProps } from "../lib/type"

const Modal: React.ForwardRefRenderFunction<unknown, ModalProps> = (props, ref) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    openModal: () => setShowModal(true)
  }));

  const closeModal = () => {
    setShowModal(false);
    props.onClose();
  };

  return (
    <>
      {showModal && (
        <>
          <div className="opacity-25 fixed inset-0 z-40 bg-dark"></div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div ref={modalRef} className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-blue outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 ">
                 <h3 className="text-primary font-bold text-2xl">Generated User name</h3>
                </div>
                <div className="relative p-6 flex-auto">
                 
                  <Heading text={props.content}/>
                </div>
                <div className="flex items-center justify-end p-6  rounded-b">
                  <Button text="Close" className="bg-danger text-secondary px-5" onClick={closeModal}/>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
const CustomModal = forwardRef(Modal)
export default CustomModal;
