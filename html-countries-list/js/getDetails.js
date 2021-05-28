var url_string = window.location.href
var url = new URL(url_string);
var code = url.searchParams.get("code");
var countryList = [];


fetch('https://restcountries.eu/rest/v2/callingcode/' + code ).then((res)=> {
    res.json().then((res)=>{
        res = res[0]
        var borders = res.borders;
        borderItems = '';
        borders.forEach(text => {
          borderItems += `<button class="btn btn-outline-secondary m-1"  onclick="navToCountry('${text}');">${text}</button>`
        });


        document.getElementById('viewList').innerHTML = `
        <div class="col-12 col-sm-6">
        <img class="w-100" style="height:350px;object-fit:contain;" src="${res.flag}">
        <br><br>
      </div>
      <div class="col-12 col-sm-6">
        <h2>${res.name}</h2>
        <div class="row">
          <div class="col-12 col-sm-5">
            Native Name: <span style="opacity: 0.4;">${res.nativeName}</span><br>
            Population: <span style="opacity: 0.4;">${res.population}</span><br>
            Region: <span style="opacity: 0.4;">${res.region}</span><br>
            Sub Region: <span style="opacity: 0.4;">${res.subregion}</span><br>
            Capital: <span style="opacity: 0.4;">${res.capital}</span><br><br><br>
          </div>
          <div class="col-12 col-sm-7">
            Top Level Domain: <span style="opacity: 0.4;">${res.topLevelDomain[0]}</span><br>
            Currencies: <span style="opacity: 0.4;">${res.currencies[0].name}</span><br>
            Languages: <span style="opacity: 0.4;">${res.languages[0].name}</span><br>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-4">
            Border Countries: 
          </div>
          <div class="col-12 col-sm-8">
            ${borderItems}
          </div>
        </div>
      </div>`
    })
})


fetch('https://restcountries.eu/rest/v2/all').then((res)=> {
    res.json().then((res)=>{
      countryList = res;
    })
})



function navToCountry(params) {
  let countryCode = countryList.filter((obj)=> obj.alpha3Code == params )
  countryCode = countryCode[0].callingCodes[0]
  window.location.href = 'country.html?code=' + countryCode
}