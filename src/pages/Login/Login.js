import { useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import Helmet from "react-helmet";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import { useTokens } from "../../hooks/useTokens";
export const Login = () => {
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  let signInError;
  const navigateToSignUp = () => {
    navigate("/signup");
  };
  const [token] = useTokens(user || googleUser);
  const handleLogin = () => {
    signInWithGoogle();
  };
  if (googleError || error || updateError) {
    signInError = <p className="text-red-600">{error?.message || googleError?.message || updateError?.message}</p>;
  }
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
      Swal.fire("Success!", "Login Successfull!", "success");
    }
  }, [token, navigate, from]);
  // useEffect(() => {
  //   if (user) {
      
  //     navigate(from, { replace: true });
  //   }
  // }, [user, navigate, from]);
  if (googleLoading || loading || updating) {
    return <Loading />;
  }
  return (
    <div>
      <Helmet>
        <title>Login | Estro Gadget</title>
      </Helmet>

      <div className="bg-base-100 mt-16">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3 bg-login">
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-6xl font-bold text-white" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                  Estro Gadget
                </h2>

                <p className="max-w-xl mt-3 text-white text-2xl" data-aos="fade-right" data-aos-delay="400" data-aos-duration="900">
                  Drone is a self-service Continuous Integration platform for busy development teams.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center">Login</h2>

                <p className="mt-3">Sign in to access your account</p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm ">
                      Email Address
                    </label>
                    <input
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                        pattern: {
                          value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                          message: "Please enter valid email",
                        },
                      })}
                      type="email"
                      placeholder="Enter your email"
                      className="input input-bordered w-full max-w-md"
                    />
                    <label className="label">
                      {errors.email?.type === "required" && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                      {errors.email?.type === "pattern" && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                    </label>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label htmlFor="password" className="text-sm ">
                        Password
                      </label>
                      <NavLink to="#" className="text-sm text-primary focus:text-blue-500 hover:text-blue-500 hover:underline">
                        Forgot password?
                      </NavLink>
                    </div>

                    <input
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                        minLength: {
                          value: 6,
                          message: "Password must be minimum 6 characters",
                        },
                      })}
                      type="password"
                      placeholder="Enter your password"
                      className="input input-bordered w-full max-w-md"
                    />
                    <label className="label">
                      {errors.password?.type === "required" && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                      {errors.password?.type === "minLength" && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                    </label>
                  </div>
                  {signInError}
                  <input className="btn btn-primary text-dark w-full max-w-sm mt-3" type="submit" value="Login" />
                </form>

                <div className="mt-6 text-sm text-center ">
                  Don&#x27;t have an account yet?
                  <button onClick={navigateToSignUp} to="#" className="text-primary focus:outline-none focus:underline hover:underline">
                    Sign up
                  </button>
                  <div className="divider">OR</div>
                  <button onClick={handleLogin} className="flex items-center justify-center mt-4 transition-colors duration-200 transform  rounded-lghover:bg-gray-600 dark:hover:bg-gray-600 mx-auto">
                    <div className="px-4 py-2  flex justify-center items-center border border-neutral">
                      <svg className="w-6 h-6 " viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                      </svg>
                      <span className="px-4 py-3 font-bold text-center">Sign in with Google</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
