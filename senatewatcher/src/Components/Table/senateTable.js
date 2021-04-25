const { default: axios } = require("axios");

const api = 'http://localhost:4000';

async function getSenators(api) {
    const response = await axios.get(`${api}`);
    let data = await response.json();
    console.log(data);

    if (response) {
        showloader();
    } else {
    show(data)
    }
}; 

getSenators(api);

function showloader() {
    let spinner = document.getElementById('loading');
    console.log("loading senate stock data")
    spinner.style.display = 'block';
}

function show(data) {
    let table = 
        `<tr>
          <th>Senator</th>
          <th>Asset</th>
          <th>Amount</th>
          <th>Date</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        table += 
        `<tr> 
        <td>${r[2].senator} </td>
        <td>${r.asset_description}</td>
        <td>${r.amount}</td> 
        <td>${r.transaction_date}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById('senators').innerHTML = table;
}

