import React from "react";

const ConfirmationModal = ({
  title,
  message,
  successButtonName,
  successAction,
  handleCloseModal,
  modalData,
}) => {
  return (
    <div>
      {/* The button to open modal */}

      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              // delete that id
              htmlFor="confirmation-modal"
              className="btn"
            >
              {/* Delete Name */}
              {successButtonName}
            </label>
            <button
              onClick={handleCloseModal}
              // set null
              className="btn btn-outline"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
