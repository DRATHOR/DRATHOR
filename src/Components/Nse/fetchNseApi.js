import React, {useEffect} from 'react'

function FetchNseApi() {
    useEffect(()=>{
        var API = require('indian-stock-exchange');
 
       // var NSEAPI = API.NSE;
        var BSEAPI = API.BSE;
         
         
        // Examples
         
        // NSEAPI.getIndices()
        // .then(function (response) { 
        //   console.log(response.data); //return the api data
        // });
         
        BSEAPI.getIndices()
        .then(function (response) { 
          console.log(response.data); //return the api data
        })    
    },[]);
    // {
    //     data: [ 
    //       { 
    //         timeVal: 'Time when the stock info was last updated',
    //         indexName: 'Stock symbol',
    //         previousClose: 'previous close value',
    //         open: 'open value',
    //         high: 'high value',
    //         low: 'low value',
    //         last: 'Last stock value',
    //         percChange: 'percent change in stock price, -ve/+ve values',
    //         yearHigh: '52week highest value',
    //         yearLow: '52week lowest value',
    //         indexOrder: 'some random value, not important',
    //      },
    //      ...
    //     ],
    // }
    return (
        <div>
            
        </div>
    )
}

export default FetchNseApi
