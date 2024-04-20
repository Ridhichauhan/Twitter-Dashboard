import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import './index.scss';
import { BrowserRouter,  Route, Routes  } from 'react-router-dom';
import Auth from './firebase/auth.tsx';
import Login from './firebase/login.tsx';
import Signup from './firebase/signup.tsx';
import Crm from './container/dashboards/crm/crm.tsx';
import Loader from './components/common/loader/loader.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
  <BrowserRouter>
    <React.Suspense fallback={<Loader/>}>
      <Routes> 
        <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
          <Route index element={<Login />} />
          <Route path={`${import.meta.env.BASE_URL}firebase/login`} element={<Login />} />
          <Route path={`${import.meta.env.BASE_URL}firebase/signup`} element={<Signup />}/>
        </Route>
          <Route path={`${import.meta.env.BASE_URL}`} element={<App/>}>
          <Route path={`${import.meta.env.BASE_URL}dashboards/crm`} element={<Crm/>} />      
          </Route>
      </Routes>
    </React.Suspense>
  </BrowserRouter>
</React.Fragment>
);