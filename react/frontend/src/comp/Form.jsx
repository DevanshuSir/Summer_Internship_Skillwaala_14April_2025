import React, { useState } from "react";
import FormCss from "./form.module.css";

const Form = () => {
  const [userName, setUserName] = useState("Devanshu");
  const [pass, setPass] = useState("12345");
  const [profile, setProfile] = useState("");

  function handleForm(e) {
    e.preventDefault();
    console.log({ user: userName, password: pass });
    setProfile(userName);
  }

  return (
    <div className={FormCss.main}>
      <h1>{profile === "" ? "Form" : profile}🌎</h1>
      <form action="" onSubmit={handleForm}>
        <label htmlFor="">UserName</label>
        <input
          type="text"
          name=""
          id=""
          className="form-control"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          name=""
          id=""
          className="form-control"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <input
          type="submit"
          value="Submit 😍"
          className="form-control btn btn-success mt-2"
        />
      </form>
    </div>
  );
};

export default Form;
