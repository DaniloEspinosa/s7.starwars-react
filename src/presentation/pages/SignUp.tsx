import { Link } from "react-router-dom";

export const SignUpPage = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-8 px-4 flex flex-col items-center">

        <div className="w-full max-w-md bg-gray-900 bg-opacity-50 p-8 rounded">
          <h1 className="text-2xl font-bold mb-6 text-center">SIGN UP</h1>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-gray-800 py-3 text-white rounded hover:bg-gray-700 transition-colors"
              >
                SIGN UP
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <Link to="/login" className="text-gray-400 hover:text-white text-sm">
              Already have an account? Log in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
