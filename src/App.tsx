import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './modules/shared/components/Header';

export const App = () => (
  <div className="app">
    <Header />

    <div className="app_container">
      <Outlet />
    </div>
  </div>
);
