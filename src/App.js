
import Categories from './components/Categories'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PopularSection from './components/PopularSection'
import Recommended from './components/Recommended'
import SaleImage from './components/SaleImage'
import Topic from './components/Topic'


function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <SaleImage></SaleImage>
            <Recommended></Recommended>
            <Topic></Topic>
            <PopularSection></PopularSection>
            <Footer></Footer>
        </div>
    )
}

export default App
