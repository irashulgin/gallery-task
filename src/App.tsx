import "./App.css";
import { MainPage } from "./components/MainPage";
import { AppContextProvider } from "./context/app-context";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <MainPage />
      </AppContextProvider>
    </div>
  );
}

export default App;
