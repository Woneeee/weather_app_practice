import { HashRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" />
        <Route path="/login" />
        <Route path="/signup" />
        <Route path="/*" />
      </Routes>
    </HashRouter>
  );
};

export default Router;
