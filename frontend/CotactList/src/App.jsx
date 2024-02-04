import AddContact from "./components/AddCotact";
import ContactCards from "./components/ContactCards";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ContactPage from "./components/ContactPage";
import { useContext } from "react";
import { contactListContext } from "./MainContext";
export default function App() {
  const contactList = ["roi", "yaniv", "shimon"];
  const {updateDB}=useContext(contactListContext)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ContactCards />}>
            </Route>
              <Route path="/ContactPage" element={<ContactPage/>}></Route>
            <Route path="/AddContact" element={<AddContact  />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
