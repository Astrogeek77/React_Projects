function Modal(props) {
    function cancelHandler(){
        props.onCancel()
    }

    function confirmHandler(){
        props.onConfirm()
    }

  return (
    <div class="modal">
      <p>Are you sure?</p>
      <button onClick={cancelHandler} class="btn btn--alt">Cancel</button>
      <button onClick={confirmHandler} class="btn">Confirm</button>
    </div>
  );
}

export default Modal;
