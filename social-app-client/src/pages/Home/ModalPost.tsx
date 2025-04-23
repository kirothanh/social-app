import {Input} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import BaseModal from "../../components/Modal";
import BaseTextArea from "../../components/Textarea";
import BaseButton from "../../components/Button";
import BaseTitle from "../../components/Title";

const ModalPost = () => {
  const [opened, {open, close}] = useDisclosure(false);

  return (
    <div>
      <BaseModal
        opened={opened}
        onClose={close}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form action="">
          <BaseTitle order={3} className="!mb-2">What do you think?</BaseTitle>
          <BaseTextArea
            placeholder="Post something here..."
            autosize
            minRows={6}
            maxRows={18}
          />
          <div className="flex flex-end">
            <BaseButton className="ml-auto mt-2 !bg-black !text-white">
              Post
            </BaseButton>
          </div>
        </form>
      </BaseModal>

      <form className="flex items-center gap-1 pb-3 border-b border-b-gray-400">
        <Input
          variant="unstyled"
          placeholder="Post something here..."
          className=" w-full"
          onClick={open}
        />
        <BaseButton className="ml-auto mt-2 !bg-black !text-white !w-[70px]">
          Post
        </BaseButton>
      </form>
    </div>
  );
};

export default ModalPost;
