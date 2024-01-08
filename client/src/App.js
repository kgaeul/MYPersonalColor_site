import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Autumn from './Autumn';
import Spring from './Spring';
import Summer from './Summer';
import Winter from './Winter';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Community from './Community';

function Main() {
  return (
    <div id='container'>
      <a href='/' style={{ textDecoration: 'none', color: 'black' }}>
        <h1 id='title'>
          What's <br />
          your Color ?
        </h1>
      </a>

      <h5>
        당신의 계절은 무엇인가요? <br></br>당신에게 어울릴 색을 골라드릴게요.
      </h5>
      <a href='/Community' style={{ textDecoration: 'none', color: 'gray' }}>
        퍼뮤니티에서 고민상담하기
      </a>

      <Header />
      <div className='row' id='first'>
        <div id='spring' className='col-md-6'>
          <a href='/spring' id='Spring'>
            Spring
          </a>
        </div>

        <div id='summer' className='col-md-6'>
          <Link id='Summer' to='/Summer'>
            Summer
          </Link>
        </div>
      </div>
      <div className='row' id='second'>
        <div id='autumn' className='col-md-6'>
          <Link id='Autumn' to='/Autumn'>
            Autumn
          </Link>
        </div>
        <div id='winter' className='col-md-6'>
          <Link id='Winter' to='/Winter'>
            Winter
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
      <Routes>
        <Route path='/spring' element={<Spring />}></Route>
      </Routes>
      <Routes>
        <Route path='/summer' element={<Summer />}></Route>
      </Routes>
      <Routes>
        <Route path='/autumn' element={<Autumn />}></Route>
      </Routes>
      <Routes>
        <Route path='/winter' element={<Winter />}></Route>
      </Routes>
      <Routes>
        <Route path='/Community' element={<Community />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
