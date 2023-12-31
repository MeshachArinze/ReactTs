import { FormEventHandler, useRef } from "react";
import  "./Profile.css";

function ProfileForm(props: any) {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  function submitHandler(event: FormEventHandler) {
    event.preventDefault();
    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;
    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  }
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="control">
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className="control">
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPasswordRef} />
      </div>
      <div className="action">
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
