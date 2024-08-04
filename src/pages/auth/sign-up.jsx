import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { registerUser } from "@/redux/actions/authAction"
import toast, { Toaster } from "react-hot-toast";

export function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(document.getElementById("form"));
    const userData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password2: data.get("confirm-password"),
      isGmail: 0
    };
    dispatch(registerUser(userData))
      .then(res => {
        if (res.status === 200) {
          navigate("/signIn");
        }
      })
      .catch(err => toast.error(err.response.data.message));
  };

  const responseGoogle = (response) => {
    const userData = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      isGmail: 1
    };
    dispatch(registerUser(userData))
      .then(res => {
        if (res.status === 200) {
          navigate("/signIn");
        }
      })
      .catch(err => { toast.error(err.response.data.message) });
  }

  const onFailure = (error) => {
    console.log(error);
  };

  const start = () => {
    gapi.client.init({
    clientId: "1068723571468-0vg7attbk8ra637t52ic5qr9lrem3nle.apps.googleusercontent.com",
    scope: 'email',
    });
  }

  useEffect(() => {
    // gapi.load('client:auth2', start);
  }, []);

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[calc(100vh-68px)] lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <GoogleLogin
                className="w-full"
                clientId="1068723571468-0vg7attbk8ra637t52ic5qr9lrem3nle.apps.googleusercontent.com"
                buttonText="Sign up with Google"
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                onSuccess={responseGoogle}
                // isSignedIn={true}
              />
              <div
                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">Or</p>
              </div>
              <form className="space-y-4 md:space-y-6" id="form">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required />
                  {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
              </form>
              <button onClick={handleSubmit} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="/signIn" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
              </p>
            </div>
          </div>
        </div>
        <Toaster />
      </section>
    </>
  );
}

export default SignUp;
