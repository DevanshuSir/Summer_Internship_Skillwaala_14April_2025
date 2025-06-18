import React from "react";

const Tailwind = () => {
  return (
    <div className="m-10 bg-image bg-cover rounded-lg p-10 border-4 border-indigo-600 border-double outline outline-4 outline-red-700 outline-offset-4 shadow-2xl shadow-green-900 brightness-125 contrast-100 transition-all ease-linear hover:translate-y-5 flex flex-col justify-center items-center ">
      <h1 className="text-5xl italic font-bold text-center text-green-700 underline hover:text-amber-950 hover:decoration-blue-600 hover:cursor-pointer relative">
        Learn Tailwind Css
      </h1>
      <p className="font-mono leading-loose sm:text-green-800 lg:text-red-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio
        qui reprehenderit. Doloribus labore optio natus aperiam! Alias
        consequuntur incidunt, autem delectus sint quisquam, aliquid impedit
        nihil dolorem labore repellat.
      </p>
      <ul className="list-decimal blur-sm">
        <li>Html</li>
        <li>Css</li>
        <li>Js</li>
      </ul>

      <input
        type="checkbox"
        name=""
        id=""
        className="accent-red-800 absolute bottom-0 left-2/4"
      />
    </div>
  );
};

export default Tailwind;
