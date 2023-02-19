import React from 'react'
import Logo from '../assets/images/loginInWhite-c7672604.png'


const login = () => {
  return (
    
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-cyan-500">
        <div>
        <div class="flex">
             <img src={Logo} class="h-25 mr-3" alt="Flowbite Logo" />
         </div>
        </div>
            <div className="w-full max-w-md p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl ">
                <h1 className="text-3xl font-semibold text-center text-orange-400 uppercase">
                    Welcome Back
                </h1>
                <p className="mt-8 text-base font-light  text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-orange-400 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email / Username
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-orange-400 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-orange-400 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-400 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-orange-600">
                            Sign In
                        </button>
                    </div>
                </form>
                

                
            </div>
        </div>

    // <div class="p-8 flex flex-row bg-cyan-500 " style={{height: '100vh'}} >
    //     <div class="flex">
    //         <img src={Logo} class="h-25 mr-3" alt="Flowbite Logo" />
    //     </div>
    //     {/* style={{paddingLeft: '550px'}} */}
    //     <div class="float-right w-full max-w-md flex justify-end" >
    //         <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{width: '400px'}}>
    //             <div>
    //                 Don't have account?
    //                 <a class="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800" href="#">SIGN UP
    //                 </a> 
    //             </div>
    //             <div class="mb-6">
    //                 <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    //                 <input type="email" id="floating_email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
    //             </div>
    //             <div class="mb-6">
    //                 <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    //                 <input type="password" id="floating_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    //             </div>
    //             <div class="flex items-start mb-6">
    //                 <div class="flex items-center h-5">
    //                 <input id="remember" type="floating_checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
    //                 </div>
    //                 <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    //             </div>
    //             <div class="flex items-center justify-between">
    //                 <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    //                 <a class="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800" href="#">
    //                     Forgot Password?
    //                 </a>
    //             </div>
    //         </form>
    //     </div>
    // </div>
  )
}

export default login