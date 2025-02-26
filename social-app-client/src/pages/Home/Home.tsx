import Sidebar from "../../layouts/Sidebar";
import Main from "../../layouts/Main";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="md:w-1/5 bg-white border-r border-gray-200">
        <Sidebar />
      </div>
      <Main />

      {/* <div className="md:w-3/5 px-4">
        <Feed />
      </div>
      <div className="hidden md:block md:w-1/5 bg-white border-l border-gray-200">
        <Trends />
      </div> */}
    </div>
  )
}
