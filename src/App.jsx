import Application from "./containers/Application"

// Redux store
import { Provider } from "react-redux";
import store from "./redux/store";

// Style
import 'antd/dist/antd.css';
import './style.css'


const app = () => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  )
}

export default app
