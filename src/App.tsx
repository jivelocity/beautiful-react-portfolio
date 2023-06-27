import { Contents } from "./components/Contents"
import { Navbar } from "./components/Navbar"
import { Sidebar } from "./components/Sidebar"
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <div className="font-plusJakarta w-full h-full">
        <Navbar/>
        <Sidebar/>
        <Contents />
        <Toaster/>
      </div>
    </>
  )
}

export default App
