import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StarField from "../components/animations/StarField";
import CloseButton from "../components/Ui/CloseButton";
import { login } from "../../firebase/firebaseAuthHelpers";

export const LoginPage = () => {
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
      await login(form.email, form.password);
      navigate("/starships");
    } catch (err: any) {
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
        setError("Email o contraseña incorrectos.");
      } else {
        setError("Error al iniciar sesión.");
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
          <h1 className="text-2xl font-bold mb-6 text-black">Enter your email and password</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-slate-200 text-black px-4 py-2 rounded border-b-2 border-white focus:outline-none focus:ring-2 focus:ring-white hover:border-b-2 hover:border-slate-300"
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full bg-slate-200 text-black px-4 py-2 rounded border-b-2 border-white focus:outline-none focus:ring-2 focus:ring-white hover:border-b-2 hover:border-slate-300"
            />
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <div>
              <button
                type="submit"
                className="w-full bg-[#f5c518] py-3 text-black font-bold rounded-3xl hover:bg-[#f5b518] transition-colors"
                disabled={loading}
              >
                {loading ? "Cargando..." : "Continue"}
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <Link to="/signup" className="text-gray-400 hover:text-black hover:font-bold text-sm">
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};