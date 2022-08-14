import './css/styles.css';
import { fetchCountries } from './fetchCountries'
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
const searchBox = document.querySelector('input')
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')



const DEBOUNCE_DELAY = 300;

function renderInfo(countries) {
    let markupInfo = countries
      .map(country => {
        return `<p style = 'font-size: 35px; display:flex; text-align:inline; '><img src=${country.flags.svg} width = 50px, hight = 120px; ><b style = "margin-left: 5px";> ${country.name.official}</b></p>

                <li><p style = 'font-size: 30px'><b>Capital</b>: ${country.capital}</p></li>
              
              
                <li><p style = 'font-size: 30px'><b>Population</b>: ${country.population}</p></li>
                <li><p style = 'font-size: 30px'><b>Languages</b>: ${Object.values(country.languages)}</p></li>`;
      })
      .join("");
      countryInfo.innerHTML = markupInfo;
  }


  function renderList(countries) {
    let markupList = countries
      .map(country => {
        return `
            <li>
            <p style = 'font-size: 25px; display:flex; text-align:inline'><img src=${country.flags.svg} width = 40px, hight = 100px;><b style = "margin-left: 5px">Name</b>: ${country.name.official}</p>
              
            </li>
        `;
      })
      .join("");
      countryList.innerHTML = markupList;
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
    
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.", {width: "350px", timeout: 1500})
    
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
  }

if (countries.length <= 10 && countries.length >=2) {
        
        countryInfo.innerHTML = '';
        renderList(countries)
        

} if (countries.length === 1) {
  countryList.innerHTML = '';
  renderInfo(countries)
  
} 

    
} )
.catch(error => {
countryList.innerHTML = ''
countryInfo.innerHTML = ''
Notiflix.Notify.failure("Oops, there is no country with that name", {width: "350px", timeout: 1500})

  })

  },DEBOUNCE_DELAY)   
)




