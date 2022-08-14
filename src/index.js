import './css/styles.css';
import { fetchCountries } from './fetchCountries'
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
const searchBox = document.querySelector('input')
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')



const DEBOUNCE_DELAY = 300;

function renderInfo(countries) {
    const markupInfo = countries
      .map((country) => {
        return `<p><img src${flags.svg}></p>
            <li>
              
              <p><b>Capital</b>: ${country.capital}</p>
              <p><b>Population</b>: ${country.population}</p>
              <p><b>Languages</b>: ${country.languages}</p>
            </li>
        `;
      })
      .join("");
    userList.innerHTML = markupInfo;
  }


  function renderList(countries) {
    const markupList = countries
      .map((country) => {
        return `
            <li>
              <img src${flags.svg}><p><b>Name</b>: ${user.name}</p>
              
            </li>
        `;
      })
      .join("");
    userList.innerHTML = markupList;
  }






searchBox.addEventListener('input', debounce(e => {
let trimmed = searchBox.value.trim() 
    if (trimmed === '')  {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
        return;
}
return fetchCountries(trimmed) 
.then(countries => { 
  if (countries.length > 10) {
    
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
    
  }

if (countries.length <= 10 && countries.length >=2) {

        renderList(countries)
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';

} if (countries.length === 1) {

  renderInfo(countries)
  countryInfo.innerHTML = '';
} 

    
} )
.catch(error => {
countryList.innerHTML = ''
countryInfo.innerHTML = ''
Notiflix.Notify.failure("Oops, there is no country with that name")
  })

  },DEBOUNCE_DELAY)   
)




