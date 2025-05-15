import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./presentation/routes/Router";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen bg-black text-white">
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
