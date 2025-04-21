const ShowMessages = () => {
  return (
    <>
      {/* Header */}
      <div className="px-4 py-3 border-b bg-white font-semibold text-lg">
        Chat with Bot
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 flex flex-col justify-end">
        <div className="self-start bg-gray-200 rounded-xl px-4 py-2 max-w-xs">
          Hello! 👋
        </div>
        <div className="self-start bg-gray-200 rounded-xl px-4 py-2 max-w-xs break-all">
          Hello!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          Hello!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaHello!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaHello!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        <div className="self-start bg-gray-200 rounded-xl px-4 py-2 max-w-xs break-all">
          Hello!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          Hello!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaHello!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaHello!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        <div className="self-start bg-gray-200 rounded-xl px-4 py-2 max-w-xs break-all">
          Hello!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          Hello!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaHello!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaHello!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>

        <div className="self-end bg-blue-500 text-white rounded-xl px-4 py-2 max-w-xs break-all">
          Hi, how are you?
        </div>
        <div className="self-end bg-blue-500 text-white rounded-xl px-4 py-2 max-w-xs">
          My name is Codelearn
        </div>
      </div>
    </>
  );
};

export default ShowMessages;
