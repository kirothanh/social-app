/* eslint-disable @typescript-eslint/no-explicit-any */
import BaseTextInput from "../../components/Input";
import {IoIosSend} from "react-icons/io";
import EmojiPicker from "emoji-picker-react";
import {useRef, useState} from "react";
import {FaRegSmile} from "react-icons/fa";

const InputChat = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEmojiClick = (emojiData: any) => {
    const cursorPos = inputRef.current?.selectionStart || 0;
    const textBefore = message.slice(0, cursorPos);
    const textAfter = message.slice(cursorPos);
    const newText = textBefore + emojiData.emoji + textAfter;
    setMessage(newText);
    setShowEmojiPicker(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative mt-auto">
      <BaseTextInput
        placeholder="Write something here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        ref={inputRef}
      />
      <div className="flex items-center justify-center">
        <IoIosSend className="absolute text-2xl right-[5px] top-[8px] cursor-pointer" />
        <FaRegSmile
          className="absolute right-10 top-[10px] text-xl cursor-pointer text-gray-600"
          onClick={() => setShowEmojiPicker((prev) => !prev)}
        />
      </div>
      {showEmojiPicker && (
        <div className="absolute bottom-12 right-2 z-50">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default InputChat;
