export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("user");
};

export const loginUser = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
  window.dispatchEvent(new Event("authUpdated"));
};

export const logoutUser = () => {
  localStorage.removeItem("user");
  window.dispatchEvent(new Event("authUpdated"));
};