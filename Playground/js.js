let Currency = "usd"
let Amount = 1
const data = fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${Currency}.json`)
.then((response)=>response.json())
.then((responseData)=>{
    let exchangeRate = (responseData.usd.inr);
    console.log(`${Amount*exchangeRate} Rupees`);
} )
