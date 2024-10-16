import React, { useState,useEffect,useRef } from 'react';
import { Headings } from '../../components';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import { Toast } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './PhoneNumberInput.css';

const Contact = () => {
  const { t } = useTranslation();
  const [captchaText, setCaptchaText] = useState(''); 
  const [userInput, setUserInput] = useState(''); 
  const canvasRef = useRef(null); 
  const [showToast, setShowToast] = useState(false);
     
  useEffect(() => { 
      const canvas = canvasRef.current; 
      const ctx = canvas.getContext('2d'); 
      initializeCaptcha(ctx); 
  }, []); 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    message: '',
    
    agreeToCommunications: false,
    agreeToStoreData: false
  });

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value }  );
    //const {target} = e
    //const {value} = target
    
  };

  const generateRandomChar = (min, max) => 
        String.fromCharCode(Math.floor 
            (Math.random() * (max - min + 1) + min)); 
  
    const generateCaptchaText = () => { 
        let captcha = ''; 
        for (let i = 0; i < 4; i++) { 
            
            captcha += generateRandomChar(48, 57); 
        } 
        return captcha.split('').sort( 
            () => Math.random() - 0.5).join(''); 
    }; 
  
    const drawCaptchaOnCanvas = (ctx, captcha) => { 
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
        const textColors = ['rgb(0,0,0)', 'rgb(130,130,130)']; 
        const letterSpace = 150 / captcha.length; 
        for (let i = 0; i < captcha.length; i++) { 
            const xInitialSpace = 25; 
            ctx.font = '20px Roboto Mono'; 
            ctx.fillStyle = textColors[Math.floor( 
                Math.random() * 2)]; 
            ctx.fillText( 
                captcha[i], 
                xInitialSpace + i * letterSpace, 
                  
                // Randomize Y position slightly 
                Math.floor(Math.random() * 16 + 25), 
                100 
            ); 
        } 
    }; 
  
    const initializeCaptcha = (ctx) => { 
        setUserInput(''); 
        const newCaptcha = generateCaptchaText(); 
        setCaptchaText(newCaptcha); 
        drawCaptchaOnCanvas(ctx, newCaptcha); 
    }; 
  
    const handleUserInputChange = (e) => { 
        setUserInput(e.target.value); 
    }; 
  
    const handleCaptchaSubmit = () => { 
        if (userInput === captchaText) { 
          setShowToast(true);
          // Clear form fields after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        phoneNumber: '+91',
        message: '',
       
        agreeToCommunications: false,
        agreeToStoreData: false,
        
      });
      const canvas = canvasRef.current; 
     const ctx = canvas.getContext('2d'); 
      initializeCaptcha(ctx); 
      setUserInput(''); 
        } else { 
            alert('Incorrect Captcha'); 
            const canvas = canvasRef.current; 
            const ctx = canvas.getContext('2d'); 
            initializeCaptcha(ctx); 
        } 
    }; 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    //handleCaptchaSubmit();
    if (userInput === captchaText) { 
      setShowToast(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        phoneNumber: '+91',
        message: '',
    
        agreeToCommunications: false,
        agreeToStoreData: false,
        
      });
      const canvas = canvasRef.current; 
     const ctx = canvas.getContext('2d'); 
      initializeCaptcha(ctx); 
      setUserInput(''); 
    try {
      // Send form data to backend API
     
      const response = await axios.post('https://orelse.ai/api/contact', formData);
      console.log('Form submission successful:', response.data);
               
      
     
      
      const res = await axios.post('https://orelse.ai/api/send-email', formData); 

      if (!res.ok) {
        throw new Error('Failed to send email');
      }

      // Handle successful submission (e.g., display success message)
      
    } catch (error) {
      console.error(  error);
      // Handle error gracefully (e.g., display error message)
    }
    

    } else { 
      alert('Incorrect Captcha'); 
      const canvas = canvasRef.current; 
      const ctx = canvas.getContext('2d'); 
      initializeCaptcha(ctx); 
  } 

  };


  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phoneNumber: value });
  };
  
  return (
    <div className="section-padding" id="contact">
      <Headings title={t("Contact Us")} text={t("Let's Discuss the Best Solution for You")} />
      <div className="contact-divider" style={{display:'flex'}}>
        <div className="col-md-4" style={{padding:'60px' ,backgroundColor:'#f3f3f3' }}>
        <h1 className='title'>Invest in nature</h1>
        <p></p>
      </div> 
<div className="col-md-8"> 

      <div className="contact" >
        <div className="row">
          <div className="formdetails">
            <form onSubmit={handleSubmit}>


            
  <div style={{ display: 'flex', flexDirection: 'column' }}>
  <div style={{ display: 'flex', marginBottom: '20px' }}>
    
    <input
      className="form-control"
      type="text"
      placeholder={t("First Name")}
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      required
    />
  </div>
  <div style={{ display: 'flex', marginBottom: '20px' }}>
    
    <input
      className="form-control"
      type="text"
      placeholder={t("Last Name")}
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      required
    />
  </div>
</div>

<div style={{ display: 'flex', flexDirection: 'column' }}>
  <div style={{ display: 'flex', marginBottom: '20px' }}>
    
    <input
      className="form-control"
      type="email"
      placeholder={t("Email")}
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>
  <div style={{ display: 'flex', marginBottom: '20px' }}>
   
    <input
      className="form-control"
      type="text"
      placeholder={t("Company Name")}
      name="companyName"
      value={formData.companyName}
      onChange={handleChange}
      required
    />
  </div>
</div>






<div style={{ display: 'flex', marginBottom: '20px' }}>
  
<PhoneInput
    country={'in'}
        
    placeholder={t("Phone Number")}
    required
    inputProps={{
      name: 'phoneNumber',
      required: true,
      autoFocus: true
    }}
    value={formData.phoneNumber}
    onChange={handlePhoneChange}
  />
</div>



                  <div className="form-group">
                  <label htmlFor="Textarea1">{t("Message*")}</label> 
                    <textarea
                      className="form-control"
                      id="Textareamessage"
                      rows="3"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  
                  <div className="form-group checkbox-group">
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="agreeToCommunications"
                      checked={formData.agreeToCommunications}
                      onChange={() => setFormData({ ...formData, agreeToCommunications: !formData.agreeToCommunications })}
                      required
                    />
                    <label htmlFor="checkbox">{t("I agree to receive newsletters")}</label>
                  </div>

                  <div className="form-group checkbox-group">
                    <input
                      type="checkbox"
                      id="checkbox2"
                      name="agreeToStoreData"
                      checked={formData.agreeToStoreData}
                      onChange={() => setFormData({ ...formData, agreeToStoreData: !formData.agreeToStoreData })}
                      required
                    />
                    <label htmlFor="checkbox2">{t("I agree to store and process my personal data")}</label>
                  </div>
                  <div> 
             
             
                  <label style={{  marginTop:'20px',minWidth: '130px' }}>{t("Captcha Verification")}</label>
         <div className="container-captcha"> 
             <div className="wrapper-captcha"> 
                 <canvas ref={canvasRef} 
                     width="200"
                     height="70"> 

                 </canvas> 
                 <button type="button" id="reload-button" onClick={ 
                     () => initializeCaptcha( 
                         canvasRef.current.getContext('2d'))}> 
                     Reload 
                 </button> 
             </div> 
             <input 
              className="form-control"
                 type="text"
                 id="user-input"
                 placeholder="Enter the text in the image"
                 value={userInput} 
                 autocomplete="off"
                 onChange={handleUserInputChange}/> 
                   
             
         </div> 
     </div> 
     <button type="submit" className="btn-orelse-contact"  >  {t("Submit")}</button>
          
         </form>

         <Toast
  show={showToast}
  onClose={() => setShowToast(false)}
  delay={3000}
  autohide
  position="top-end" // Position the toast on the top right corner
  style={toastStyle}
>
  <Toast.Header>
    <strong className="mr-auto">Success</strong>
  </Toast.Header>
  <Toast.Body style={{fontSize:"18px",backgroundColor:'#ECFADC'}}>Form submitted successfully!</Toast.Body>
</Toast>
         </div>
         </div>
    </div>
            
        </div>
      </div>
    </div>
  );
};
const toastStyle = {
  position: 'fixed',
  top: '20px',
  right: '20px',
  width: '300px', 
  height: '150px', 
  padding: '20px', 
  zIndex: 1050,
};

export default Contact;
