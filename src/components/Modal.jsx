import { useState, useEffect } from "react";

const Modal = ({ children, onClose, show }) => {
  //   const [show, setShow] = useState(false);

  useEffect(() => {
    // setShow(true);
  }, []);

  const handleClose = () => {
    // setShow(false);
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
