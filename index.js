const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const all_transactions = require('./all_transactions.json');
const axios = require('axios');
const DOMParser = require('dom-parser');
const PORT = process.env.PORT || 4000; 


// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// async function fetchSenate() {
//   let response = await fetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/')
//   .then((response) => response.text())
//   .then((response) => {
//     const parser = new DOMParser()
//     const xml = parser.parseFromString(response, 'text/xml')
//     const results = [].slice.call( xml.getElementsByTagName('Key') ).filter((key) => key.textContent.includes('.json'))
//     const files = results.map(file => file.textContent.split('/')[1])})

//     fetchSenate()
//       .catch((response) => {
//       console.log(response)
// })}; 

app.get('/', function (req, res) {
    res.json(all_transactions);
    
})


app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`)
}); 