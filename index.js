function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name : `${userName}`,
            email: `${userEmail}`
        })
    }) .then(resp => resp.json())
    .then (data => {
        document.querySelector('body').append(data.id)})
    .catch (error => {
        alert("Something is very wrong.");;
        console.log(error.message);
        document.querySelector('body').append(error.message)
    })
}