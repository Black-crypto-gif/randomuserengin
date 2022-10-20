const url = 'https://randomuser.me/api/'
fetch(url)
.then(res => res.json())
.then(data => console.log(data))
