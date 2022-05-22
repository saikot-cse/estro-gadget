import Helmet from "react-helmet";
import { NavLink, useNavigate } from "react-router-dom";
export const SignUp = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <Helmet>
        <title>Sign Up | Estro Gadget</title>
      </Helmet>

      <div class="bg-base-100 mt-16">
        <div class="flex justify-center h-screen">
          <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div class="flex-1">
              <div class="text-center">
                <h2 class="text-4xl font-bold text-center">Sign Up</h2>

                <p class="mt-3">Sign Up to create your account</p>
              </div>

              <div class="mt-8">
                <form>
                  <div className="mb-5">
                    <label for="name" class="block mb-2 text-sm ">
                      Name
                    </label>
                    <input type="text" name="name" id="name" placeholder="Your Name" class="block w-full px-4 py-2 mt-2  placeholder-gray-400 border border-gray-200 rounded-md dark:placeholder-gray-600  focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label for="email" class="block mb-2 text-sm ">
                      Email Address
                    </label>
                    <input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2  placeholder-gray-400 border border-gray-200 rounded-md dark:placeholder-gray-600  focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div class="mt-6">
                    <div class="flex justify-between mb-2">
                      <label for="password" class="text-sm ">
                        Password
                      </label>
                      <NavLink to="#" class="text-sm text-primary focus:text-info hover:text-info hover:underline">
                        Forgot password?
                      </NavLink>
                    </div>

                    <input type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 placeholder-gray-400 border border-gray-200 rounded-md dark:placeholder-gray-600  focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div class="mt-6">
                    <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-info focus:outline-none  focus:ring focus:ring-primary focus:ring-opacity-50">Sign Up</button>
                  </div>
                </form>

                <p class="mt-6 text-sm text-center ">
                  Already have an account?
                  <button onClick={navigateToLogin} to="#" class="text-primary focus:outline-none focus:underline hover:underline focus:text-info">
                    Login
                  </button>
                  <div class="divider">OR</div>
                  <NavLink to="#" class="flex items-center justify-center mt-4 transition-colors duration-200 transform  rounded-lghover:bg-gray-600 dark:hover:bg-gray-600">
                    <div class="px-4 py-2  flex justify-center items-center border border-neutral">
                      <svg class="w-6 h-6 " viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                      </svg>
                      <span class="px-4 py-3 font-bold text-center">Continue with Google</span>
                    </div>
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
          <div class="hidden bg-cover lg:block lg:w-2/3 bg-signup">
            <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 class="text-6xl font-bold text-white" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">Estro Gadget</h2>

                <p class="max-w-xl mt-3 text-white text-2xl" data-aos="fade-right" data-aos-delay="400" data-aos-duration="900">Drone is a self-service Continuous Integration platform for busy development teams.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
