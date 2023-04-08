const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}


const displayCountries = countries =>{
    // for(const country of countries){
    //     console.log(country.name);
    // }

    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h1>Name: ${country.name.common}</h1>
        <h4>Official Name: ${country.name.official}</h4>
        <p>Population: ${country.population}</p>
        <p>Capital: ${country.capital  ? country.capital[0] : 'No Capital'}</p>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        
        `
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetails = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country detail' , code);
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}


const displayCountryDetails = country => {
    const countryDetail = document.getElementById('country-details');
    countryDetail.innerHTML = `
    <h2>Details: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `
}

loadCountries();