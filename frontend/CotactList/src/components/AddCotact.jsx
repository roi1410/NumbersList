import { useForm } from "react-hook-form";
import ChangePic from "./ChangePic";
import React, { useContext, useState } from "react";
import { contactListContext } from "../MainContext";

function AddContact() {
  const { url, uploadImg,updateDB } = useContext(contactListContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phonNumber: "",
    },
  });
  function addimgUrl(data) {
    data.imgUrl = url;
    updateDB(data);
    console.log("send data to db");
  }
  return (
    <div className="w-full box-border h-screen bg-white ">
      <form
        onSubmit={handleSubmit((data) => addimgUrl(data))}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
      >
        <ChangePic Contact={false} />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            name
          </label>
          <span className="text-red-500 text-xs italic">
            {errors.phonNumber && "Please choose a name."}
          </span>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="name"
            {...register("name", {
              required: "name is required",
              validate: {
                isvalid: (v) => true,
              },
            })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            phonNumber
          </label>
          <span className="text-red-500 text-xs italic">
            {errors.phonNumber && "Please choose a phonNumber."}
          </span>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phonNumber"
            type="text"
            placeholder="phonNumber"
            {...register("phonNumber", {
              required: "phonNumber is required",
              validate: {
                isvalid: (v) => true,
              },
            })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            email
          </label>
          <span className="text-red-500 text-xs italic">
            {errors.email && "Please choose a email."}
          </span>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="email"
            {...register("email", {
              required: "email is required",
              validate: {
                isvalid: (v) => true,
              },
            })}
          />
        </div>
        {/* img shit */}

        <div className="flex items-center justify-between">
          <button

            onClick={() => {}}

            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddContact;
