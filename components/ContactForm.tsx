import React, { useState } from 'react';
import emailjs from 'emailjs-com';

interface FormData extends Record<string, unknown> {
    name: string;
    email: string;
    message: string;
  }
  
  function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      message: '',
    });
  
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!formData.name || !formData.email || !formData.message) {
        setErrorMessage('Fill in all fields.');
        return;
      }
  
      emailjs
  .send(
    'service_conuojr',         // Your EmailJS service ID
    'template_jwac0bh',        // Your EmailJS template ID
    formData as Record<string, unknown>, // Cast formData to Record<string, unknown>
    'UnbCCavJVyIoAg4eB'        // Your EmailJS user/public key
  )
  .then(
    (response) => {
      console.log('Sent!', response.status, response.text);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrorMessage('');
    },
    (error) => {
      console.error('Failed to send message:', error);
      setErrorMessage('Failed to send message. Please try again.');
    }
  );
    };
  
    return (
      <div className="relative w-[500px] mx-auto mt-60 mb-[100px] text-black">
        {isSubmitted ? (
          <p className="text-center">
            <span className="text-2xl glow-text">Message Sent!</span> <br />
            <span className="text-xl">I will get back to you shortly...</span>
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              type="text"
              placeholder="full name"
              value={formData.name}
              onChange={handleChange}
              className="font-normal text-[0.875em] w-[470px] h-[50px] px-[15px] 
                         bg-transparent outline-none text-[#ffffff] border border-[#b3aca7] 
                         border-b-0 transition-all duration-300 hover:bg-[#5b5b5b] hover:text-black"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              className="font-normal text-[0.875em] w-[470px] h-[50px] px-[15px] 
                         bg-transparent outline-none text-[#ffffff] border border-[#b3aca7] 
                         border-b-0 transition-all duration-300 hover:bg-[#5b5b5b] hover:text-black"
              required
            />
            <textarea
              name="message"
              placeholder="message"
              value={formData.message}
              onChange={handleChange}
              className="font-normal text-[0.875em] w-[470px] h-[110px] px-[15px] py-3
                         bg-transparent outline-none text-[#ffffff] border border-[#b3aca7] 
                         transition-all duration-300 hover:bg-[#5b5b5b] hover:text-black"
              required
            />
            {errorMessage && <p className="text-[#f09a0f]">{errorMessage}</p>}
  
            <input
              type="submit"
              value="GO!"
              className="w-[470px] p-5 mt-[-5px] font-normal text-[0.875em] text-[#b3aca7] 
                         cursor-pointer border border-[#b3aca7] border-t-0 outline-none 
                         transition-all duration-300 hover:bg-[#64646437] hover:text-black"
            />
          </form>
        )}
      </div>
    );
  }
  

export default ContactForm