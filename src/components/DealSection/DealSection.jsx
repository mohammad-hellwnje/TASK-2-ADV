import DealHead from '../DealHead/DealHead'
import DealImage from '../DealImage/DealImage'
import DealInfo from '../DealInfo/DealInfo'
import DealList from '../DealList/DealList'
import './DealSection.css'
function DealSection() {
  return (
   <div className="DealSection">
     <DealHead/>
     <div className="DealContent">
        <DealList/>
        <DealImage/>
        <DealInfo/>
     </div>
   </div>
  )
}

export default DealSection