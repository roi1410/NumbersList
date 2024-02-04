import {useState} from "react";
import { useLocation } from 'react-router-dom'
import UperProfile from "./UperProfile";
import AddCotact from "./AddCotact";
import EditProfile from "./EditProfile";

function ContactPage() {
    const location=useLocation()

    const [Contact, setContact] = useState(location.state)
    console.log(Contact);

  
  return (
    <>
    <UperProfile name={Contact.name} phonNumber={Contact.phonNumber} imgUrl={Contact.imgUrl}/>
    <EditProfile Contact={Contact} setContact={setContact}/>
    
    
    
    </>

    
  );
}

export default ContactPage;
