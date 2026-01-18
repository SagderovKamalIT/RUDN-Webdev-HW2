import { Routes, Route } from 'react-router';
import { CssBaseline } from "@mui/material";
import { routes } from "./routes";
import Header from './components/Header/Header';


const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
       <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App
