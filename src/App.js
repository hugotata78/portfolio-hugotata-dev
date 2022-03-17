

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@popperjs/core'
import Rout from './Rout';
import { Suspense } from 'react'


function App() {
  return (
    
     
        <Suspense fallback="Cargando traducciones...">
          <Rout />
        </Suspense>

  );
}

export default App;
