
let Currency = "inr"

const data = fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${Currency}.json`)
.then((response)=>response.json)
.then((responseData)=>{
    console.log();
} )
