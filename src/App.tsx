import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import TripSchedule from './pages/TripSchedule'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerija" element={<Gallery />} />
          <Route path="/razpored-izletov" element={<TripSchedule />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
