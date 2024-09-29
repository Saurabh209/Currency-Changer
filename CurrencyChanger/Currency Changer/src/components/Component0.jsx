
import './Component0.css'

function Container(props){

    return(
        <>
        <div className="Container">
        <div className='upperContainer'>
        <div className="upperLeft">
        <p>{props.conversion}</p>
        </div>
        <div className ="upperRight"><p>currencyType</p></div>
        </div>
        <div className='lowerContainer'>
            <div className='lowerLeft'>
                <input className='field' type='number'></input>
            </div>
            <div className='lowerRight'>
            <select className='selectCurrecny' name="currencyType">
                <option value="usd">Usd</option>
                <option value="inr">Inr</option>
            </select>


            </div>
        </div>
            
        </div>
        </>
    )
    
}

export default Container