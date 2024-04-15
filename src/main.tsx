import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import './index.scss';
import { BrowserRouter,  Route, Routes  } from 'react-router-dom';
import Auth from './firebase/auth.tsx';
import Login from './firebase/login.tsx';
import Signup from './firebase/signup.tsx';
import Tweets from './container/dashboards/tweets/tweets.tsx';
import Loader from './components/common/loader/loader.tsx';
import DMS from './container/dashboards/dms/dms.tsx';
import Tweet from './container/apps/jobs/tweet/tweet.tsx';
import Dm from './container/apps/jobs/dm/dm.tsx';
import Alert from './container/apps/jobs/alert/alert.tsx';

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
          <Route path={`${import.meta.env.BASE_URL}tweets/tweets`} element={<Tweets/>} />   
          <Route path={`${import.meta.env.BASE_URL}dms/dms`} element={<DMS/>} />  
          <Route path={`${import.meta.env.BASE_URL}tweet/tweet`} element={<Tweet/>} /> 
          <Route path={`${import.meta.env.BASE_URL}dm/dm`} element={<Dm/>} />   
          <Route path={`${import.meta.env.BASE_URL}alert/alert`} element={<Alert/>} />   
          </Route>
      </Routes>
    </React.Suspense>
  </BrowserRouter>
</React.Fragment>
);
