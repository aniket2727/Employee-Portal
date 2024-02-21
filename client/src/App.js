




import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
       <Route path="*" element={<div>page not found 404</div>}/>
       <Route path="/" element={<div>page not found 404</div>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
