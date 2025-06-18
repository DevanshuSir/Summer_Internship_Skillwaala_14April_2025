import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formData } from "./features/counterSlice";

const Form = () => {
  const counts = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.counter.name);

  const [user, setUser] = useState("");

  function handleForm(e) {
    e.preventDefault();
    dispatch(formData({ UserName: user }));
  }

  return (
    <div>
      <h1>
        Form:- <span style={{ color: "red" }}>{counts}</span>
        <form action="" onSubmit={handleForm}>
          <input
            type="text"
            name=""
            id=""
            placeholder="UserName"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      </h1>

      {data.map((value) => (
        <ul>
          <li>{value.UserName}</li>
        </ul>
      ))}
    </div>
  );
};

export default Form;
