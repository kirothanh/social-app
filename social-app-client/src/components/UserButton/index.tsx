import {Avatar, Group, Text, UnstyledButton} from "@mantine/core";
import {forwardRef} from "react";
import {PiGreaterThanThin} from "react-icons/pi";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

// const UserButton = ({ image, name, email, icon, ...others }: UserButtonProps, ref) => {
//   return (
//     <UnstyledButton
//       ref={ref}
//       style={{
//         padding: 'var(--mantine-spacing-md)',
//         color: 'var(--mantine-color-text)',
//         borderRadius: 'var(--mantine-radius-sm)',
//       }}
//       {...others}
//     >
//       <Group>
//         <Avatar src={image} radius="xl" />

//         <div style={{ flex: 1 }}>
//           <Text size="sm" fw={500}>
//             {name}
//           </Text>

//           <Text c="dimmed" size="xs">
//             {email}
//           </Text>
//         </div>

//         {icon || <PiGreaterThanThin size={16} />}
//       </Group>
//     </UnstyledButton>
//   )
// }

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
          <Avatar src={image} radius="xl" />

          <div style={{flex: 1}}>
            <Text size="sm" fw={500} className="hidden md:block">
              {name}
            </Text>

            <Text c="dimmed" size="xs" className="hidden md:block">
              {email}
            </Text>
          </div>

          {icon || <PiGreaterThanThin size={16} className="hidden md:block"/>}
        </Group>
      </UnstyledButton>
    );
  }
);

export default UserButton;
