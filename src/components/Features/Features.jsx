import FeaturesContent from '../FeaturesContent/FeaturesContent'
import FeaturesImage from '../FeaturesImage/FeaturesImage'
import FeaturesInfo from '../FeaturesInfo/FeaturesInfo'
import './Features.css'
function Features() {
  return (
   <div className="f-container">
     <FeaturesImage/>
     <FeaturesContent/>
     <FeaturesInfo/>
   </div>
  )
}

export default Features