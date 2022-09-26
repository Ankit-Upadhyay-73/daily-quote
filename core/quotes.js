

// Creating quote from quotable API

let url  = 'https://api.quotable.io/random';

var fetchQuote = async function (){

    data = await fetch(url,
        {
            crossDomain: true,
            headers: {'Content-Type': 'application/json'},
            method: 'GET'
        }
    );

    return await data.json();

}
