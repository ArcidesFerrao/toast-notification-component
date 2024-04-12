import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ButtonsContainer() {
    const buttonType = [
        { id: 1 , title: 'Success', color: 'button-type green', notify: () => {toast.success("Success toast notification")} },
        { id: 2 , title: 'Error', color: 'button-type red', notify: () => {toast.error("Error toast notification")} },
        { id: 3, title: 'Info', color: 'button-type blue', notify: () => {toast.info("Info toast notification")} },
        { id: 4, title: 'Warning', color: 'button-type orange', notify: () => {toast.warning("Warning toast notification")} }
    ];

    
    const notify = () => {
        toast.success("Success");
    };
    


  return (
    <>
        <ToastContainer position='top-right' />
    
        <div className='b-container'>
            {buttonType && buttonType.map((type) => 
                <div key={type.id} className='button-container'>

                    <button className={type.color} onClick={type.notify} >{type.title}</button>
                </div>
            ) }

        </div>
    </>  
  );
}
// toast.configure();
