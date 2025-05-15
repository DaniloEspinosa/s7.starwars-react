import { Link } from "react-router-dom";
import Logo from "../../assets/logo-sw-pagina-oficial.png";
import StarField from "../components/animations/StarField";
import CloseButton from "../components/Ui/CloseButton";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-black text-white">
      <StarField />
      <CloseButton onClick={() => navigate("/")}>X</CloseButton>

      <div className="container mx-auto py-8 px-4 flex flex-col items-center">
        <img src={Logo} alt="Star Wars Logo" className="h-16 mx-auto mb-6" />

        <div className="w-full max-w-md bg-white bg-opacity-50 p-8 rounded-2xl">
          <h1 className="text-2xl font-bold mb-6 text-black">
            Enter your email and password
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            If you have an account, please enter your email and password to
            continue
          </p>

          <form className="space-y-6">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full bg-slate-200 text-black px-4 py-2 rounded border-b-2 border-white
              focus:outline-none focus:ring-2 focus:ring-white
              hover:border-b-2 hover:border-slate-300"
            />

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full bg-slate-200 text-black px-4 py-2 rounded border-b-2 border-white
              focus:outline-none focus:ring-2 focus:ring-white
              hover:border-b-2 hover:border-slate-300"
            />

            <div>
              <button
                type="submit"
                className="w-full bg-[#f5c518] py-3 text-black font-bold rounded-3xl hover:bg-[#f5b518] transition-colors"
              >
                Continue
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/signup"
              className="text-gray-400 hover:text-black hover:font-bold text-sm"
            >
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
