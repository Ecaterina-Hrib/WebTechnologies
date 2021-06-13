
    
    function buildProductAdminHtml(nume, imagine,taguri) {
      let taguletse = ""
    
      let tag = taguri.split(",");
      tag.pop();
      
      for(let i of tag) {
        taguletse += "<div class=\"tag\">" + i + "</div>"
      }
      let s =  `<div class="prod">
                                <div class="product-container-dim">
                                    <div class="product">
                                        <img class="product-img" src="${imagine}">
                                        <div class="product-name" > ${nume} </div>
                                        
                                        <div class="tag-list">
                                        ${taguletse}
                                        </div>
                                        <div class="btn">
                                          <a href="update-product.html">
                                          <button  class="btn-update"> Update </button>
                                          </a>
                                          <button type="button" onclick="deletingProduct()" class="btn-delete"> Delete </button>
                                          
                                        </div>       
                                     </div>
                                 </div>
                            </div>`
      return s;
    
    }
    

    function filterAdminByName() {
      let currentValue = document.getElementById("searchbar").value;
      console.log(currentValue);
      currentValue = currentValue.toLowerCase();
      let products = [];
      
      let values = currentValue.split(" ");
      products = window.products.slice();
      if (currentValue != "") {
        for (let x of values) {
          let produse = [];
          for (let a of products) {
            let name = a["name"].toLowerCase();
            if (name.indexOf(x) != -1 && products.indexOf(name) === -1) {
              produse.push(a);
              console.log(a);
            }
          }
          products = produse.slice();
          
        }
    
        showProducts(products);
      } else {
        populateData();
      }
    }
    
    function filterByFilter() {
    
    }
    
    function showProducts(products) {
      window.products = products;
      document.getElementById("productSectionAdmin").innerHTML = "";
      for(let element of products) {
        var product = document.createElement("div");
        var tag = element["tags"] + ',' ;// virgula e delimitator intre elementele array ului
        product.innerHTML = buildProductAdminHtml(element["name"], element["image_path"], tag)
        document.getElementById("productSectionAdmin").appendChild(product);
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

    async function deletingProduct(){

      const response = (await fetch("http://localhost:3000/api/v1/products/delete", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })).json().then(() => window.location.href = "http://localhost:3000/admin-products.html");
      
    }