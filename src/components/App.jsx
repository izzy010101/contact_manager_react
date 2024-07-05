import '../App.css';
import '../reset.css';
import  { useState, useEffect, useMemo } from 'react';
import ContactForm from "./ContactForm.jsx";



const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log('Contacts updated:', contacts);
  }, [contacts]);

  const memoizedContacts = useMemo(() => contacts, [contacts]);

  const addContact = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const deleteContact = (indexToDelete) => {
    setContacts((prevContacts) => 
      prevContacts.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <>
    <div className="App">
      {/* heading */}
      <h1 
      className='class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
        Contact Manager
      </h1>

      <ContactForm onAddContact={addContact} />
      <ul>
        {memoizedContacts.map((contact, index) => (
          <li 
          className='text-lg font-semibold'
          key={index}>
            {contact.name} - {contact.email} - {contact.phone}  
            <button
              onClick={() => deleteContact(index)} 
              type="button" 
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 m-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete Contact</button>
          </li>
          
        ))}
      </ul>
    </div>
   
    </>
  );
};

export default App;
