import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto ">
        <div className="border-2 m-10 p-10 w-3/6 mx-auto bg-gray-200 py-32">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Register
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Signup Useing Google
            </button>
            <p className="px-8 mt-3">
              Already have a account ? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
