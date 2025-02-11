import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "/assets/logo.png";
import { z } from "zod";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LabelForm from "../common/LabelForm";
import InputCustom from "../common/InputCustom";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const AdminSign = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    const validationResult = schema.safeParse(formData);
    if (!validationResult.success) {
      const newErrors = validationResult.error.flatten().fieldErrors;
      setErrors({
        email: newErrors.email ? newErrors.email[0] : "",
        password: newErrors.password ? newErrors.password[0] : "",
      });
      return;
    }

    try {
      const result = await signIn(formData.email, formData.password);
      setFormData({ email: "", password: "" });

      if (result.user.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/AdminSign", { replace: true });
      }
    } catch (error) {
      setErrors({ form: error.message });
    }
  };

  return (
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-3 px-4">
        <div className="max-w-md w-full">
          <Link to="/">
            <img src={logo} alt="logo" className="logo mb-8 mx-auto block" />
          </Link>

          <div className="p-8 pt-6 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">
              Management Login
            </h2>
            <form className="mt-8 space-y-4" onSubmit={handleSignIn}>
              <div>
                <LabelForm text="Email" />
                <InputCustom
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  icon={MdEmail}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <div className="relative">
                <LabelForm text="Password" />
                <InputCustom
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  icon={FaLock}
                />
                {formData.password && (
                  <div
                    className="absolute right-4 top-1/2 mt-4 transform -translate-y-1/2 cursor-pointer text-gray-300"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    {isPasswordVisible ? (
                      <FaEye className="w-4 h-4" />
                    ) : (
                      <FaEyeSlash className="w-4 h-4" />
                    )}
                  </div>
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}

              {errors.form && (
                <p className="text-red-500 text-sm">{errors.form}</p>
              )}

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg bg-customblue text-white hover:bg-hoverblue focus:outline-none"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSign;
