var countryList = [];

fetch('https://restcountries.eu/rest/v2/all').then((res)=> {
    res.json().then((res)=>{

        showCountryList(res)    
            
    })
})



function showCountryList(data){

    var listItem = ''

    data.forEach((obj, index)=> {

        listItem += `  <div class="col-md-3">
        <div class="box">
        <img src="${obj.flag}">
        <div class="m-3">
          <b class="mb-2">${obj.name}</b><br>
          <span style="font-weight: 500;">Population: <span style="font-weight: 400;color: #7b7b7b;">${obj.population}</span></span><br>
          <span style="font-weight: 500;">Region: <span style="font-weight: 400;color: #7b7b7b;">${obj.region}</span></span><br>
          <span style="font-weight: 500;">Capital: <span style="font-weight: 400;color: #7b7b7b;">${obj.capital}</span></span><br><br>
        </div>
      </div>
      </div>`

        
    })


   document.getElementById('country-item').innerHTML = listItem;

}