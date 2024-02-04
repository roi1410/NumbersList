import { useContext } from "react";
import { contactListContext } from "../MainContext";
import { Link } from "react-router-dom";

const ContactList = () => {
  const { DB } = useContext(contactListContext);

  return (
    <div className="h-screen w-full">
      <div className="flex flex-row">
        <span className="w-1/4 px-2 py-1 font-bold">Img:</span>
        <span className="w-1/4 px-2 py-1 font-bold">Name:</span>
      </div>
      <ul className="border-t border-b divide-y">
        {DB.map((Contact,key) => {
          return (
            <Link to={"ContactPage"} state={Contact}  key={key} className="flex flex-row items-center ">
              <div className="w-1/4 px-2 py-1">
                <div
                  style={{
                    backgroundImage: `url(${Contact.imgUrl})`,
                    backgroundSize: "contain",
                  }}
                  className="w-10  h-10 rounded-full"
                ></div>
              </div>
              <span className="w-1/4 px-2 py-1">
                <span className="font-bold">Name:</span>
                <span className="pl-2">{Contact.name}</span>
              </span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
