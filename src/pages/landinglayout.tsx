
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from "react-redux";
import store from '../redux/store';
function Landinglayout() {
  
  return (
    <Fragment>
      <Provider store={store}>
          {/* <Landingswitcher /> */}
          <Outlet />
        <div id="responsive-overlay"></div>
      </Provider>
    </Fragment>
  );
}

export default Landinglayout;

