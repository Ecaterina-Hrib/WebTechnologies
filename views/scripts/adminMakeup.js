function buildMakeupAdminHtml(nume, imagine, taguri, produse) {
  let taguletse = "";
  let produsele = "";
  let tag = taguri.split(",");
  let produs = produse.split(",");
  produs.pop();
  tag.pop();

  for (let i of tag) {
    taguletse += '<div class="tag">' + i + "</div>";
  }
  for (let i of produs) {
    produsele += '<div class="tag">' + i + "</div>";
  }
  let s = `<div class="makep">
                                  <div class="makeup-container-dim">
                                      <div class="makeup">
                                          <img class="makeup-img" src="${imagine}">
                                          <div class="makeup-name" > ${nume} </div>
                                          
                                          <div class="tag-list">
                                          ${taguletse}
                                          </div>
                                          <div class="btn">
                                            <a href="update-makeup.html">
                                            <button class="btn-update"> Update </button>
                                            </a>
                                            <button class="btn-delete"> Delete </button>
                                          </div> 
                                          <div class="list">
                                          <h5> Lista produselor: </h5>   
                                          <div class="product-list">${produsele}</div></div>
                                       </div>
                                       
                                   </div>
                              </div>`;
  return s;
}

function filterAdminByName() {
  let currentValue = document.getElementById("searchbar").value;
  console.log(currentValue);
  currentValue = currentValue.toLowerCase();
  let makeups = [];
  
  let values = currentValue.split(" ");
  makeups = window.makeups.slice();
  if (currentValue != "") {
    for (let x of values) {
      let makeupuri = [];
      for (let a of makeups) {
        let name = a["name"].toLowerCase();
        if (name.indexOf(x) != -1 && makeups.indexOf(name) === -1) {
          makeupuri.push(a);
          console.log(a);
        }
      }
      makeups = makeupuri.slice();
      
    }

    showMakeups(makeups);
  } else {
    populateData();
  }
}

function filterByFilter() {}

function showMakeups(makeups) {
  window.makeups = makeups;
  document.getElementById("makeupSectionAdmin").innerHTML = "";
  for (let element of makeups) {
    var makeup = document.createElement("div");
    var tag = element["tags"] + ","; // virgula e delimitator intre elementele array ului
    var produs = element["products"] + ",";
    makeup.innerHTML = buildMakeupAdminHtml(
      element["name"],
      element["image_path"],
      tag,
      produs
    );
    document.getElementById("makeupSectionAdmin").appendChild(makeup);
  }
}

async function populateData() {
  const response = (
    await fetch("http://localhost:3000/api/v1/makeup/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
  )
    .json()
    .then((data) => showMakeups(data["makeups"]));
}
