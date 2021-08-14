import { useState } from 'react';

import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) {
    const [modelIsOpen, setModelIsOpen] = useState(false);

   function deleteHandler(){
       setModelIsOpen(true)
    }

    function modelCloseHandler(){
        setModelIsOpen(false)
    }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* can be done in two ways */}
      {/* {modelIsOpen ? <Modal /> : null} */}
      {modelIsOpen && <Modal onCancel={modelCloseHandler} onConfirm={modelCloseHandler} />}
      {modelIsOpen && <Backdrop onClick={modelCloseHandler} /> }
    </div>
  );
}

export default Todo;
