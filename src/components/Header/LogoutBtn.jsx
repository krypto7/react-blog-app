import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth/auth";
import { logout } from "../../reducers/AuthSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    authService.logOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 text-white duration-200 hover:bg-red-500 rounded-full"
      onClick={handleLogOut}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
