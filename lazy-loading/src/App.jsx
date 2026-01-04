// import { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";

// import Nav from "./components/Nav.jsx";

// // 👇 pages ko lazy load karo
// import Home from "./pages/Home.jsx";  
// // const Home = lazy(() => import("./pages/Home.jsx"));


// const About = lazy(() => import("./pages/About.jsx"));
// const Service = lazy(() => import("./pages/Service.jsx"));
// const Contact = lazy(() => import("./pages/Contact.jsx"));

// const App = () => {
//   return (
//     <main>
//       <Nav />

//       {/* Routes with Suspense */}
//       <Suspense fallback= {<div style={{ padding: "40px", textAlign: "center" }}>Loading page...</div>}>
      

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/service" element={<Service />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Suspense>
    
//     </main>
//   );
// };

// export default App;



import React from 'react'
import Product from './components/product'
import { useEffect, useState } from "react";
import ProductSkeleton from "./components/ProductSkeleton";



const App = ( ) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);
  const products = [
  {
    id: 1,
    image: "/images/automotive.webp",
    title: "Automotive Solutions",
    description: "High-quality automotive components and industrial automation solutions."
  },
  {
    id: 2,
    image: "/images/building-automation.webp",
    title: "Building Automation",
    description: "Smart building automation systems for efficient control and monitoring."
  },
  {
    id: 3,
    image: "/images/cctv-surveillance.webp",
    title: "CCTV Surveillance",
    description: "Advanced CCTV surveillance systems for security and monitoring."
  },
  {
    id: 4,
    image: "/images/client-project.webp",
    title: "Client Projects",
    description: "Customized automation and electrical projects delivered to clients."
  },
  {
    id: 5,
    image: "/images/commercial-buildings.webp",
    title: "Commercial Buildings",
    description: "Electrical and automation solutions for commercial building infrastructure."
  },
  {
    id: 6,
    image: "/images/electrical-panel.webp",
    title: "Electrical Panels",
    description: "Reliable electrical panels designed for industrial and commercial use."
  },
  {
    id: 7,
    image: "/images/electrical-panels.webp",
    title: "Electrical Panel Systems",
    description: "Complete electrical panel systems ensuring safety and performance."
  },
  {
    id: 8,
    image: "/images/energy-management.webp",
    title: "Energy Management",
    description: "Smart energy management solutions to optimize power consumption."
  },
  {
    id: 9,
    image: "/images/environmental-safety.webp",
    title: "Environmental Safety",
    description: "Environmental safety and compliance solutions for industries."
  },
  {
    id: 10,
    image: "/images/hero-industrial.webp",
    title: "Industrial Automation",
    description: "Industrial automation solutions for improved productivity and efficiency."
  }
];

      return (
  
    <div className='bg-indigo-200 min-h-screen pt-5 
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                gap-6 place-items-center'>
      {loading ? Array.from({length: 3}).map((_,i)=>(
        <ProductSkeleton key={i} />
      ))
      : products.map((item,index) => (
        <Product
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
         loading={index === 0 ? "eager" : "lazy"} 
                  priority={index === 0 ? "high" : "low"}
                  isLCP ={index === 0}
        />
      ))}
    </div>
  
  )
}

export default App