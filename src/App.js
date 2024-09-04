import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Login from './Login';
import AppDirectory from "./AppDirectory";

function App() {
  return (
    <>
    <Helmet>
      <title>Login - App Directory</title>
    </Helmet>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/appdirectory" element={<AppDirectory />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
