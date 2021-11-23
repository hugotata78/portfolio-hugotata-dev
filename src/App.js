
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@popperjs/core'
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback='Cargando Traducciones ....'>
      <Home />
    </Suspense>
  );
}

export default App;
