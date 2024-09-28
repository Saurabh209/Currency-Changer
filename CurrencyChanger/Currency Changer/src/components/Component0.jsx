
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
        <div className='lowerContainer'></div>
            
        </div>
        </>
    )
    
}

export default Container