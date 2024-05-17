import { useEffect, useState } from "react";
import SideNav from "../components/sidenav";
import { GetAllUserData } from "../services/apiService";
import { AiOutlineDelete } from "react-icons/ai";

type Users = {
  id: number;
  emailId?: string;
  created_at?: Date;
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
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Created Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.emailId}</td>
                  {/* Assuming user has job and favoriteColor properties */}
                  <td>{user.created_at?.toString()}</td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteUser(user.id)}
                  >
                    <AiOutlineDelete className="text-red text-xl" />
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
