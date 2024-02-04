import React from "react";

function UperProfile({ name, phonNumber, imgUrl }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
        className="bg-no-repeat bg-cover bg-center h-fit w-full rounded-lg border-2 border-indigo-500  p-4 text-center shadow-lg dark:bg-gray-800"
      >
        <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
          <img src={imgUrl} alt="" className="rounded-full h-full w-full" />
        </figure>
        <h2 className="mt-4 text-xl font-bold text-indigo-600 dark:text-black">
          {name}
        </h2>
        <p className="mb-4 font-bold text-black dark:text-text-black">
          {phonNumber}
        </p>
        <div className="flex items-center justify-center">
          <button className="rounded-full bg-green-600 px-4 py-2 text-white hover:bg-indigo-700 ">
            Call
          </button>
        </div>
      </div>
    </>
  );
}

export default UperProfile;
