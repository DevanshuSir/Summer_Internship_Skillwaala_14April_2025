// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./webpage/HomePage";
// import AboutPage from "./webpage/AboutPage";
// import Navbar from "./webpage/Navbar";
// import Footer from "./webpage/Footer";
// import Data from "./webpage/Data";
// import SingleData from "./webpage/SingleData";

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/data" element={<Data />} />
//           <Route path="/single/:datakey" element={<SingleData />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Tailwind from "./UI/Tailwind";

// const App = () => {
//   return (
//     <div>
//       <Tailwind />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import ChildA from "./propdrill/ChildA";

// const App = () => {
//   let userData = { userName: "Devanshu", age: 28 };

//   return (
//     <div>
//       <h1 className="font-semibold text-6xl text-center">
//         App Comp - {userData.userName}/{userData.age}
//       </h1>
//       <ChildA user={userData.userName} />
//     </div>
//   );
// };

// export default App;

import React, { createContext } from "react";
import ChildOne from "./contextapi/ChildOne";
import ChildA from "./propdrill/ChildA";

const data = createContext();

const App = () => {
  let userName = "Manny";

  // context-api = create / provide / consume

  return (
    <div>
      <h1 className="text-7xl text-center font-extrabold text-lime-700">
        App Comp :- {userName}
      </h1>
      <data.Provider value={userName}>
        <ChildOne />
        <ChildA />
      </data.Provider>
    </div>
  );
};

export default App;
export { data };
