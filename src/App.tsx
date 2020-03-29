import React from 'react';
import './App.css';

import GuestLayout from './pages/GuestLayout';
import { RenderRoutes } from './components/render-routes/RenderRoutes';
import ROUTES from './config/routes';

const App: React.FC = () => {

  return (
    <div className="">
      <RenderRoutes routes={ROUTES}/>        
      {/* <GuestLayout/> */}
    </div>
  );
}

export default App;
