import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GameProvider } from './context/DataContext.tsx'
import Navbar from './components/Navbar.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {DetailsPage,Store,Search, NotFound} from './Pages'
import './fonts/GTWalsheimPro/stylesheet.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-slate-900 h-screen w-full'>

      <GameProvider>
        <Router basename='/GameshopV2'>
          <Navbar />
          <Routes>
            <Route path='#/' element={<App />} />
            <Route path='#/details/:id' element={<DetailsPage />} />
            <Route path='#/store' element={<Store />} />
            <Route path='#/search/:name' element={<Search />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </GameProvider>
    </div>
  </StrictMode>,
)
