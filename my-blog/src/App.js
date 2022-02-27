import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ArticlesListPage from './pages/ArticlesListPage.js';
import ArticlePage from './pages/ArticlePage.js';
import NavBar from './Components/NavBar.js';
import NotFoundPage from './pages/NotFoundPage.js'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
          <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/articles-list' element={<ArticlesListPage />} />
            <Route path='/article/:name' element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
