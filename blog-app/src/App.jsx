import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Blog from './pages/Blog';
import BlogDetail from './components/BlogSection/BlogDetails';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
