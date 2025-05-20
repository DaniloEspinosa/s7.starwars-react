import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StarField from "../components/animations/StarField";
import CloseButton from "../components/Ui/CloseButton";
import { signUp } from "../../infra/api/firebaseAuthHelpers";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signUp(form.email, form.password);
      navigate("/starships");
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setError("El email ya está registrado.");
      } else {
        setError("Error al registrarse.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <StarField />
      <CloseButton onClick={() => navigate("/")}>X</CloseButton>

      <div className="container mx-auto py-8 px-4 flex flex-col items-center">
        <img src="/logo-sw-pagina-oficial.png" alt="Star Wars Logo" className="h-16 mx-auto mb-6" />

        <div className="w-full max-w-md bg-white bg-opacity-50 p-8 rounded-2xl">
          <h1 className="text-2xl font-bold mb-6 text-black">Sign up</h1>
          <p className="text-sm text-gray-500 mb-6">
            If you don't have an account, please sign up
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>


            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
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
              value={form.password}
              onChange={handleChange}
              className="w-full bg-slate-200 text-black px-4 py-2 rounded border-b-2 border-white
              focus:outline-none focus:ring-2 focus:ring-white
              hover:border-b-2 hover:border-slate-300"
            />

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div>
              <button
                type="submit"
                className="w-full bg-[#f5c518] py-3 text-black font-bold rounded-3xl hover:bg-[#f5b518] transition-colors"
                disabled={loading}
              >
                {loading ? "Cargando..." : "Sign up"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-gray-400 hover:text-black hover:font-bold text-sm"
            >
              Already have an account? Log in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
