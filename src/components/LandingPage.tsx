import { loginWithGoogle } from "../services/googleAuth";

const LandingPage = () => {
  return (
    <div>
      <button
        className="p-6 m-6 font-bold text-green-700 bg-slate-400 hover:bg-slate-300"
        onClick={() => loginWithGoogle()}
      >
        Login with Google
      </button>
      <h1>Welcome to The LandingPage</h1>
    </div>
  );
};

export default LandingPage;
