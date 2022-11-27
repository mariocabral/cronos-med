import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage';
import './scss/style.scss';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { ProfesionalService } from './services/profesional-service';

const App: React.FC = () => {
  
  
  const profesionalService = new ProfesionalService();
  profesionalService.loadAllProfesionals();
  
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
