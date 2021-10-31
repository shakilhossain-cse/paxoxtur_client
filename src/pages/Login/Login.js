import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const { loginWithGoogle, setUser,setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();

  
  const url = location.state?.from || '/home';
  console.log(url);
  const loginHandeler = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.push(url);
      })
      .catch(() => {
        
      })
      .finally(() => {
        setIsLoading(false)
        
      });
  };
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto ">
        <div className="border-2 m-10 p-10 w-3/6 mx-auto bg-gray-200 py-32">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Login
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <button
              className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={loginHandeler}
            >
              Countine Useing Google
            </button>
            <p className="px-8 mt-3">
              Dont have a account? <Link to="/register">Create New</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
