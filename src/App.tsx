import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./presentation/routes/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
