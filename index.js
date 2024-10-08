fetch("https://petstore3.swagger.io/api/v3/pet/10")
    .then((response) => response.json())
    .then((json) => console.log(json));