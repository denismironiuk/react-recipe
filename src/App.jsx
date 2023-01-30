import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Recipe from "./pages/Recipe";


function App() {
  return (
   <div className="w-full h-full">
   <Header/>
  <main className="max-w-[95%] min-h-screen m-auto pt-20 flex flex-col   ">
    <Routes >
      <Route path="/" element={<Home/>}/>
     
      
      <Route path="/category/:name" element={<Category/>}/>
      <Route path="/meal/:id" element={<Recipe/>}/>

      <Route path="*" element={<Page404/>}/>
    </Routes> 

    </main>
   <Footer/>
   
   </div>
  );
}

export default App;
