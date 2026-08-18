import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AuthContext } from "../AuthProvider";


const Register = () => {
  const { createUser, googleSignIn, githubSignIn } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const navigate = useNavigate();

  // EMAIL/PASS REGISTER

  const handleRegister = async (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const photoURL = form.photoURL.value.trim();
    const email = form.email.value;
    const password = form.password.value;

    setRegisterError("");

    // Password Validation
    if (password.length < 6) {
      setRegisterError(
        "Password must be at least 6 characters long."
      );
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Password must contain at least one uppercase letter."
      );
      return;
    }

    if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Password must contain at least one lowercase letter."
      );
      return;
    }

    try {
      // Create Firebase user
      const result = await createUser(email, password);

      // Update name and photo
     await updateProfile(result.user, {
        displayName: name,
        photoURL: photoURL || null,
});

      // Optional user data for MongoDB
      const userInfo = {
        name,
        email,
        photoURL,
        createdAt: new Date().toISOString(),
      };

      try {
        await fetch("https://jute-wooden-craft-server-rw94.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
      } catch (error) {
        console.log("Database user save error:", error);
      }

      await Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "Welcome to Woodsy Wonders.",
        confirmButtonColor: "#d97706",
      });

      form.reset();

      navigate("/");
    } catch (error) {
      console.error(error);

      if (error.code === "auth/email-already-in-use") {
        setRegisterError(
          "This email is already registered."
        );
      } else if (error.code === "auth/invalid-email") {
        setRegisterError(
          "Please enter a valid email address."
        );
      } else if (error.code === "auth/weak-password") {
        setRegisterError(
          "The password is too weak."
        );
      } else {
        setRegisterError(
          "Registration failed. Please try again."
        );
      }
    }
  };


  // GOOGLE Reg

  const handleGoogleRegister = async () => {
    try {
      const result = await googleSignIn();

      const user = result.user;

      const userInfo = {
        name: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        createdAt: new Date().toISOString(),
      };

      try {
        await fetch("https://jute-wooden-craft-server-rw94.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
      } catch (error) {
        console.log("Database user save error:", error);
      }

      await Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: "Google registration successful.",
        confirmButtonColor: "#d97706",
      });

      navigate("/");
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Google Sign-In Failed",
        text: "Please try again.",
        confirmButtonColor: "#d97706",
      });
    }
  };
  // GITHUB Reg

const handleGithubRegister = async () => {
  try {
    const result = await githubSignIn();
    const user = result.user;

    const userInfo = {
      name: user?.displayName || "GitHub User",
      email: user?.email,
      photoURL: user?.photoURL,
      createdAt: new Date().toISOString(),
    };

    try {
      await fetch("https://jute-wooden-craft-server-rw94.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
    } catch (error) {
      console.log("Database user save error:", error);
    }

    await Swal.fire({
      icon: "success",
      title: "Welcome!",
      text: "GitHub registration successful.",
      confirmButtonColor: "#d97706",
    });

    navigate("/");
  } catch (error) {
    console.error("GitHub Register Error:", error);

    if (
      error.code ===
      "auth/account-exists-with-different-credential"
    ) {
      Swal.fire({
        icon: "warning",
        title: "Account Already Exists",
        text: "This email is already registered using another login method.",
        confirmButtonColor: "#d97706",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "GitHub Sign-In Failed",
        text: "Please try again.",
        confirmButtonColor: "#d97706",
      });
    }
  }
};

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20">
        <div
          className="
            max-w-5xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            overflow-hidden
            rounded-3xl
            bg-base-100
            border
            border-base-content/10
            shadow-2xl
          "
        >
          {/* LEFT SIDE  */}

          <div
            className="
              hidden
              lg:flex
              flex-col
              justify-between
              p-12
              text-white
              bg-gradient-to-br
              from-amber-600
              via-orange-600
              to-amber-800
            "
          >
            <div>
              <p className="uppercase tracking-[0.2em] text-sm text-amber-100">
                Join Woodsy Wonders
              </p>

              <h1 className="text-4xl font-bold leading-tight mt-5">
                Discover the Beauty of Handmade Craft
              </h1>

              <p className="mt-5 text-amber-50/90 leading-relaxed">
                Create your account to add, explore, and manage
                beautiful jute and wooden craft items.
              </p>
            </div>

            <div className="space-y-4 mt-10">
              <p>🌿 Natural & sustainable crafts</p>
              <p>🪵 Handmade wooden creations</p>
              <p>🧺 Authentic jute craftsmanship</p>
            </div>
          </div>

          {/*  REGISTER FORM  */}

          <div className="p-6 sm:p-10 md:p-12">
            <div className="mb-8">
              <p
                className="
                  text-amber-600
                  uppercase
                  tracking-[0.18em]
                  text-xs
                  font-semibold
                "
              >
                Create Account
              </p>

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-base-content
                  mt-2
                "
              >
                Register
              </h2>

              <p className="text-base-content/60 mt-2">
                Create your Woodsy Wonders account.
              </p>
            </div>

            <form
              onSubmit={handleRegister}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="
                    input
                    input-bordered
                    w-full
                    bg-base-100
                  "
                  required
                />
              </div>

              {/* Photo */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Photo URL
                </label>

                <input
                  type="url"
                  name="photoURL"
                  placeholder="Optional photo URL"
                  className="
                    input
                    input-bordered
                    w-full
                    bg-base-100
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="
                    input
                    input-bordered
                    w-full
                    bg-base-100
                  "
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    placeholder="Create a password"
                    className="
                      input
                      input-bordered
                      w-full
                      bg-base-100
                      pr-12
                    "
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-xl
                      text-base-content/60
                      hover:text-amber-600
                    "
                  >
                    {showPassword ? (
                      <IoMdEye />
                    ) : (
                      <FaEyeSlash />
                    )}
                  </button>
                </div>

                <p className="text-xs text-base-content/50 mt-2">
                  Minimum 6 characters with uppercase and lowercase
                  letters.
                </p>
              </div>

              {/* Error */}
              {registerError && (
                <div
                  className="
                    rounded-xl
                    bg-red-500/10
                    border
                    border-red-500/20
                    px-4
                    py-3
                    text-sm
                    text-red-500
                  "
                >
                  {registerError}
                </div>
              )}

              {/* Register */}
              <button
                type="submit"
                className="
                  btn
                  w-full
                  border-none
                  bg-amber-600
                  hover:bg-amber-700
                  text-white
                "
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-7">
              <div className="h-px flex-1 bg-base-content/10" />

              <span className="text-sm text-base-content/40">
                OR
              </span>

              <div className="h-px flex-1 bg-base-content/10" />
            </div>

            {/* Google */}
            <button
              onClick={handleGoogleRegister}
              className="
                btn
                w-full
                bg-base-100
                border
                border-base-content/15
                hover:border-amber-500
              "
            >
              <FcGoogle className="text-2xl" />

              Continue with Google
            </button>
            {/* GitHub */}
            <button
              onClick={handleGithubRegister}
              className="
                btn
                w-full
                mt-3
                bg-base-100
                border
                border-base-content/15
                hover:border-amber-500
              "
            >
              <FaGithub className="text-2xl" />
             Continue with GitHub
            </button>

            {/* Login */}
            <p className="text-center text-sm text-base-content/60 mt-7">
              Already have an account?{" "}
              <Link
                to="/login"
                className="
                  text-amber-600
                  font-semibold
                  hover:underline
                "
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;