import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./Form"


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/form-classwork' element={<Form/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
