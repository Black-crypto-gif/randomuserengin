const root = document.getElementById('root');
const btn = document.getElementById('btn');
// the right way is to use foreach but i'm trying to simplifies stuff to make it more understandable
const url = 'https://randomuser.me/api/'
const getData = () =>{
    fetch(url)
.then(res => res.json())
.then((data)=>{
    console.log(data);
    const InfosData = data.results[0];
    const age = InfosData.dob.age;
    const dateOfBirth = InfosData.dob.date;
    const picture = InfosData.picture.large;
    const gender = InfosData.gender;
    const title = InfosData.name.title;
    const first = InfosData.name.first;
    const last = InfosData.name.last;
    const email = InfosData.email;
    const phone = InfosData.phone;
    const locnumber = InfosData.location.street.number;
    const locname = InfosData.location.street.name;
    const city = InfosData.location.city;
    const state = InfosData.location.state;
    const country = InfosData.location.country;
    const postcode = InfosData.location.postcode;
    const latitude = InfosData.location.coordinates.latitude;
    const longitude = InfosData.location.coordinates.longitude;
    const offset = InfosData.location.timezone.offset;
    const description = InfosData.location.timezone.description;
    const username = InfosData.login.username;
    const password = InfosData.login.password;
    const uuid = InfosData.login.uuid;
    root.innerHTML = `
    <div class="row row-cols-1 row-cols-md-3 g-4 mb-4" id="myInput">
        <div class="col">
          <div class="card">
            <img src="${picture}" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title">${title} ${last} ${first}</h5>
              <p class="card-text"><i class="fa-solid fa-venus-mars"></i> ${gender}</p>
              <p class="card-text"><i class="fa-regular fa-envelope"></i> ${email}</p>
              <p class="card-text"><img src='https://countryflagsapi.com/png/${country}'width="32px"/></p>
              <p class="card-text"><i class="fa-solid fa-phone-volume"></i> ${phone}</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title m-2"><i class="fa-solid fa-globe"></i> Address Information </h5>
              <ul class="list-group">
                <li class="list-group-item"><i class="fa-solid fa-hashtag"></i> N°: ${locnumber}</li>
                <li class="list-group-item"><i class="fa-solid fa-location-crosshairs"></i> At: ${locname}</li>
                <li class="list-group-item"><i class="fa-solid fa-city"></i> City: ${city}</li>
                <li class="list-group-item"><i class="fa-solid fa-chess-rook"></i> State: ${state}</li>
                <li class="list-group-item"><img src='https://countryflagsapi.com/png/${country}'width="32px"/></li>
                <li class="list-group-item"><i class="fa-solid fa-signs-post"></i> PostCode: ${postcode}</li>
                <li class="list-group-item"><i class="fa-solid fa-location-dot"></i> Log: ${longitude}</li>
                <li class="list-group-item"><i class="fa-solid fa-location-dot"></i> Lat: ${latitude}</li>
                <li class="list-group-item"><i class="fa-solid fa-check"></i> Time Zone ${offset}</li>
                <li class="list-group-item"><i class="fa-solid fa-check"></i> Zone${description}</li>
            </ul>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card ">
            <div class="card-body">
              <h5 class="card-title"><i class="fa-solid fa-user"></i> Profile Information </h5>
              <div class="btn-group-vertical" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-dark">UUID: ${uuid}</button>
                <button type="button" class="btn btn-dark">${username}</button>
                <button type="button" class="btn btn-dark">${password}</button>
                <button type="button" class="btn btn-dark"><i class="fa-solid fa-baby-carriage"></i> Age: ${age}</button>
                <button type="button" class="btn btn-dark"><i class="fa-solid fa-cake-candles"></i> ${dateOfBirth}</button>
            </div>
            </div>
          </div>
        </div>
      </div>
      
    ` 
    swal("Generated !", `${title} ${last} ${first}`, "success");
})
} 
btn.addEventListener('click', getData);
