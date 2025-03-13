export const logout = (navigate) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/auth/login");
};
