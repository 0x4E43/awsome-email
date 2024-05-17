type APIResponse = {
  message: string;
  status: number;
  data?: never[];
};
type Users = {
  id: number;
  emailID?: string;
  created_at?: Date;
};
const ROOT_URL = "http://localhost:1323";
const authToken = window.localStorage.getItem("token");
export async function GetAllUserData() {
  try {
    const res = await fetch(ROOT_URL + "/app/user/list-all", {
      headers: {
        Authorization: `Bearer ${authToken}`, // Assuming Bearer token authentication
      },
    });
    const apiResponse: APIResponse = await res.json();
    console.log(apiResponse);
    const userData: Users[] = Array.isArray(apiResponse.data)
      ? apiResponse.data
      : []; /// Assuming APIResponse has a data property
    console.log(userData);
    return userData;
  } catch (error) {
    console.log(error);
  }
}
