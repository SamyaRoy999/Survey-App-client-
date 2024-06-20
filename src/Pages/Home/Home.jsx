import Banner from "../../Components/Banner/Banner"
import Faq from "../../Components/Faq/Faq"
import FeaturedSurveys from "../../Components/FeaturedSurveys/FeaturedSurveys"
import HowWorks from "../../Components/HowWorks/HowWorks"
import LatestSurveys from "../../Components/LatestSurveys/LatestSurveys"


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedSurveys/>
      <LatestSurveys/>
      <HowWorks/>
      <Faq></Faq>
    </div>
  )
}

export default Home