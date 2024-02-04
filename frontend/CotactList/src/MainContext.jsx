import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const contactListContext = createContext({
  DB: [
    {
      _id: "",
      name: "",
      phonNumber: "",
      imgUrl: "",
      email: "",
      __v: Number,
    },
  ],
  uploadImg: () => {},
  selectedImage: "",
  setSelectedImage: () => {},
  url: "",
  setUrl: () => {},
  updateDB: () => {},
  ChangeContact: () => {},
});
const MainContext = ({ children }) => {
  const name = "roi";
  const id = "65b90699fcfc9d186bddc1c0";

  const operationUrl = "https://numberslist.onrender.com/api/phonNumbers/";

  const [DB, setDB] = useState([
    {
      _id: "",
      name: "",
      phonNumber: "",
      email: "",
      imgUrl: "",
      _id: "",
      __v: Number,
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(operationUrl + "AllContact");

        setDB(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const [selectedImage, setSelectedImage] = useState(
    "https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg"
  );
  const [url, setUrl] = useState(
    "https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg"
  );

  function updateDB(newContact) {
    try {
      axios.post(operationUrl + "addContact", newContact).then((res) => {
        setDB((prev) => [...prev, newContact]);
      });
    } catch (error) {
      console.log(error);
    }
  }

  const uploadImg = (selectedImage) => {
    const presetKey = "sxbyje53";
    const cloudName = "dqesb3ey9";

    if (selectedImage) {
      const data = new FormData();
      data.append("file", selectedImage);
      data.append("upload_preset", presetKey);
      axios
        .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, data)
        .then((res) => setUrl(res.data.secure_url))
        .catch((error) => console.error(error));
    }
  };
  const ChangeContact = (UpdateContact) => {
    console.log("ChangeContact activeted");
    try {
      axios
        .post(operationUrl + "updateContactByID", UpdateContact)
        .then((res) => {
          setDB(
            DB.map((element) => {
              if (element._id === UpdateContact._id) {
                return UpdateContact; // Return the updated element
              } else {
                return element; // Return the original element if the condition is not met
              }
            })
          );
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <contactListContext.Provider
      value={{
        DB,
        uploadImg,
        ChangeContact,
        selectedImage,
        setSelectedImage,
        setUrl,
        url,
        updateDB,
      }}
    >
      {children}
    </contactListContext.Provider>
  );
};

export default MainContext;
