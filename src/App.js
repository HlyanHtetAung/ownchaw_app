import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ArticleDetail from './pages/ArticleDetail';
import Articles from './pages/Articles';
import Login from './pages/Login';
import QuestionLists from './pages/QuestionLists';
import Astrologers from './pages/Astrologers';
import SignUp from './pages/SignUp';
import CreateArtilce from './pages/CreateArtilce';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="article/:articleId" element={<ArticleDetail />} />
          <Route path="articles" element={<Articles />} />
          <Route path="astrologers" element={<Astrologers />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="questionsList" element={<QuestionLists />} />
          <Route path="createArticle" element={<CreateArtilce />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
