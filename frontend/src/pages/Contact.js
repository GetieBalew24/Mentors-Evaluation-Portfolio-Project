import React from 'react';
import { useParams } from 'react-router-dom';
import contactContent from './contact-content';
//pages
import NotFound from './NotFound';
//components
import Contacts from '../components/Contacts';

const Contact = () => {
  const {name}=useParams();
  const contact=contactContent.find((contact)=>contact.name===name);
  if(!contact) return <NotFound/>
  const otherContacts=contactContent.filter(contact=>contact.name!==name);

  return (
    <>
       <h1 className='sm:text-3xl text-1xl font-bold my-6 text-gray-900' > 
            {contact.title}
        </h1>  
        {contact.content.map((paragraph,index)=>(
          <p className='mx-auto leading-relaxed text-base mb-4' key={index}>
            {paragraph}
          </p>
        ))} 
        <h1 className='sm:text-2xl text-xl font-bold my-4 text-gray-900 '>
          Other Contacts
          </h1>
          <div className='flex flex-wrap -m-4'>
            <Contacts contacts={otherContacts}/>
          </div>
    </>
  )
}

export default Contact