// Redux store
import { Provider } from "react-redux";
import store from "./redux/store";

// Style
import 'antd/dist/antd.css';
import './style.css'
import { BrowserRouter } from "react-router-dom";

import Application from "./containers/Application"

const app = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </Provider>
  )
}

export default app
