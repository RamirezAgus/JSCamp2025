import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'

import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))
const JobDetail = lazy(() => import('./pages/JobDetail.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))


function App() {
  return (
    <>
      <Navbar />
        <Suspense fallback={<div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/jobs/:jobId" element={<JobDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      <Footer />
    </>
  )
}

export default App
