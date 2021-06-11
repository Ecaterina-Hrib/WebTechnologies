 
      function buildMakeupAdminHtml(nume, imagine,taguri) {
        let taguletse = ""
      
        let tag = taguri.split(",");
        tag.pop();
        
        for(let i of tag) {
          taguletse += "<div class=\"tag\">" + i + "</div>"
        }
        let s =  `<div class="makep">
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
                                       </div>
                                   </div>
                              </div>`
        return s;
      
      }
      
      function filterAdminByName() {
        let currentValue = document.getElementById("searchbar").value;
        console.log(currentValue)
      
        let makeups = [];
      
        if (currentValue != "") {
          for(let a of window.makeups) {
            if( a["name"].indexOf(currentValue) != -1) {
              makeups.push(a);
              console.log(a);
            }
          }
          showMakeups(makeups);
        } 
        else {
          populateData();
        }
      }
      
      function filterByFilter() {
      
      }
      
      function showMakeups(makeups) {
        window.makeups = makeups;
        document.getElementById("makeupSectionAdmin").innerHTML = "";
        for(let element of makeups) {
          var makeup = document.createElement("div");
          var tag = element["tags"] + ',' ;// virgula e delimitator intre elementele array ului
          makeup.innerHTML = buildMakeupAdminHtml(element["name"], element["image_path"], tag)
          document.getElementById("makeupSectionAdmin").appendChild(makeup);
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
      