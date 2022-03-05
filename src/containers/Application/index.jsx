import { Routes, Route } from "react-router-dom";

import Admin from "../../components/manager/Dashboard";
import Login from "../Login";

import './Application.css'

const Application = () => {
  return (
      <>
        <Routes>
          <Route index element={<Admin />} />
          <Route path="dashboard/*" element={<Admin />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </>
    );
}

export default Application