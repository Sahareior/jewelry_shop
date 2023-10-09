

import './App.css'
import Blog from './assets/Components/MainBody/Blog/Blog'
import Carousel from './assets/Components/MainBody/Carousel/Carousel'
import Dvider from './assets/Components/MainBody/DviderSection/Dvider'
import AllProductsSection from './assets/Components/MainBody/MainbodyTabs/AllProductsSection'
import NewArrived from './assets/Components/MainBody/MainbodyTabs/NewArrived'
import Sections from './assets/Components/MainBody/Sections/Sections'
import Footer from './assets/Components/Shared/Footer/Footer'
import Navbar from './assets/Components/Shared/Navbar'
import Tesimonials from './assets/Components/Testimonials/Testimonials'

function App() {


  return (
    <>
     <Navbar></Navbar>
    <Carousel></Carousel>
     <Dvider></Dvider>
     <Sections></Sections>
     <NewArrived></NewArrived>
     <AllProductsSection></AllProductsSection>
     <Tesimonials></Tesimonials>
     <Blog></Blog>
     <Footer></Footer>
    </>
  )
}

export default App
