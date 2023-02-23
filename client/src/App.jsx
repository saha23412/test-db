import Header from './components/simple/header/header';
import { publickRoutes } from './router/routes';
import FramePages from './components/smart/frame-pages/frame-pages';
import './global.css';

const App = () => {
  return (
    <>
      <Header />
      <FramePages publickRoutes={publickRoutes} />
    </>
  );
};

export default App;
