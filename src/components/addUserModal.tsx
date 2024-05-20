import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosEyeOff } from "react-icons/io";

type FormValues = {
  email: string;
  password: string;
  rePassword: string;
  isTestUser: boolean;
};
export default function AddUserModal() {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
    rePassword: "",
    isTestUser: false,
  });

  function onFormChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormValues({
      ...formValues,
      [e.target.name]: value,
    });
  }
  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Is test user", formValues.isTestUser);
  }
  return (
    <>
      <dialog id="user_modal" className="modal">
        <div className="modal-box">
          <h3 className="px-5 font-bold text-lg">Add User</h3>

          <form action="" className="px-5" onSubmit={onSubmitHandler}>
            <div className="form-control w-full max-w-xl gap-y-1">
              <label className="label cursor-pointer">
                <span className="label-text">Test User</span>
                <input
                  type="checkbox"
                  checked={formValues.isTestUser}
                  name="isTestUser"
                  onChange={onFormChangeHandler}
                  className="checkbox checkbox-primary"
                />
              </label>
              <div className="label">
                <span className="label-text">Enter e-Mail Id</span>
              </div>
              <label className="input input-bordered flex items-center">
                <input
                  type="email"
                  className="grow"
                  placeholder="email"
                  name="email"
                  value={formValues.email}
                  onChange={onFormChangeHandler}
                />
                <HiOutlineMail />
              </label>
              <div className="label">
                <span className="label-text">Enter Password</span>
              </div>
              <label className="input input-bordered flex items-center">
                <input
                  type="password"
                  className="grow"
                  placeholder="password"
                  disabled={formValues.isTestUser}
                  name="password"
                  value={formValues.password}
                  onChange={onFormChangeHandler}
                />
                <IoIosEyeOff />
              </label>
              <div className="label">
                <span className="label-text">Re-enter Password</span>
              </div>
              <label className="input input-bordered flex items-center">
                <input
                  type="password"
                  className="grow"
                  placeholder="password"
                  disabled={formValues.isTestUser}
                  name="rePassword"
                  value={formValues.rePassword}
                  onChange={onFormChangeHandler}
                />
                <IoIosEyeOff />
              </label>
              <div className="my-2">
                <button className="btn btn-primary">Add User</button>
              </div>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <input type="submit" className="" value={"Submit"} />
        </form>
      </dialog>
    </>
  );
}
