import { useEffect, useState } from "react";
import SideNav from "../components/sidenav";
import { GetAllUserData } from "../services/apiService";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import AddUserModal from "../components/addUserModal";

type Users = {
  id: number;
  emailId?: string;
  created_at?: Date;
  userType?: number;
};

export default function ManageUsers() {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetAllUserData();
        if (userData !== undefined) {
          console.log("At ease", userData);
          setUsers(userData);
        } else {
          console.log("User list empty");
        }
      } catch (error) {
        console.log("Something went wrong while getting user data", error);
      }
    };

    fetchData();
  }, []);

  const deleteUser = (id: number) => {
    console.log("User needs to be deleted", id);
  };
  return (
    <div className="w-full flex h-screen">
      <SideNav />
      <div className="flex-1 font-sans ml-5 mt-5">
        <h1 className="text-2xl ml-10 mt-10 text-light">Manage Users</h1>

        <div className="overflow-x-auto m-10">
          <div className="flex justify-end mb-4 mr-16">
            <button
              className="btn btn-primary"
              onClick={() => {
                const modal = document.getElementById(
                  "user_modal"
                ) as HTMLDialogElement;
                if (modal !== null) {
                  modal.showModal();
                }
              }}
            >
              <HiOutlinePlusCircle />
              Add User
            </button>
          </div>

          <div>
            <AddUserModal />
          </div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>User Type</th>
                <th>Created Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.emailId}</td>
                  <td>
                    {user.userType == 1 ? (
                      <b className="text-blue">ADMIN</b>
                    ) : (
                      <b>TEST</b>
                    )}
                  </td>
                  {/* Assuming user has job and favoriteColor properties */}
                  <td>{user.created_at?.toString()}</td>
                  <td
                    style={{
                      cursor: user.id === 1 ? "not-allowed" : "pointer",
                    }}
                    onClick={
                      user.id === 1 ? undefined : () => deleteUser(user.id)
                    }
                  >
                    <AiOutlineDelete
                      className={
                        user.id === 1
                          ? "text-gray-400 text-xl"
                          : "text-red text-xl"
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
