import { HiMiniUsers } from "react-icons/hi2";
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
            <Link to={"/"} className="text-xl mx-2">
              Awesome Email
            </Link>
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
              <Link to={"/add-config"} className="mx-2">
                Add Email Config
              </Link>
            </div>
            <div className="flex items-center mt-5">
              <MdAddComment className="text-xl" />
              <Link to={"/add-template"} className="mx-2">
                Add Email Template
              </Link>
            </div>
            <div className="flex items-center mt-5">
              <MdNotes className="text-xl" />
              <Link to={"/view-logs"} className="mx-2">
                View Logs
              </Link>
            </div>
            <div className="flex items-center mt-5">
              <HiMiniUsers className="text-xl" />
              <Link to={"/manage-users"} className="mx-2">
                Manage Users
              </Link>
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
