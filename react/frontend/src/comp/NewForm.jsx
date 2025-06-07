import { useState } from "react";
import FormCss from "./form.module.css";

const NewForm = () => {
  const [formValue, setFormValue] = useState({
    userName: "Dev",
    userPass: "123",
  });

  const [profile, setProfile] = useState("");

  function handleForm(e) {
    e.preventDefault();
    console.log(formValue);
    setProfile(formValue.userName);
  }

  function hnadleChange(e) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className={FormCss.main}>
      <h1>{profile === "" ? "Form" : profile} 🌎</h1>
      <form action="" onSubmit={handleForm}>
        <label htmlFor="">UserName</label>
        <input
          type="text"
          name="userName"
          id=""
          className="form-control"
          value={formValue.userName}
          onChange={hnadleChange}
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          name="userPass"
          id=""
          className="form-control"
          value={formValue.userPass}
          onChange={hnadleChange}
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

export default NewForm;
