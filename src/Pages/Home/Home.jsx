import Banner from "../../Components/Banner/Banner"
import Faq from "../../Components/Faq/Faq"
import FeaturedSurveys from "../../Components/FeaturedSurveys/FeaturedSurveys"


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedSurveys/>
      <Faq></Faq>
    </div>
  )
}

export default Home