import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DealInfo.css'
function DealInfo() {
  return (
   <div className="deal-info">
    <h2>Extra Info About Property</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur nam assumenda facilis dolorum delectus sequi, ipsa dolorem harum voluptates?</p>
    <p>When you need free CSS templates you can simply type TemplateMO in any search engine website in addition you can type TemplateMo One Page Layouts etc</p>
    <button className='buttons'><div className="btn-icon"><FontAwesomeIcon icon={faCalendarDays} color='white'/></div> Schedule a visit</button>
   </div>
  )
}

export default DealInfo