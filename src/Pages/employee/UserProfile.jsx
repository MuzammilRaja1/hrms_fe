import { useState } from "react";
import LabelForm from "../../Components/common/LabelForm";
import InputCustom from "../../Components/common/InputCustom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiUpload } from "react-icons/fi";

const UserProfile = ({ user, onUpdateProfile }) => {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [profileImage, setProfileImage] = useState(user?.profileImage || "");
  const [previewImage, setPreviewImage] = useState(user?.profileImage || "");
  const [isHovered, setIsHovered] = useState(false);

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile({ name, email, profileImage });
  };

  return (
    <div className="flex justify-center items-center  ">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={
                  previewImage ||
                  "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png"
                }
                alt="Profile Preview"
                className={`h-24 w-24 rounded-full object-cover border border-gray-300 transition-opacity duration-300 ${
                  isHovered ? "opacity-50" : "opacity-100"
                }`}
              />
              {/* Upload Icon */}
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <FiUpload className="text-gray-600 text-3xl" />
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Name Input */}
          <div>
            <LabelForm text="Name" />
            <InputCustom
              type="text"
              name="name"
              placeholder="Enter Name"
              icon={FaUser}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div>
            <LabelForm text="Email" />
            <InputCustom
              type="text"
              name="email"
              placeholder="Enter Email"
              icon={MdEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Save Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-medium rounded-lg bg-customblue text-white hover:bg-hoverblue transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
