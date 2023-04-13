function menu(translate, langue){
    var menu = document.querySelector("#menu");
    menu.innerHTML = `
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-4">Rucar Ethan</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item"><a id="index_link" href="index.html?langue=${langue}" class="nav-link">${translate[langue]["menu"]["qui"]}</a></li>
                <li class="nav-item"><a id="parcours_link" href="parcours.html?langue=${langue}" class="nav-link">${translate[langue]["menu"]["parcours"]}</a></li>
                <li class="nav-item"><a id="projet_pro_link" href="projet_professionel.html?langue=${langue}" class="nav-link">${translate[langue]["menu"]["projet_pro"]}</a></li>
                <li class="nav-item"><a id="projets_link" href="projets.html?langue=${langue}" class="nav-link">${translate[langue]["menu"]["projets"]}</a></li>
                <li class="nav-item"><a id="veilles_link" href="veilles.html?langue=${langue}" class="nav-link">${translate[langue]["menu"]["veille"]}</a></li>
                <li class="nav-item">
                    <select class="select_lang" id="langue" name="langue">
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

function parcours(translate, langue){
    //debut etudes
    document.querySelector("#etudes_title").innerHTML = translate[langue]["parcours"]["etudes"]["title"];
    //fin etudes

    //debut experiences pro
    document.querySelector("#exp_pro_title").innerHTML = translate[langue]["parcours"]["exp_pro"]["title"];
    document.querySelector("#stage_2_sio_date").innerHTML = translate[langue]["mois"]["jan"] + " - " + translate[langue]["mois"]["feb"] + " 2023";
    document.querySelector("#stage_2_sio_title").innerHTML = translate[langue]["parcours"]["exp_pro"]["stage_2_sio_title"];
    document.querySelector("#stage_2_sio_description").innerHTML = translate[langue]["parcours"]["exp_pro"]["stage_2_sio_description"];
    document.querySelector("#ikea_date").innerHTML = translate[langue]["parcours"]["exp_pro"]["depuis"] + " " + translate[langue]["mois"]["oct"] + " 2022";
    document.querySelector("#ikea_title").innerHTML = translate[langue]["parcours"]["exp_pro"]["ikea_title"];
    document.querySelector("#ikea_description").innerHTML = translate[langue]["parcours"]["exp_pro"]["ikea_description"];
    document.querySelector("#mcdo_date").innerHTML = translate[langue]["mois"]["aou"] + " 2022";
    document.querySelector("#mcdo_title").innerHTML = translate[langue]["parcours"]["exp_pro"]["mcdo_title"];
    document.querySelector("#mcdo_description").innerHTML = translate[langue]["parcours"]["exp_pro"]["mcdo_description"];
    document.querySelector("#stage_1_sio_date").innerHTML = translate[langue]["mois"]["mai"] + " - " + translate[langue]["mois"]["juin"] + " 2022";
    document.querySelector("#stage_1_sio_title").innerHTML = translate[langue]["parcours"]["exp_pro"]["stage_1_sio_title"];
    document.querySelector("#stage_1_sio_description").innerHTML = translate[langue]["parcours"]["exp_pro"]["stage_1_sio_description"];
    //fin experiences pro

    //debut experiences perso
    document.querySelector("#exp_perso_title").innerHTML = translate[langue]["parcours"]["exp_perso"]["title"];
    document.querySelector("#argus_date").innerHTML = translate[langue]["parcours"]["exp_pro"]["depuis"] + " " + translate[langue]["mois"]["jan"] + " 2023";
    document.querySelector("#argus_description").innerHTML = translate[langue]["parcours"]["exp_perso"]["argus_description"];
    document.querySelector("#stage_maths_date").innerHTML = translate[langue]["mois"]["juin"] + " 2019";
    document.querySelector("#stage_maths_title").innerHTML = translate[langue]["parcours"]["exp_perso"]["stage_maths_title"];
    document.querySelector("#stage_maths_description").innerHTML = translate[langue]["parcours"]["exp_perso"]["stage_maths_description"];
    //fin experience perso

    //debut technologie
    document.querySelector("#technologie_title").innerHTML = translate[langue]["footer"]["techno"];
    //fin technologie
}

function projet_pro(translate, langue){
    document.querySelector("#ecole_integree_title").innerHTML = translate[langue]["footer"]["ecole_inte"];
    document.querySelector("#ecole_integree_description").innerHTML = translate[langue]["projet_pro"]["ecole_integree_description"];
    document.querySelector("#metier_envi_title").innerHTML = translate[langue]["projet_pro"]["metier_envi_title"];
    document.querySelector("#metier_envi_description").innerHTML = translate[langue]["projet_pro"]["metier_envi_description"];
}

function projets(translate, langue){
    document.querySelector("#perso_projet_title").innerHTML = translate[langue]["projets"]["title"];
    document.querySelector("#perso_projet_description").innerHTML = translate[langue]["projets"]["description"];
    document.querySelector("#netfloux_description").innerHTML = translate[langue]["projets"]["netfloux_description"];
    document.querySelector("#argus_description").innerHTML = translate[langue]["projets"]["argus_description"];
    document.querySelector("#animaker_description").innerHTML = translate[langue]["projets"]["animaker_description"];
}

function setText(translate, langue){
    const file = window.location.pathname;
    const active_class = "nav-link active";
    console.log(file);
    switch(file){
        case 'portfolio':
            document.querySelector("#index_link").className = active_class;
            index(translate, langue);
            break;
        case 'portfolio/':
            document.querySelector("#index_link").className = active_class;
            index(translate, langue);
            break;
        case 'portfolio/index.html':
            document.querySelector("#index_link").className = active_class;
            index(translate, langue);
            break;
        case 'portfolio/parcours.html':
            document.querySelector("#parcours_link").className = active_class;
            parcours(translate, langue);
            break;
        case 'portfolio/projet_professionel.html':
            document.querySelector("#projet_pro_link").className = active_class;
            projet_pro(translate, langue);
            break;
        case 'portfolio/projets.html':
            document.querySelector("#projets_link").className = active_class;
            projets(translate, langue);
            break;
        case 'portfolio/veilles.html':
            document.querySelector("#veilles_link").className = active_class;
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
    setText(translate, langue);
    footer(translate, langue);

    var langue_select = document.querySelector("#langue");
    langue_select.value = langue;
    langue_select.addEventListener("change", function(){
        window.location.replace(window.location.pathname + "?langue=" + langue_select.value);
    });
}

window.onload = function(){
    main();
}
