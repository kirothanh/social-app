const Sidebar = () => {
  return (
    <div className="p-4 max-w-[275px]">
      <h1 className="text-xl font-bold mb-6">X Clone</h1>
      <ul className="space-y-4 ">
        <li className="text-lg hover:bg-gray-100 p-2 rounded-full cursor-pointer">Home</li>
        <li className="text-lg hover:bg-gray-100 p-2 rounded-full cursor-pointer">Profile</li>
        <li className="text-lg hover:bg-gray-100 p-2 rounded-full cursor-pointer">Messages</li>
        <li className="text-lg hover:bg-gray-100 p-2 rounded-full cursor-pointer">Settings</li>
      </ul>
      <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600">
        Post
      </button>
    </div>
  );
}

export default Sidebar;