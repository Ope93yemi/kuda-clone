import Hero from "../components/home/Hero"
import Info from "../components/home/Info"
import Info2 from "../components/home/Info2"
import Info3 from "../components/home/Info3"
import Info4 from "../components/home/Info4"
import Info5 from "../components/home/Info5"
import Info6 from "../components/home/Info6"
import Info7 from "../components/home/Info7"
import SliderComponent from "../components/home/SliderComponent"
import Partners from "../components/home/Partners"


const Home = () => {
    return(
       <div>
     <Hero />
     <Info />
     <Info2 />
     <Info3 />
     <Info4 />
     <Info5 />
     <Info6 />
     <Info7 />
     <SliderComponent />
     <Partners />
       </div>
    )
}

export default Home