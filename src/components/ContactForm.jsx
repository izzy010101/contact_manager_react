import { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErros] = useState({});

  // FORM VALIDATION
  const validateForm = () => {
    const errors = {};
    const trimmedPhone = phone.trim();
    console.log('Trimmed phone:', phone.trim());
console.log('Phone regex test result:', /^\+(?:[0-9] ?){6,14}[0-9]$/.test(phone.trim()));


    if(!name.trim()) {
      errors.name = "Name is required";
    }

    if(!email.trim()) {
      errors.email = "Email is required";
      
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errors.email = "Email address is not valid!";
    }

    if(!phone.trim()) {
      errors.phone = "Phone number must be entered";
  
    } else if(!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(trimmedPhone)) {
      
      errors.phone = "Phone number invalid!"
    }

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateForm();

    if(Object.keys(validation).length > 0) {
      setErros(validation);

    } else {

      onAddContact({ name, email, phone });
      setName('');
      setEmail('');
      setPhone('');
      setErros({});
    }

  };

  return (
    
    <form onSubmit={handleSubmit} className="contact-form" noValidate >

      <div>
        <label 
        className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      </div>
      <div>
        <label
        className="block text-gray-700 text-sm font-bold mb-2"
        >Email:
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        { <p className='text-red-500 text-sm'>{errors.email}</p>}
      </div>
      <div>
        <label
        className="block text-gray-700 text-sm font-bold mb-2">
          Phone:
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
      </div>
      <button 
        type='submit'
        className="text-white bg-blue-500 hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
