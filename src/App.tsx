import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./presentation/routes/Router";
import Header from "./presentation/components/Header";
import Navbar from "./presentation/components/Navbar";
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen bg-black text-white">
          <Header />
          <Navbar />
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
