import logo from "./logo.svg";
import "./App.css";
import Body from "./pages/Body";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
