export async function getToken(userType) {
  if (userType === "admin") return localStorage.getItem("adminAuthToken");
  else return localStorage.getItem("authToken");
}
export async function setToken(token, userType) {
  if (userType === "admin") localStorage.setItem("adminAuthToken", token);
  else localStorage.setItem("authToken", token);
}
