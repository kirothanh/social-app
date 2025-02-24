import BaseButton from "../../../components/Button";
import BaseTextInput from "../../../components/Input";

export default function Login() {
  return (
    <div className="bg-gradient-to-br from-cyan-400/40 to-white h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center">Register</h2>
        <form className="mt-4 space-y-4">
          <BaseTextInput
            type="text"
            placeholder="Enter full name"
            label="Full Name"
          />

          <BaseTextInput
            type="email"
            placeholder="Enter email address"
            label="Email"
          />

          <BaseTextInput
            type="password"
            placeholder="Enter password"
            label="Password"
          />
          
          <BaseButton
            variant="gradient"
            gradient={{from: "violet", to: "indigo", deg: 90}}
            className="mt-4"
            fullWidth
          >
            Submit
          </BaseButton>
        </form>
        <p className="mt-4! text-md!">You have an account? <span className="text-sky-400 font-semibold cursor-pointer">Login Now</span> </p>
      </div>
    </div>
  );
}
