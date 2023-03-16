function menu(translate, langue){
    var menu = document.querySelector("#menu");
    menu.innerHTML = `
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-4">Rucar Ethan</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item"><a href="index.html?langue=${langue}" class="nav-link active" aria-current="page">${translate[langue]["menu"]["qui"]}</a></li>
                <li class="nav-item"><a href="parcours.html?langue=${langue}" class="nav-link">${translate[langue]["menu"]["parcours"]}</a></li>
                <li class="nav-item"><a href="projet_professionel.html?langue=${langue}" class="nav-link">${translate[langue]["menu"]["projet_pro"]}</a></li>
                <li class="nav-item"><a href="projets.html?langue=${langue}" class="nav-link">${translate[langue]["menu"]["projets"]}</a></li>
                <li class="nav-item"><a href="veilles.html?langue=${langue}" class="nav-link">${translate[langue]["menu"]["veille"]}</a></li>
                <li class="nav-item">
                    <select id="langue" name="langue">
                        <option value="fr">fr</option>
                        <option value="en">en</option>
                    </select>
                </li>
            </ul>
        </header>
    `;
}

function footer(translate, langue){
    var footer = document.querySelector("#footer");
    footer.innerHTML = `
        <div class="row">
            <div class="col-6 col-md-2 mb-3">
                <h5>${translate[langue]["menu"]["parcours"]}</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="parcours.html?langue=${langue}#etudes" class="nav-link p-0 text-muted">${translate[langue]["footer"]["etudes"]}</a></li>
                    <li class="nav-item mb-2"><a href="parcours.html?langue=${langue}#experiences_profesionnelles" class="nav-link p-0 text-muted">${translate[langue]["footer"]["exp_pro"]}</a></li>
                    <li class="nav-item mb-2"><a href="parcours.html?langue=${langue}#experiences_personnelles" class="nav-link p-0 text-muted">${translate[langue]["footer"]["exp_perso"]}</a></li>
                    <li class="nav-item mb-2"><a href="parcours.html?langue=${langue}#technologies" class="nav-link p-0 text-muted">${translate[langue]["footer"]["techno"]}</a></li>
                </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
                <h5>${translate[langue]["menu"]["projet_pro"]}</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="projet_professionel.html?langue=${langue}#ecole_integree" class="nav-link p-0 text-muted">${translate[langue]["footer"]["ecole_inte"]}</a></li>
                    <li class="nav-item mb-2"><a href="projet_professionel.html?langue=${langue}#metier_envisage" class="nav-link p-0 text-muted">${translate[langue]["footer"]["metier_envi"]}</a></li>
                </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
                <h5>${translate[langue]["menu"]["projets"]}</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="projets.html?langue=${langue}#netfloux" class="nav-link p-0 text-muted">Netfloux</a></li>
                    <li class="nav-item mb-2"><a href="projets.html?langue=${langue}#argus_online" class="nav-link p-0 text-muted">Argus Online</a></li>
                </ul>
            </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2023 Rucar Ethan. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
                <li class="ms-3">
                    <a class="link-dark" target="_blank" href="https://www.linkedin.com/in/ethan-rucar-ba8598235/">
                        <object data="svg/linkedin.svg" type="image/svg+xml"></object>
                    </a>
                </li>
                <li class="ms-3">
                    <a class="link-dark" target="_blank" href="https://github.com/ikigami0513">
                        <object data="svg/github.svg" type="image/svg+xml"></object>
                    </a>
                </li>
            </ul>
        </div>
    `;
}

async function getTranslate(){
    return fetch('json/translate.json')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => {
        console.error("Erreur lors du chargement du json", error);
    })
}

function index(translate, langue){
    document.querySelector("#index_content").innerHTML = translate[langue]["index"];
}

function setText(translate, langue){
    const file = window.location.pathname;
    switch(file){
        case '/index.html':
            index(translate, langue);
            break;
        default:
            break;
    }
}

async function main(){
    const urlParams = new URLSearchParams(window.location.search);
    var langue = "fr";
    if(urlParams.has('langue')){
        langue = urlParams.get('langue');
    }

    var translate;
    await getTranslate().then(data => {
        translate = data;
    });

    menu(translate, langue);
    footer(translate, langue);

    setText(translate, langue);

    var langue_select = document.querySelector("#langue");
    langue_select.value = langue;
    langue_select.addEventListener("change", function(){
        window.location.replace(window.location.pathname + "?langue=" + langue_select.value);
    });
}

window.onload = function(){
    main();
}