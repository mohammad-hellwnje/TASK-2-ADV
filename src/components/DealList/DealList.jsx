import './DealList.css'
function DealList() {
    const list = [
        {
            listinfo:"Total Flat Space",
            listNumber:"185 m2"
        },
        {
            listinfo:"Floor number",
            listNumber:"26th"
        },
        {
            listinfo:"number of rooms",
            listNumber:"4"
        },
        {
            listinfo:"Parking Available",
            listNumber:"yes"
        },
        {
            listinfo:"Payment Process",
            listNumber:"Bank"
        },
    ]
  return (
    <div className="deallist">
       {
         list.map((item)=>{
            return (
                <div className="list-content">
                    <span>{item.listinfo}</span>
                    <p>{item.listNumber}</p>
                </div>
            )
         })
       }
    </div>
  )
}

export default DealList