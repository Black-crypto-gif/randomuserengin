const root = document.getElementById('root');
const btn = document.getElementById('btn');
const url = 'https://randomuser.me/api/'
const getData = () =>{
    fetch(url)
.then(res => res.json())
.then((data)=>{
    const InfosData = data.results[0];
    const picture = InfosData.picture.large;
    const gender = InfosData.gender;
    const title = InfosData.name.title;
    const first = InfosData.name.first;
    const last = InfosData.name.last;
    const email = InfosData.email;
    const cell = InfosData.cell;
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
    const md5 = InfosData.login.md5;
    root.innerHTML = `
    <div class="card">
    <img  src="${picture}" alt="John" style="width:100%">
    <h1 class="profile">${title} ${first} ${last}</h1>
    <p class="gender"><i class="fa-solid fa-venus-mars"></i> ${gender}</p>
    <p class="email">${email}</p>
    <p class="cell">${phone}</p>
</div>
<div class="infos-card">
    <div class="secondary-card">
        <i class="fa-solid fa-house-user"></i>
        <h3>Address Information</h3>
        <span class='plaque'>${locnumber}</span>
        <span class='plaque'>${locname}</span>
        <span class='plaque'>City: ${city}</span>
        <span class='plaque'>State: ${state}</span>
        <span class='plaque'>Country: ${country}</span>
        <span class='plaque'>Zip Code: ${postcode}</span>
        <span class='plaque'>Longitude: ${longitude}</span>
        <span class='plaque'>Latitude: ${latitude}</span>
        <span class='plaque'>Offest : ${offset} H</span>
        <span class='plaque'>${description}</span>
    </div>
    <div class="card">
        <i class="fa-regular fa-envelope"></i>
        <h3>Account Information</h3>
        <span class='plaque'>UserName: ${username}</span>
        <span class='plaque'>Password: ${password}</span>
    </div>
</div>
    ` 
    swal("Generated !", `${title} ${last} ${first}`, "success");
})
} 
btn.addEventListener('click', getData);