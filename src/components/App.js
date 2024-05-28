const App = () => {
    return (
      <div>
        <nav className="flex items-center bg-[#095F59] text-white h-14 relative z-10">
          <h2 className="font-bold text-2xl pl-2">SHEY</h2>
          <div className="mr-1 absolute right-0">
            <a href="#" className="pr-2">Home</a>
            <a href="#" className="pr-2">Services</a>
            <a href="#" className="pr-2">Contact us</a>
          </div>
        </nav>
        <div className="relative h-[888px] overflow-hidden">
          <div className="bg-[#095F59] w-[2500px] h-[780px] absolute bottom-[-250px] rotate-[-8deg] left-[10px]"></div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="absolute bottom-[35%] opacity-80 left-[5%] w-[150px]">
              <div className="bg-[#095F59] rounded-full absolute left-[35%] bottom-[50%] border-[20px] border-[#1e836d] w-[180px] h-[180px]"></div>
            </div>
          </div>
          <div className="absolute bottom-[-410px] right-[150px] w-[180px] h-[180px]">
            <div className="bg-[#24c09e] opacity-70 rounded-full absolute left-[100px] bottom-[350px] w-[250px] h-[250px]"></div>
            <div className="bg-[#095F59] rounded-full absolute left-[125px] bottom-[375px] w-[200px] h-[200px]"></div>
            <div className="bg-[#095F59] rounded-full absolute left-[125px] bottom-[375px] w-[200px] h-[200px]"></div>
          </div>
          <div className="flex justify-center items-center h-full relative z-20">
            <div className="flex flex-col justify-center shadow-2xl w-[550px] p-5 h-[550px] bg-slate-100 bg-opacity-30">
              <div className="flex flex-col">
                <h1 className="text-5xl font-bold text-[#276662]">LOGIN</h1>
                <input className="border border-gray-400 rounded-lg p-2 pl-4 mt-3 shadow-lg" type="text" placeholder="Username"></input>
                <input className="border border-gray-400 rounded-lg p-2 pl-4 mt-3 shadow-lg" type="password" placeholder="Password"></input>
                <button className="bg-[#095F59] border hover:bg-slate-50 hover:text-[#095F59] hover:border-[#095F59] text-white font-medium pl-10 pr-10 p-2 mt-5 rounded-lg">LOGIN</button>
              </div>
              <div className="flex items-center my-6 pt-2">
                <hr className="flex-grow border-gray-800"></hr>
                <span className="mx-4 text-gray-800">OR</span>
                <hr className="flex-grow border-gray-800"></hr>
              </div>
              <footer className="flex justify-center pt-2">
                <a href="#" className="mr-5">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  </svg>
                </a>
                <a href="#" className="ml-5">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="blue" style={{ color: "blue" }} height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                  </svg>
                </a>
              </footer>
              <p className="flex justify-center font-medium text-[#095F59] pt-5">
                Not yet registered, Click here to<a href="#" className="ml-2">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
  