import { useState } from "react";
// import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function NewComponent(){

const [open, setOpen] = useState(false);

  const onOpenModal = () =>{
    console.log("is open is called");
setOpen(true);
  } 
  const onCloseModal = () => setOpen(false);
    return(
        <>
        <h1>bk</h1>
         <div>
      <button onClick={onOpenModal} type="button">Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
      </Modal>
    </div>
        </>
    )
}