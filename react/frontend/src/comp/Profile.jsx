import React from "react";
import ProfileCss from "./profile.module.css";
import DevanshuSir from "./media/DSC04134.JPG";

const Profile = () => {
  return (
    <div>
      <h1 className={ProfileCss.profile}>Profile 😍</h1>
      <div className={ProfileCss.profile_card}>
        <img src=" " alt="" className={ProfileCss.profile_image} />
      </div>
    </div>
  );
};

export default Profile;
