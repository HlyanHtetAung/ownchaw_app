import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ArticleDetail from './pages/ArticleDetail';
import Articles from './pages/Articles';
import Login from './pages/Login';
import QuestionLists from './pages/QuestionLists';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="article/:articleId" element={<ArticleDetail />} />
          <Route path="articles" element={<Articles />} />
          <Route path="login" element={<Login />} />
          <Route path="questionsList" element={<QuestionLists />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
