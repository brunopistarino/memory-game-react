const Modal = ({ children, show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
