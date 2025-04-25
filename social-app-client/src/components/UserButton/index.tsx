import {Text} from "@mantine/core";
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
  onClick,
}: UserButtonProps) => {
  return (
    <div
      className={`flex items-center justify-between gap-3 w-full px-2 py-2 rounded hover:bg-gray-100 ${className}`}
    >
      <div className="flex items-center gap-3">
        <BaseAvatar src={image} radius="xl" className="w-10 h-10" />
        <div className="flex flex-col">
          <Text size="sm" fw={500}>
            {name}
          </Text>
          <Text c="dimmed" size="xs">
            {email}
          </Text>
        </div>
      </div>

      {buttonText && (
        <BaseButton
          className="!bg-black !text-white !text-xs !px-3 !py-1"
          onClick={onClick}
        >
          {buttonText}
        </BaseButton>
      )}

      {icon && <div>{icon}</div>}
    </div>
  );
};

export default UserButton;
