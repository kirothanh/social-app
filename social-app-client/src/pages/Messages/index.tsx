/* eslint-disable @typescript-eslint/no-explicit-any */
import InputChat from "./InputChat";
import ShowMessages from "./ShowMessages";

const Messages = () => {
  return (
    <div className="flex flex-col h-full max-h-full">
      <ShowMessages />
      <InputChat />
    </div>
  );
};

export default Messages;
