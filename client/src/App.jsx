import './App.css';
import './index.css';
import { Routes , Route , Link} from 'react-router-dom';
import Index_page from './pages/Index_page';
import Login_page from './pages/Login_page';
import Layout from './Layout';
import Register from './pages/Register';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Index_page />}/>
        <Route path='/login' element={<Login_page />}/>
        <Route path='/register' element={<Register/>}/>
      </Route>
    </Routes>
  )
}

export default App
