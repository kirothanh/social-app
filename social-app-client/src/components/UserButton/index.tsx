import {Group, Text} from "@mantine/core";
import BaseAvatar from "../Avatar";
import BaseButton from "../Button";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
  buttonText?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const UserButton = ({
  image,
  name,
  email,
  icon,
  buttonText,
  className,
  onClick
}: UserButtonProps) => {
  
  return (
    <BaseButton
      className={`!w-full !h-full !py-1 !text-black !border-none !bg-white  hover:!bg-gray-300 ${className}`}
    >
      <Group>
        <BaseAvatar src={image} radius="xl" className="float-left"/>

        <div style={{flex: 1}}>
          <Text size="sm" fw={500} className="hidden sm:block">
            {name}
          </Text>

          <Text c="dimmed" size="xs" className="hidden sm:block">
            {email}
          </Text>
        </div>

        <BaseButton className={`${buttonText ? '!block' : '!hidden'} !bg-black !text-white`} onClick={onClick}>
          {buttonText}
        </BaseButton>

        <div className={`${icon ? '!block' : '!hidden'}`}>{icon}</div>
      </Group>
    </BaseButton>
  );
};

export default UserButton;
