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
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h1>Name: ${country.name.common}</h1>
        <h4>Official Name: ${country.name.official}</h4>
        <p>Population: ${country.population}</p>
        <p>Capital: ${country.capital  ? country.capital[0] : 'No Capital'}</p>
        
        `
        countriesContainer.appendChild(countryDiv);
    })
}


loadCountries();