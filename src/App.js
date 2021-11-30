

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@popperjs/core'
import { Suspense } from 'react';
import Rout from './Rout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Suspense fallback='Cargando Traducciones ....'>
      <BrowserRouter>
        <Rout />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
