export function saveUserSession(user) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }
  
  export function getUserSession() {
    const user = sessionStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  
  export function clearUserSession() {
    sessionStorage.removeItem("user");
  }
  