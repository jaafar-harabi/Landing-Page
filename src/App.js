import './my-sass.scss'
import './fonts/aeoniktrial-regular-webfont.woff'
import './fonts/aeoniktrial-regular-webfont.woff2'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Payments from './components/Payments'
import How from './components/How'
import IndivBussiness from './components/IndivBussiness'
import Head  from './components/Head'
import Home from './components/Home'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (process.env.REACT_APP_NODE_ENV === 'production') {
  disableReactDevTools();
}
function App() {
  return (
    <div >
    <Head />
    <Home/>
    <IndivBussiness/>
    <How/>
    <Payments/>
    <Contact/>  
    <Footer/>

      
  
    </div>
  );
}

export default App;
