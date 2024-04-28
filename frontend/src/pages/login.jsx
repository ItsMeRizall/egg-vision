export default function Login() {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div className="w-[560px] flex flex-col text-white items-center bg-[#3E0000] rounded-3xl p-24">
            <h1 className="text-6xl font-bold">EGG VISION</h1>
            <form className="container" action="">
              <div className="flex flex-col mt-14 ">
                <input className="bg-transparent border border-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type="text" placeholder="Username" />
              </div>
              <div className="flex flex-col mt-9">
                <input className="bg-transparent border border-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type="password" placeholder="Password" />
              </div>
              <div className="container flex  justify-center mt-9">
                <a href="/Home" className="py-2 px-16 bg-[#B20000] rounded-3xl font-medium hover:bg-[#b20000d0]">Sign In</a>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  