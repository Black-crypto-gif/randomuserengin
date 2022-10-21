const url = 'https://randomuser.me/api/'
fetch(url)
.then(res => res.json())
.then((data)=>{
    const InfosData = data.results[0];
    const picture = InfosData.picture.large;
    const gender = InfosData.gender;
    
})
/* "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Dominic",
        "last": "Bouchard"
      }, */
