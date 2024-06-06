async function getcountries() {
 const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');

 const countries =await response.json();
 return countries.data;

}




document.addEventListener('DOMContentLoaded',async ()=>{
    let countries = await getcountries()

    countries.forEach(country => {
        document.querySelector('#countriesList').innerHTML += `<li> <img src="${country.flag}" alt="${country.name}"/> <div class="data"><p>${country.name}</p><div/></li>`
        
    });
})