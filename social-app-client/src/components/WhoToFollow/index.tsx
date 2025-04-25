/* eslint-disable @typescript-eslint/no-explicit-any */
import { Skeleton } from "@mantine/core";
import { getUsersNotFollow } from "../../services/usersService";
import UserButton from "../UserButton";
import {useQuery} from "@tanstack/react-query";

const WhoToFollow = () => {
  const userId = localStorage.getItem("userId");
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData", userId], //cùng key thì ko render lại, còn giá trị đăng sau thay đổi thì render lại
    enabled: !!userId, 
    queryFn: () => getUsersNotFollow(userId!),
  });

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg h-fit">
      <h2 className="text-lg font-bold mb-4">Who to follow</h2>
      <ul className="space-y-2">
        {
          isPending ? (
            Array.from({ length: 4 }).map((_, i) => (
              <li key={i}>
                <Skeleton height={60} radius="md" />
              </li>
            ))
          ) : error ? (
            <p className="text-sm text-red-500">Something went wrong...</p>
          ) : (
            data?.data.map((user:any) => (
              <li className="hover:bg-gray-100 cursor-pointer rounded" key={user._id}>
                <UserButton
                  image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                  name={user.fullName}
                  email={user.email}
                  buttonText={"Follow"}
                />
              </li>
            ))
          )
        }
      </ul>
    </div>
  );
};

export default WhoToFollow;
