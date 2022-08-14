import './css/styles.css';
import { fetchCountries } from './fetchCountries'
import Notiflix from 'notiflix';
const searchBox = document.querySelector('input.text')
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')



const DEBOUNCE_DELAY = 300;

function renderInfo(countries) {
    const markupInfo = countries
      .map((country) => {
        return `
            <li>
                <img src${flags.svg}>
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




// const searchEngine = e => {
// const text = e.target.value.toLowerCase()
  

// }

searchBox.addEventListener('debounce', e => {
let trimmed = searchhbox.value.trim()

}


)