import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import LoginPage from './server/LoginPage';
import ListPage from './server/ListPage';

const App = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' > 
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path=':token' element={<ListPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
  );
};

export default App
