import {
  MdAddComment,
  MdEmail,
  MdNotes,
  MdOutlinePowerSettingsNew,
  MdOutlineSend,
  MdOutlineSettingsSuggest,
} from "react-icons/md";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <>
      <div className="h-full w-[250px] bg-background-deep text-text-light text-center flex flex-col justify-between">
        <div className="text-center p-5 my-10 ml-5">
          <div className="flex items-center">
            <MdEmail className="text-2xl" />
            <h1 className="text-xl mx-2">Awesome Email</h1>
          </div>
          <div className="mt-20">
            <div className="flex items-center">
              <MdOutlineSend className="text-xl" />
              <Link to={"/send-email"} className="mx-2">
                Send Bulk Email
              </Link>
            </div>
            <div className="flex items-center mt-5">
              <MdOutlineSettingsSuggest className="text-xl" />
              <h1 className="mx-2">Add Email Config</h1>
            </div>
            <div className="flex items-center mt-5">
              <MdAddComment className="text-xl" />
              <h1 className="mx-2">Add Email Template</h1>
            </div>
            <div className="flex items-center mt-5">
              <MdNotes className="text-xl" />
              <h1 className="mx-2">Email Logs</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center ml-10 mb-5">
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-12 flex items-center justify-center">
              <span>NC</span>
            </div>
          </div>
          <a href="#" className="flex items-center ml-2">
            Logout <MdOutlinePowerSettingsNew className="ml-1" />
          </a>
        </div>
      </div>
    </>
  );
}
