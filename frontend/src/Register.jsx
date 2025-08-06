import axios from "axios";
import { useEffect, useState } from "react";

const Register = () => {
  const [ register, setRegister ] = useState( {
    name: "",
    email: "",
    password: ""
  } );

  const [ getdata, setGetdata ] = useState( [] );

  const handleRegister = ( e ) => {
    const { name, value } = e.target;
    setRegister( { ...register, [ name ]: value } );
  };

  const handlesubmit = async ( e ) => {
    e.preventDefault();
    const { name, email, password } = register;

    if ( name && email && password !== "" ) {
      const res = await axios.post( "http://localhost:5000/api/users/register", register );
      alert( res.data.message );
    } else {
      alert( "fill all details" );
    }
  };

  useEffect( () => {
    const getuserdata = async () => {
      try {
        const res = await axios.get( "http://localhost:5000/api/users/registerdata" );
        console.log( 'New', res );
        setGetdata( res.data );
      } catch ( error ) {
        console.log( error );
      }
    };
    getuserdata();
  }, [] );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-blue-100">Join us today!</p>
          </div>

          <form onSubmit={ handlesubmit } className="p-6 space-y-6">
            { [ "name", "email", "password" ].map( ( field ) => (
              <div key={ field } className="space-y-1">
                <label htmlFor={ field } className="block text-sm font-medium text-gray-700 capitalize">
                  { field }
                </label>
                <input
                  id={ field }
                  type={ field === "password" ? "password" : "text" }
                  name={ field }
                  placeholder={ `Enter your ${ field }` }
                  value={ register[ field ] }
                  onChange={ handleRegister }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            ) ) }

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-md"
            >
              Register Now
            </button>
          </form>

          <div className="px-6 pb-6">
            <p className="text-center text-sm text-gray-500">
              Already have an account?{ " " }
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;