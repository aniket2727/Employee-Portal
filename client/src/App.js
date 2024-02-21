

import { BrowserRouter,Route,Routes } from "react-router-dom";
import LoginComponents from "./Componets/AuhtComponets/LoginComponets";
function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
       <Route path="/login" element={<LoginComponents/>}/>
       <Route path="*" element={<div>page not found 404</div>}/>
       <Route path="/" element={<div>page not found 404</div>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
