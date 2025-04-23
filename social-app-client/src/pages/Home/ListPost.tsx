import {Avatar, Text} from "@mantine/core";
import BaseImage from "../../components/BaseImage";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";

const ListPost = () => {
  return (
    <>
      <div className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition rounded-md">
        <Avatar src="avatar.png" alt="it's me" radius="xl" size="md" />

        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-1 text-sm text-gray-800">
            <Text fw={600}>Gavin Hewitson</Text>
            <span className="text-gray-500">·</span>
            <Text className="text-gray-500">Apr 22</Text>
          </div>

          <div className="mt-1 text-sm text-gray-900 leading-relaxed">
            Pay what you want. <br />
            This board has every prompt I use to build Klaviyo flows for
            7-figure brands. <br />
            Just copy + paste into ChatGPT and start scripting. <br />
            Comment “Prompt” below and I’ll send it over.
          </div>

          <div className="mt-2">
            <BaseImage
              src="https://pbs.twimg.com/media/GpIEtAJXkAAapg3?format=jpg&name=small"
              className="!rounded-xl !w-xl !cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between mt-4 ">
            <div className="flex items-start gap-1 hover:text-blue-500 cursor-pointer">
              <FaRegComment />
              <span className="text-sm">22</span>
            </div>
            <div className="flex items-start gap-1 hover:text-red-500 cursor-pointer">
              <FaRegHeart />
              <span className="text-sm">500</span>
            </div>
            <div className="flex items-start gap-1 hover:text-blue-700 cursor-pointer">
              <IoShareOutline className="text-lg"/>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default ListPost;
