import { BrowserRouter, Routes, Route } from 'react-router';
import './App.scss';
import Home from "./views/home";
import Archive from "./views/archive";
import Popular from "./views/popular";
import Settings from "./views/settings";
import SearchProvider from './contexts/search-context';
import Layout from './components/layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </QueryClientProvider>
  )
}

export default App