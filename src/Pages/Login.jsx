import { useContext, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn, } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // If user came from a private route,
  // send them back there after login
  const from = location.state?.from?.pathname || "/";

  // ==============================
  // EMAIL + PASSWORD LOGIN
  // ==============================

  const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    setLoginError("");

    try {
      await signIn(email, password);

      await Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome back to Woodsy Wonders.",
        confirmButtonColor: "#d97706",
      });

      form.reset();

      navigate(from, {
        replace: true,
      });
    } catch (error) {
      console.error(error);

      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password"
      ) {
        setLoginError(
          "Email or password is incorrect. Please try again."
        );
      } else if (error.code === "auth/user-not-found") {
        setLoginError(
          "No account was found with this email."
        );
      } else if (error.code === "auth/invalid-email") {
        setLoginError(
          "Please enter a valid email address."
        );
      } else if (error.code === "auth/too-many-requests") {
        setLoginError(
          "Too many login attempts. Please try again later."
        );
      } else {
        setLoginError(
          "Login failed. Please check your information and try again."
        );
      }
    }
  };

  // ==============================
  // GOOGLE LOGIN
  // ==============================

  const handleGoogleLogin = async () => {
    setLoginError("");

    try {
      const result = await googleSignIn();

      const user = result.user;

      // Save/update user in MongoDB
      const userInfo = {
        name: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        lastSignInTime:
          user?.metadata?.lastSignInTime,
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
        console.log(
          "Could not save Google user to database:",
          error
        );
      }

      await Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome back to Woodsy Wonders.",
        confirmButtonColor: "#d97706",
      });

      navigate(from, {
        replace: true,
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: "Please try again.",
        confirmButtonColor: "#d97706",
      });
    }
  };

  const handleGithubLogin = async () => {
  setLoginError("");

  try {
    const result = await githubSignIn();
    const user = result.user;

    // Save GitHub user to MongoDB
    const userInfo = {
      name: user?.displayName || "GitHub User",
      email: user?.email,
      photoURL: user?.photoURL,
      lastSignInTime: user?.metadata?.lastSignInTime,
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
      console.log(
        "Could not save GitHub user to database:",
        error
      );
    }

    await Swal.fire({
      icon: "success",
      title: "Login Successful!",
      text: "Welcome back to Woodsy Wonders.",
      confirmButtonColor: "#d97706",
    });

    navigate(from, {
      replace: true,
    });

  } catch (error) {
    console.error("GitHub Login Error:", error);

    Swal.fire({
      icon: "error",
      title: "GitHub Login Failed",
      text: "Please try again.",
      confirmButtonColor: "#d97706",
    });
  }
};

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          md:px-6
          py-14
          md:py-20
        "
      >
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
          {/* =========================
              LEFT SIDE
          ========================== */}

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
              <p
                className="
                  uppercase
                  tracking-[0.2em]
                  text-sm
                  text-amber-100
                "
              >
                Welcome Back
              </p>

              <h1
                className="
                  text-4xl
                  font-bold
                  leading-tight
                  mt-5
                "
              >
                Continue Your Journey Through Handmade Craft
              </h1>

              <p
                className="
                  mt-5
                  text-amber-50/90
                  leading-relaxed
                "
              >
                Sign in to explore beautiful jute and
                wooden creations, manage your own craft
                collection, and discover the stories
                behind handmade artistry.
              </p>
            </div>

            <div className="space-y-4 mt-10">
              <p>
                🌿 Discover sustainable creations
              </p>

              <p>
                🪵 Explore authentic wooden crafts
              </p>

              <p>
                🧺 Manage your personal craft collection
              </p>
            </div>
          </div>

          {/* =========================
              LOGIN FORM
          ========================== */}

          <div
            className="
              p-6
              sm:p-10
              md:p-12
            "
          >
            {/* Heading */}

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
                Welcome Back
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
                Login
              </h2>

              <p
                className="
                  text-base-content/60
                  mt-2
                "
              >
                Sign in to your Woodsy Wonders account.
              </p>
            </div>

            {/* =========================
                FORM
            ========================== */}

            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >
              {/* Email */}

              <div>
                <label
                  className="
                    block
                    text-sm
                    font-medium
                    mb-2
                  "
                >
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
                <label
                  className="
                    block
                    text-sm
                    font-medium
                    mb-2
                  "
                >
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
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="
                      input
                      input-bordered
                      w-full
                      bg-base-100
                      pr-12
                    "
                    required
                  />

                  {/* Show / Hide password */}

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2

                      text-xl

                      text-base-content/60

                      hover:text-amber-600

                      transition
                    "
                    aria-label="Show or hide password"
                  >
                    {showPassword ? (
                      <IoMdEye />
                    ) : (
                      <FaEyeSlash />
                    )}
                  </button>
                </div>
              </div>

              {/* Error */}

              {loginError && (
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
                  {loginError}
                </div>
              )}

              {/* Login button */}

              <button
                type="submit"
                className="
                  btn
                  w-full

                  border-none

                  bg-amber-600
                  hover:bg-amber-700

                  text-white

                  transition
                "
              >
                Login
              </button>
            </form>

            {/* =========================
                DIVIDER
            ========================== */}

            <div
              className="
                flex
                items-center
                gap-4
                my-7
              "
            >
              <div
                className="
                  h-px
                  flex-1
                  bg-base-content/10
                "
              />

              <span
                className="
                  text-sm
                  text-base-content/40
                "
              >
                OR
              </span>

              <div
                className="
                  h-px
                  flex-1
                  bg-base-content/10
                "
              />
            </div>

            {/* =========================
                GOOGLE
            ========================== */}

            <button
              onClick={handleGoogleLogin}
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
            {/* GITHUB */}

            <button
  onClick={handleGithubLogin}
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
            {/* =========================
                REGISTER LINK
            ========================== */}

            <p
              className="
                text-center
                text-sm
                text-base-content/60
                mt-7
              "
            >
              Dont have an account?{" "}

              <Link
                to="/register"
                className="
                  text-amber-600
                  font-semibold
                  hover:underline
                "
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;