import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Layout, NotFound, Post, Profile } from './components';
// import classes from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
