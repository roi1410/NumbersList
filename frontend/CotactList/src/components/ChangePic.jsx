import axios from "axios";
import React, { useContext, useState } from "react";
import { contactListContext } from "../MainContext";

function ChangePic({ Contact }) {
  const { url, selectedImage, uploadImg } = useContext(contactListContext);

  return (
    <div
      className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col"
      data-testid="flowbite-card"
    >
      <div className="flex h-full flex-col justify-center gap-4 p-6">
        <div className="items-center sm:flex sm:space-x-4 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4">
          {Contact ? (
            <>
              <img
                alt={""}
                src={Contact.imgUrl}
                className="mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0"
              />
            </>
          ) : (
            <>
              <img
                alt={""}
                src={url}
                className="mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0"
              />
            </>
          )}

          <input
            type="file"
            onChange={(e) =>
              Contact ? () => {} : uploadImg(e.target.files[0])
            }
          />

          <button onClick={() => console.log(selectedImage)}>test</button>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ChangePic;
