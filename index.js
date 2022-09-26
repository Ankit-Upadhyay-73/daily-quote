
    let quoteElement = document.querySelector("#quote");
    let authorElement = document.querySelector("#author");

    let randomColor = function() {
        var red = Math.floor(Math.random() * 256 );
        var green = Math.floor(Math.random() * 256 );
        var blue = Math.floor(Math.random() * 256 );

        return  [red, green, blue];
    }

    let setAuthorAndQuote = (data)=>{
        let [red, green, blue] = randomColor();
        if( blue > 50 )
            blue = 256 - blue;

        document.querySelector("#quote-block").style.backgroundColor
                = 'rgb(' + red + ',' + green + ',' + blue + ')';
        if( red < 50 && blue < 50 && green < 50){
            quoteElement.classList.add("text-white");
            authorElement.classList.add("text-white");
        }

        quoteElement.innerHTML   = data.content;
        authorElement.innerHTML = `- ${data.author}`;
    }

    function setupData(){
        data =  fetchQuote();
        data.then(setAuthorAndQuote);
    }

    setupData();


