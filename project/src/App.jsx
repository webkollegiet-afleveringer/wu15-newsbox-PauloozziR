import { BrowserRouter, Routes, Route } from 'react-router';
import './App.scss';
import Home from "./views/home";
import Archive from "./views/archive";
import Popular from "./views/popular";
import Settings from "./views/settings";
import SearchProvider from './contexts/search-context';

function App() {

  return (
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/archive" element={<Archive />}></Route>
          <Route path="/popular" element={<Popular />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  )
}

export default App