import UserButton from "../UserButton"

const WhoToFollow = () => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg h-fit">
      <h2 className="text-lg font-bold mb-4">Who to follow</h2>
      <ul className="space-y-2">
        <li className="hover:bg-gray-100 cursor-pointer rounded">
          <UserButton
            image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            name={"Hello how are you"}
            email={"thanh@gmail.com"}
            buttonText={"Follow"}
          />
        </li>
        <li className="hover:bg-gray-100 cursor-pointer rounded">
          <UserButton
            image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            name={"Hello how are you"}
            email={"thanh@gmail.com"}
            buttonText={"Follow"}
          />
        </li>
        <li className="hover:bg-gray-100 cursor-pointer rounded">
          <UserButton
            image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            name={"Hello how are you"}
            email={"thanh@gmail.com"}
            buttonText={"Follow"}
          />
        </li>
        <li className="hover:bg-gray-100 cursor-pointer rounded">
          <UserButton
            image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            name={"Hello how are you"}
            email={"thanh@gmail.com"}
            buttonText={"Follow"}
          />
        </li>
        
      </ul>
    </div>
  )
}

export default WhoToFollow