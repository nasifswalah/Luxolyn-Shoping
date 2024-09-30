import React from "react";
import { motion } from "framer-motion";
import { FolderPlus, LibraryBig, User } from "lucide-react";
import Button from "../components/Button";
import { trash } from "../assets";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = { role: "seller" };
  return (
    <div className="relative xl:h-[97vh] h-screen xl:w-[95vw] w-screen xl:border border-[rgba(255,255,255,0.2)] xl:rounded-lg bg-[#141414] backdrop-blur-md flex flex-col justify-center">
      <div className="absolute top-100 w-full h-screen leading-[60.75px] bg-[radial-gradient(ellipse_at_bottom,rgba(121,12,105,0.129)_0%,rgba(13,5,28,0)_85%)]" />
      <motion.div
        className="sm:w-96 w-[90vw] mx-auto p-5 bg-[#292929] text-[#EDEDED] rounded-lg flex flex-col gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <User className="w-20 h-20 mx-auto mb-1" />
        <h1>User Name</h1>
        <p>Email</p>
        <p>Role</p>
        <span>Items in Cart</span>
        <span>Puchase </span>
        {user.role === "seller" && (
          <div className="flex justify-evenly gap-3">
            <Link to="/listing">
              <LibraryBig  />
            </Link>
            <Link to="/create">
              <FolderPlus />
            </Link>
          </div>
        )}
        <Button name="Delete account" icon={trash} />
      </motion.div>
    </div>
  );
};

export default Profile;
