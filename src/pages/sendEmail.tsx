import { CiAt, CiEdit, CiFileOn } from "react-icons/ci";
import SideNav from "../components/sidenav";

export default function SendEmail() {
  return (
    <div className="w-full flex h-screen">
      <SideNav />
      <div className="flex-1 font-sans ml-5 mt-5">
        <h1 className="text-2xl ml-10 mt-10 text-light">Send Bulk Emails</h1>
        <form action="" className="contain-content p-10 space-y-5">
          <div className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">What is your campaign name?</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Campaign Name" />
              <CiAt />
            </label>
          </div>
          <div className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Chose your contact file (CSV)</span>
              <a className="label-text-alt text-blue" href="#">
                Sample File
              </a>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input type="file" className="grow" placeholder="Campaign Name" />
              <CiFileOn />
            </label>
          </div>
          <div className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Write email Subject (one line)</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Email subject" />
              <CiEdit />
            </label>
          </div>
          <div className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Your HTML Email Template</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Email Template"
            ></textarea>
          </div>
          <div className="">
            <input
              type="submit"
              className="btn btn-primary"
              name="submit"
              value={"Submit"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
