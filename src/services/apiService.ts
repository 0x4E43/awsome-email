
type APIResponse = {
  message: string;
  status: number;
  data?: never[];
};
type User = {
  id: number;
  emailId?: string;
  password?: string;
  created_at?: Date;
};

const ROOT_URL = "http://localhost:1323";

export async function LoginUser(email: string, pass: string): Promise<boolean> {
  try {
    const user: User = {
      id: 0,
      emailId: email,
      password: pass,
    };
    const res = await fetch(ROOT_URL + "/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify(user),
    });
    console.log(JSON.stringify(user));
    const apiResponse: APIResponse = await res.json();
    if (apiResponse.status !== 200) {
      console.log("res: ", apiResponse);
      return false;
    }
    console.log("API Res", apiResponse);
    if (apiResponse.data != undefined) {
      console.log("token", apiResponse.data);
    }
    return true;
  } catch (error) {
    console.log("Error: ", error);
    return false;
  }
}
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
    const userData: User[] = Array.isArray(apiResponse.data)
      ? apiResponse.data
      : []; /// Assuming APIResponse has a data property
    console.log(userData);
    return userData;
  } catch (error) {
    console.log(error);
  }
}
