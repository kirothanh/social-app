import {Group, Text, UnstyledButton} from "@mantine/core";
import {forwardRef} from "react";
import {PiDotsThreeOutlineFill} from "react-icons/pi";
import BaseAvatar from "../Avatar";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({image, name, email, icon, ...others}: UserButtonProps, ref) => {
    return (
      <UnstyledButton
        ref={ref}
        style={{
          padding: "16px",
          color: "black",
          borderRadius: "4px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        {...others}
      >
        <Group>
          <BaseAvatar src={image} radius="xl" />

          <div style={{flex: 1}}>
            <Text size="sm" fw={500} className="hidden sm:block">
              {name}
            </Text>

            <Text c="dimmed" size="xs" className="hidden sm:block">
              {email}
            </Text>
          </div>

          {icon || <PiDotsThreeOutlineFill size={16} className="hidden sm:block"/>}
        </Group>
      </UnstyledButton>
    );
  }
);

export default UserButton;
