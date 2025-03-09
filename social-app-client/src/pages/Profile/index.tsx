import BaseButton from "../../components/Button";
import BaseAvatar from "../../components/Avatar";
import BaseImage from "../../components/BaseImage";
import { Tabs } from "@mantine/core";

const Profile = () => {
  return (
    <>
      <div>
        <BaseImage
          radius="md"
          h={200}
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
        />
      </div>

      <div className="relative p-4 flex items-center justify-between">
        <BaseAvatar
          src="https://picsum.photos/200/300"
          radius="full"
          size={120}
          className="absolute -top-20 !rounded-full border-3 border-white shadow-md"
        />

        <BaseButton variant="filled" color="rgba(0, 0, 0, 1)">
          Edit profile
        </BaseButton>
      </div>

      <div className="p-4 -mt-16 space-y-2">
        <h2 className="text-2xl font-semibold capitalize">John Doe</h2>
        <p className="text-gray-500">Description in here</p>
        <div className="flex items-center mt-3 space-x-4">
          <p className="text-gray-500">
            <span className="font-semibold text-black">89</span> Following
          </p>
          <p className="text-gray-500">
            <span className="font-semibold text-black">2</span> Followers
          </p>
        </div>
      </div>

      <div className="mt-4">
        <Tabs defaultValue="posts">
          <Tabs.List grow>
            <Tabs.Tab value="posts">Posts</Tabs.Tab>
            <Tabs.Tab value="likes">Likes</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="posts">Gallery tab content</Tabs.Panel>

          <Tabs.Panel value="likes">Messages tab content</Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
};

export default Profile;
