import './App.css';
import { Routes , Route , Link} from 'react-router-dom';
import Index_page from './pages/Index_page';
import Login_page from './pages/Login_page';

function App() {

  return (
    <Routes>
      <Route index element={<Index_page/>}></Route>
      <Route path='/login' element={<Login_page/>}></Route>
    </Routes>
  )
}

export default App
