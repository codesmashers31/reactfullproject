import axios from "axios";
import { useEffect, useState } from "react";

const Register = () => {
  const [ register, setRegister ] = useState( {
    name: "",
    email: "",
    password: "",
    id: "" // Added for edit functionality
  } );

  const [ getdata, setGetdata ] = useState( [] );
  const [ isEditing, setIsEditing ] = useState( false );

  const handleRegister = ( e ) => {
    const { name, value } = e.target;
    setRegister( { ...register, [ name ]: value } );
  };

  const handlesubmit = async ( e ) => {
    e.preventDefault();
    const { name, email, password } = register;

    if ( !name || !email || !password ) {
      return alert( "Please fill all fields" );
    }

    try {
      if ( isEditing ) {
        // Update existing user
        const res = await axios.put( `http://localhost:5000/api/users/${ register.id }`, register );
        alert( res.data.message );
        setIsEditing( false );
      } else {
        // Create new user
        const res = await axios.post( "http://localhost:5000/api/users/register", register );
        alert( res.data.message );
      }
      // Refresh data

      const updatedData = await axios.get( "http://localhost:5000/api/users/registerdata" );
      setGetdata( updatedData.data );
      // Reset form
      setRegister( { name: "", email: "", password: "", id: "" } );
    } catch ( err ) {
      console.err( err );
      alert( err.response?.data?.message || "Something went wrong" );
    }
  };

  const handleEdit = ( user ) => {
    setRegister( {
      name: user.name,
      email: user.email,
      password: "",
      id: user._id || user.id
    } );
    setIsEditing( true );
  };

  const handleDelete = async ( id ) => {
    if ( window.confirm( "Are you sure you want to delete this user?" ) ) {
      const res = await axios.delete( `http://localhost:5000/api/users/${ id }` );
      alert( res.data.message );

      // Refresh data
      const updatedData = await axios.get( "http://localhost:5000/api/users/registerdata" );
      setGetdata( updatedData.data );
    }
  };

  useEffect( () => {
    const getuserdata = async () => {
      try {
        const res = await axios.get( "http://localhost:5000/api/users/registerdata" );
        setGetdata( res.data );
      } catch ( error ) {
        console.log( error );
      }
    };
    getuserdata();
  }, [] );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Registration Form */ }
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className={ `p-6 text-white ${ isEditing ? 'bg-gradient-to-r from-amber-500 to-orange-600' : 'bg-gradient-to-r from-blue-600 to-indigo-700' }` }>
              <h1 className="text-2xl font-bold">{ isEditing ? 'Edit User' : 'Create an account' }</h1>
              <p className="text-blue-100">{ isEditing ? 'Update user details' : 'Join us today!' }</p>
            </div>

            <form onSubmit={ handlesubmit } className="p-6 space-y-6">
              { [ "name", "email", "password" ].map( ( field ) => (
                <div key={ field } className="space-y-1">
                  <label htmlFor={ field } className="block text-sm font-medium text-gray-700 capitalize">
                    { field }
                  </label>
                  <input
                    id={ field }
                    type={ field === "password" ? "password" : field === "email" ? "email" : "text" }
                    name={ field }
                    placeholder={ `Enter your ${ field }` }
                    value={ register[ field ] }
                    onChange={ handleRegister }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              ) ) }

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className={ `flex-1 ${ isEditing ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700' : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800' } text-white font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-md` }
                >
                  { isEditing ? 'Update User' : 'Register Now' }
                </button>
                { isEditing && (
                  <button
                    type="button"
                    onClick={ () => {
                      setIsEditing( false );
                      setRegister( { name: "", email: "", password: "", id: "" } );
                    } }
                    className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 shadow-md"
                  >
                    Cancel
                  </button>
                ) }
              </div>
            </form>
          </div>
        </div>

        {/* Registered Users Table */ }
        { getdata.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
              <h2 className="text-xl font-bold">Registered Users</h2>
              <p className="text-blue-100">List of all registered users</p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Password
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  { getdata.map( ( user, index ) => (
                    <tr key={ user._id || user.id } className={ index % 2 === 0 ? 'bg-white' : 'bg-gray-50' }>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        { user.name }
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        { user.email }
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        { user.password.replace( /./g, '*' ) }
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={ () => handleEdit( user ) }
                            className="text-indigo-600 hover:text-indigo-900 bg-indigo-100 hover:bg-indigo-200 px-3 py-1 rounded-md text-xs font-medium transition-all duration-200"
                          >
                            Edit
                          </button>
                          <button
                            onClick={ () => handleDelete( user._id || user.id ) }
                            className="text-red-600 hover:text-red-900 bg-red-100 hover:bg-red-200 px-3 py-1 rounded-md text-xs font-medium transition-all duration-200"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ) ) }
                </tbody>
              </table>
            </div>
          </div>
        ) }
      </div>
    </div>
  );
};

export default Register;