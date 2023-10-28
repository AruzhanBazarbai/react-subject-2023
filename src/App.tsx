import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import classes from './App.module.scss';
import { Home } from './pages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<AppContainer />}> */}
        <Route index element={<Home />} />
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
