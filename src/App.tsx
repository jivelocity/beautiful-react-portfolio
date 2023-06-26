import { Contents } from "./components/Contents"
import { Navbar } from "./components/Navbar"
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <>
      <div className="font-plusJakarta w-full h-full">
        <Navbar/>
        <Sidebar/>
        <Contents />
      </div>
    </>
  )
}

export default App
