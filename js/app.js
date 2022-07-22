const container = document.querySelector("#col-container-cards");

const urlBase = "https://goldfish-app-oewvc.ondigitalocean.app/api/v1";

let arrEventos = [];

// esta función es anonima sin nombre tipo flecha, se autollama ella misma.
(async () => {

    let request = await fetch(urlBase + "/event");
    let response = await request.json();

    arrEventos = response.events

    for (let event of arrEventos) {

        container.innerHTML += `
            <div class="col col-md-3 mb-3 animate__animated animate__backInUp d-flex justify-content-center " >
                <div class="card shadow" style="width: 18rem; ">
                    <img src="${event.image_url}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                    <div class="row mx-2">
                        <button href="#" class="btn btn-primary col-5">ADQUIRIR</button>
                        <small class="col-7" > Fecha: ${event.date}</small>
                    </div>
                    </div>
                </div>
            </div>  
        `
    }

})()




