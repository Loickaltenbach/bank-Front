import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './Sass/index.scss'
import { HomeScreen, LoginScreen, UserScreen } from './pages';
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/Login' element={<LoginScreen />} />
            <Route path='/Profile' element={<UserScreen />} />
            <Route path='/*' element={<Navigate to="/Login" />} />
          </Routes>
        </BrowserRouter>
      </div>
      </Provider>
  );
}

export default App;
