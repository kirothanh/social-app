import {Button, Input} from "@mantine/core";

export default function Login() {
  return (
    <div className="bg-gradient-to-br from-cyan-400/40 to-white h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center">Register</h2>
        <form className="mt-4">
          <Input.Wrapper label="Full Name" withAsterisk size="md">
            <Input
              className="w-full"
              type="text"
              placeholder="Enter full name"
            />
          </Input.Wrapper>

          <Input.Wrapper label="Email" withAsterisk size="md" className="mt-4">
            <Input
              className="w-full"
              type="email"
              placeholder="Enter email address"
            />
          </Input.Wrapper>
          <Input.Wrapper
            label="Password"
            withAsterisk
            size="md"
            className="mt-4"
          >
            <Input type="password" placeholder="Enter password" />
          </Input.Wrapper>
          <Button
            variant="gradient"
            gradient={{from: "violet", to: "indigo", deg: 90}}
            className="mt-4"
            fullWidth
          >
            Submit
          </Button>
        </form>
        <p className="mt-4! text-md!">You have an account? <span className="text-sky-400 font-semibold cursor-pointer">Login Now</span> </p>
      </div>
    </div>
  );
}
