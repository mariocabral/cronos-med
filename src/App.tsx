import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage';
import './scss/style.scss';

const App: React.FC = () => {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

  return (
    <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*"  element={<MainPage />} />
          </Routes>
        </Suspense>
      </HashRouter>
  );
}

export default App;
