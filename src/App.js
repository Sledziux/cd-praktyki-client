import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormScreen from './screens/FormScreen';
import AdminPanel from './screens/AdminPanel';
import BriefPreview from './screens/BriefPreview';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormScreen />} />
        <Route path="/panel" element={<AdminPanel />} />
        <Route path="/panel/:id" element={<BriefPreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
