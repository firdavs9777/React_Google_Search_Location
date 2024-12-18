

import LocationSearch from './components/LocationSearch'
import MapScreen from './components/MapScreen'
import type { Place } from './api/Place'
import { useState } from 'react'

function App() {
  const [place, setPlace] = useState<Place | null>(null);
  
  return (
    <div className='h-screen w-screen grid grid-cols-12 gap-4'>
    
      <div className="col-span-3 p-2">
      <LocationSearch onPlaceClick={(p) => setPlace(p)} />
      </div>
      <div className="col-span-9 p-2">
        <MapScreen place={place} />
      </div>
    </div>
  )
}

export default App
