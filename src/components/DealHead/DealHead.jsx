import './DealHead.css'
function DealHead() {
  return (
    <div className="dealhead">
        <div className="dealtitle">
            <div className="deal-title"><h2>BEST DEAL</h2></div>
            <p>Find Your Best Deal Right Now!</p>
        </div>
        <div className="dealbutton">
            <button className='btn active'>Appartment</button>
            <button className='btn '>Villa House</button>
            <button className='btn '>penthouse</button>
        </div>
    </div>
  )
}

export default DealHead