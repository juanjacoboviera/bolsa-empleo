import React from 'react'
import ReactDOM  from 'react-dom';
import './modal.css'

const Modal = () => {
    return ReactDOM.createPortal (
        <div className='modal__overlay'>
            <div className="modal__container">
                <h1>hello</h1>
                    {/* <Link to={close}  className='closeModal__btn'>X</Link> */}
            </div>
        </div>,
    document.getElementById('modal')
      )
}

export default Modal