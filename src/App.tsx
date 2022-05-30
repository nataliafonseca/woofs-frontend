import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/Global';
import Routes from './routes';

export function App() {
    return (
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    )
};