let form = document.querySelector('#form')
let button = form.querySelector('button')

form.addEventListener('click', e => e.preventDefault())

let postData = async (login, password) => {
    let url = `http://eu.httpbin.org/basic-auth/log/pass`
    let headers = new Headers()

    headers.append('Content-Type', 'text/json')
    headers.append('accept','application/json')
    headers.append('Authorization', 'Basic ' + btoa(login + ":" + password))

    let response = await fetch(url, {
        method: 'GET',
        headers,
    })
    
    if(!response.ok) {
        throw new Error(alert(`Что-то пошло не так...`))
    } 
    await response.status === 200? document.location.href = '/home' : null 
    
    .catch(err =>  console.error(err.message))
      
}
button.addEventListener('click', e => {
    let login = form.querySelector('#login').value
    let password = form.querySelector('#password').value    
    postData(login, password)
    form.reset()
})

