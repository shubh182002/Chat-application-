import React from 'react'
import { Link } from "react-router-dom";
import GenderCheckBox from '../components/GenderCheckBox';

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6  rounded-lg shadow-md bg-gray-700 ">
        <h1 className="  text-3xl font-semibold text-center text-black-700">
          SingUp 
          <span className=" p-2 text-2xl font-semibold text-blue-500">Chat Application</span>
        </h1>
        <form action="" >
        <div>
                <label className="floating-label mt-5">
                   <span>Name</span>
                   <input type="text"
                    placeholder="name"
                    className="input input-md"
                  />
                </label>
            </div>

            <div>
                <label className="floating-label mt-5">
                   <span>Your Email</span>
                   <input type="text"
                    placeholder="mail@site.com"
                    className="input input-md"
                  />
                </label>
            </div>
            <div>
                <label className="floating-label mt-5">
                   <span>Password</span>
                   <input type="password"
                    placeholder="password"
                    className="input input-md"
                  />
                </label>
            </div>

            <GenderCheckBox />

            <div>
              <button className=" mt-5 btn btn-outline btn-success">Signup</button>
            </div>
            
            <Link className="block mt-2 hover:underline hover:text-blue-500 " >{"already"} have an account </Link>
        </form>
      </div>
    </div>
  )
}

export default Signup
