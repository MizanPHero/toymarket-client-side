import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const [error, setError] = useState('');
  const {createUser} = useContext(AuthContext)

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photourl.value;

    setError('');
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError(
        "Your password must be at least 6 characters long and contain both letters and numbers."
      );
      return;
    }
    
    createUser(email,password)
    .then(result =>{
      const loggedUser = result.user;
      updateUserData(result.user, name, photoUrl);
      console.log(loggedUser);
      form.reset();
    })
    .catch(error => {
      console.log(error);
      setError(error.message)
    })
  };

  const updateUserData = (user,name,photoUrl)=>{
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl
    })
    .then(()=>{
      console.log("Name and Photo url updated");
    })
    .catch(error => {
      console.log(error.message);
    })
  }
 

  return (
    <div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <form
            onSubmit={handleSignUp}
            action=""
            className="p-4 mt-6 mb-0 space-y-8 rounded-lg shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-lg font-medium text-center text-red-600">
              Create your account
            </p>

            <div>
              <input
                name="name"
                type="text"
                className="w-full p-3 text-sm border-b-2 rounded shadow-md focus-visible:outline-none focus:border-red-500 pe-12 border-gray-50"
                placeholder="Enter name"
              />
            </div>

            <div>
              <input
                name="email"
                type="email"
                className="w-full p-3 text-sm border-b-2 rounded shadow-md focus-visible:outline-none focus:border-red-500 pe-12 border-gray-50"
                placeholder="Enter email"
                required
              />
            </div>

            <div>
              <input
                name="password"
                type="password"
                className="w-full p-3 text-sm border-b-2 rounded shadow-md focus-visible:outline-none focus:border-red-500 pe-12 border-gray-50"
                placeholder="Enter password"
                required
              />
            </div>

            <div>
              <input
                name="photourl"
                type="text"
                className="w-full p-3 text-sm border-b-2 rounded shadow-md focus-visible:outline-none focus:border-red-500 pe-12 border-gray-50"
                placeholder="Enter Photo Url"
              />
            </div>

            <button
              type="submit"
              className="block w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-center text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Sign Up
            </button>

            <p className="text-sm text-center text-gray-500">
              Have an account?
              <Link className="underline" to={"/login"}>
                Sign in
              </Link>
            </p>
            <p className="text-sm text-center text-red-600">
              {error}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
