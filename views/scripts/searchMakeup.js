function on(el) {
    let div = el.parentElement.children[1];
    div.style.display = "block";
    div.style.width = "100%";
}

function off(el) {
    el.style.display = "none";
    el.style.width = "0";
}

function buildMakeupHtml(nume, imagine, taguri, descriere, link, produse) {
    let taguletse = ""
        let produsele=""
        let tag = taguri.split(",");
        let produs = produse.split(",");
        produs.pop();
        tag.pop();
        
        for(let i of tag) {
          taguletse += "<div class=\"tag\">" + i + "</div>"
        }
        for(let i of produs) {
          produsele += "<div class=\"tag\">" + i + "</div>"
        }
    let s = `<div class="col">
                            <div class="makeup-container">
                                <div class="wrap">
                                    <img class="makeup-img" onclick="on(this)" src="${imagine}">
                                    <div class="hide" id="overlay" onclick="off(this)">
                                        <h3> ${nume} </h3>
                                        <h5> Descriere </h5>
                                        <p> ${descriere} </p>
                                        <h5> Pentru mai multe detalii accesati: </h5>
                                        <a href="${link}"> ${link} </a> 
                                    </div>
                                </div>
                                <div class="details"> ${nume} </div>
                                <div class="tags">
                                      ${taguletse}
                                </div>
                                <h5> Lista produselor: </h5>   
                                <div class="product-list">${produsele}</div></div>
                            </div>
                        </div>`
    return s;

}

function filterByName() {
    let currentValue = document.getElementById("searchbar").value;
    console.log(currentValue)

    let makeups = [];

    if (currentValue != "") {
        for (let a of window.makeups) {
            if (a["name"].indexOf(currentValue) != -1) {
                makeups.push(a);
                console.log(a);
            }
        }
        showMakeups(makeups);
    } else {
        populateData();
    }
}

function filterByFilter() {

}

function showMakeups(makeups) {
    window.makeups = makeups;
    document.getElementById("makeupSection").innerHTML = "";
    for (let element of makeups) {
        var makeup = document.createElement("div");
        var tag = element["tags"] + ',';
        var produs =element["products"]+",";
        makeup.innerHTML = buildMakeupHtml(element["name"], element["image_path"], tag, element["descriere"], element["url"],produs)
        document.getElementById("makeupSection").appendChild(makeup);
    }
}

async function populateData() {

    const response = (await fetch("http://localhost:3000/api/v1/makeup/", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })).json().then((data) => showMakeups(data["makeups"]));
}