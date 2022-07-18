const container = document.querySelector("#container-cards");

const urlBase = "https://goldfish-app-oewvc.ondigitalocean.app/api/v1";

let arrEventos = [1];

// esta función se autollama ella misma.
(async function obtenerTodosLosEventos() {

    let request = await fetch(urlBase + "/events");
    let response = await request.json();

    arrEventos = response.users
})()


for (const event in arrEventos) {

    container.innerHTML += `
    
        <div class="card">
            <img src="${event.img}" alt="evento img">

            <h3>${event.name}</h3>
            <p class="texto-card">${event.desc} </p>

            <p class="fecha">FECHA: ${event.date}</p>
            <a href="#" class="btn-adquirir">ADQUIRIR</a>
        </div>
    
    `
}



class Usuario {

    firstname
    lastname
    email
    phone
    birthday
    password
    created_at
    updated_at

    constructor(firstname, lastname, email, phone, birthday, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.birthday = birthday;
        this.password = password;
        this.created_at = new Date();
        this.updated_at = new Date();

    }
}


async function crearUsuario() {

    let x = new Usuario();

    options = {
        method: "POST",
        body: JSON.stringify(usuario)
    }

    let request = await fetch(urlBase + "/user", options);
    let response = await request.json();

    console.log(response);
}











