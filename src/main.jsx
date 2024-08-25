import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import AddCreator from './pages/AddCreator'
import AllCreators from './pages/AllCreators'
import EditCreator from './pages/EditCreator'
import ViewCreator from './pages/ViewCreator'
import './index.css'

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>    
        <Route path="/AddCreator" element={<AddCreator/>} />
        <Route index element={<AllCreators />} />
        <Route path="/AllCreators" element={<AllCreators />} />
        <Route path="/EditCreator/:id" element={<EditCreator />} />
        <Route path="/ViewCreator/:id" element={<ViewCreator />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
);
