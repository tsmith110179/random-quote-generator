function App() {

  const [quotes, setQuotes] = React.useState("");
  
  const [randomQuote, setRandomQuote] = React.useState([]);

  const [color, setColor] = React.useState("");

  React.useEffect(() => {
   async function fetchData() {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();

    setQuotes(data);
    let randIndex = Math.floor(Math.random() * data.length);
    setRandomQuote(data[randIndex])

  }
  
  fetchData();
}, [])

   const getNewQuote = () => {

    const colors = [
     "#161085",
     "#27ae60",
     "#2c3e50",
     "#f39c12",
     "#e74c3c",
     "#9b59b6",
     "#FB6964",
     "#342224",
     "#472E32",
     "#BDBB99",
     "#77B1A9",
     "#73A857",

    ];

    let randIndex = Math.floor(Math.random() * quotes.length);
    let randColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuote(quotes[randIndex])
    setColor(colors[randColorIndex])
   
   }


  return (
      /*<div class="container pt-5">
      
       {quotes.map(quote => (
        <div>{quote.text}</div>
       ))}
      </div>*/
     <div style={{backgroundColor: color, minHeight: "100vh"}}>
        <div className="container pt-5">
        <div id="quote-box">
          <div className="card-header">Inspirational Quotes</div>
          <div className="card-body">
            {randomQuote ? (             
               <>
               <h5 id="author" className="card-title">- {randomQuote.author || "No author"}</h5>
               <p id="text" className="card-text">&quot;{randomQuote.text}&quot;</p>
               </>
            ) : (
              <h2>Loading</h2>
            )}
              <div className="row">
              <div className="col-sm">
              <a id="tweet-quote" href={
                "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + 
                encodeURIComponent(
                  '"' + randomQuote.text + '" ' + randomQuote.author
                )
              }
              target="_blank" className="btn btn-warning" style={{backgroundColor: color, borderColor: color}}>
          
                <i className="fa fa-twitter"></i>
              </a>
              <a href={
                "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
                encodeURIComponent(randomQuote.author) + 
                "&content=" + 
                encodeURIComponent(randomQuote.text) +
                "&canonicalURL=https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Jim%20Rohn&content=Either%20you%20run%20the%20day%2C%20or%20the%20day%20runs%20you.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
               } 
               target="_blank" className="btn btn-danger" style={{backgroundColor: color, borderColor: color}}>
                 <i className="fa fa-tumblr"></i>
              </a>
            </div>
            <div className="col-lg">
              <button id="new-quote" onClick={getNewQuote} className="btn btn-primary ml-3" style={{backgroundColor: color, borderColor: color}}>New Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

const container = document.getElementById("app");

const root = ReactDOM.createRoot(container);

root.render(<App />);