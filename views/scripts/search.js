
function on(el) {
let div = el.parentElement.children[1];
div.style.display = "block";
div.style.width = "100%";
}

function off(el) {
 el.style.display = "none";
 el.style.width = "0";
}

function buildProductHtml(nume, imagine, taguri, descriere, link) {
  let taguletse = ""

  let tag = taguri.split(",");
  tag.pop();
  
  for(let i of tag) {
    taguletse += "<div class=\"tag\">" + i + "</div>"
  }
  let s =  `<div class="col">
                            <div class="product-container">
                                <div class="wrap">
                                    <img class="product-img" onclick="on(this)" src="${imagine}">
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
                            </div>
                        </div>`
  return s;

}

function filterByName() {
  let currentValue = document.getElementById("searchbar").value;
  console.log(currentValue)

  let products = [];

  if (currentValue != "") {
    for(let a of window.products) {
      if( a["name"].indexOf(currentValue) != -1) {
        products.push(a);
        console.log(a);
      }
    }
    showProducts(products);
  } 
  else {
    populateData();
  }
}

function filterByFilter() {

}

function showProducts(products) {
  window.products = products;
  document.getElementById("productSection").innerHTML = "";
  for(let element of products) {
    var product = document.createElement("div");
    var tag = element["type"] + ',' + element["age"] + ',' + element["skin"] +',' + element["day"] + ',' +element["color"];
    product.innerHTML = buildProductHtml(element["name"], element["image_path"], tag, element["descriere"], element["url"])
    document.getElementById("productSection").appendChild(product);
  }
} 

async function populateData() {

  const response = (await fetch("http://localhost:3000/api/v1/products/", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })).json().then((data) => showProducts(data["products"]));
}

