import React from "react";
import './Contact.css'

function Contact(){
    return(
        <div className='contact'>
            <div style={{
                position:'relative',
                top:'100px',
                left:'100px',
                right:'0',
            }}>
                <h2 className='title_head_contact'>
                    <span>Liên hệ với chúng tôi</span>
                </h2>
                
                
                <form action="/contact">
                    <div className='form_group form_group1 '>
                        <input type='text' placeholder='họ và tên' id='name'  className='form_control '/>
                    </div>
                    <div className='form_group'>
                        <input type='email' placeholder='email' id='email'  className='form_control '/>
                    </div>
                    <div className='form_group'>
                        <textarea name='contact[body]' placeholder='Viết liên hệ của bạn' id='comment' className='form_control form-control-lg '  rows='5' required=''></textarea>
                    </div>
                    <div >
                        <button type='submit' className="btn_bg">Gửi tin nhắn</button>
                    </div>
                </form>
             
            </div>
        </div>
    )
}
export default Contact