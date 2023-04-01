import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Alert } from '@mui/material';
function Conatct(){
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_wcd7qp5', 'template_25txssm', form.current, 'YN_LDoaPWI7CmevUV')
        .then((result) => {
            console.log(result.text);
            alert("msg sent")
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <div className="container-fluid" id='contact'>
            <h1 className="text-color text-center mt-5">Contact me!</h1>
            <div className="row d-flex justify-content-center align-items-center">
                <form className="form-wrapper" ref={form} onSubmit={sendEmail}>
                <input className="box-size form-control" name='user_name'  placeholder="Name"></input> <br/>
                <input className="box-size  form-control" name='tel'  placeholder="Mobile No."></input><br/>
                <input className="box-size  form-control" name='user_email' placeholder="E-mail"></input><br/>
                <textarea className="form-control " name="message" placeholder="type your message"></textarea><br/>
                <button className='btn center' type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}
export default Conatct;