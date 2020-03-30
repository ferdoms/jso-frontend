import React from 'react';
import './App.css';

import { RenderRoutes } from './components/render-routes/RenderRoutes';
import ROUTES from './config/routes';

const App: React.FC = () => {

  return (
    <div className="">
      <RenderRoutes routes={ROUTES}/>       
    </div>
  );
}

export default App;
