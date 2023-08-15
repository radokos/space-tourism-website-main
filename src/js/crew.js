  
/*
const response = await fetch('../data.json');
let dataJson = await response.json();
*/
let dataJson                                      
  
fetch('../data.json')
    .then(res => res.json())
    .then(function data (out){
       dataJson = out
        // creating page html elements
        dataJson.crew.forEach(function (person) {
            const newArticle = document.createElement("article"),
                newDiv = document.createElement("div"),
                newAside = document.createElement("aside"),
                newH5 = document.createElement("h5"),
                newH1 = document.createElement("h1"),
                newParagraph = document.createElement("p")
            let newList = document.createElement('ul')

            // classes,id
            newList.className = "crewNav"
            newArticle.className = "mainPageArticle"
            newH5.className = "subHeading5"
            newDiv.className = "crewBox animationClass"
            newDiv.id = person["name"]

            //append
            newArticle.appendChild(newList)
            newArticle.appendChild(newH5)
            newArticle.appendChild(newH1)
            newArticle.appendChild(newParagraph)
            newDiv.appendChild(newAside)
            newDiv.appendChild(newArticle)

            //elements content
            newH5.textContent = person["role"];
            newH1.textContent = person["name"]
            newParagraph.textContent = person["bio"]
            newAside.style.cssText = "background: url('." + person["images"]["png"] + "') center no-repeat; background-size: contain;";

            document.querySelector("section").appendChild(newDiv)

            //creating crew dots links and event listener

            dataJson.crew.forEach(element => {
                let newLi = document.createElement("li"),
                    newAnchor = document.createElement("a")

                newAnchor.href = "#" + element["name"];

                //add link event listener

                newAnchor.addEventListener("click", function (event) {
                    let idValue = event.target.attributes.href.textContent.slice(1)

                    let IdElement = document.getElementById(idValue)
                    IdElement.style.display = "grid"

                    let parentElem = document.getElementById(idValue).parentElement.children
                    parentElem = Array.from(parentElem)

                    let arrayResult = parentElem.filter(function (oneName) {
                        let weFind = oneName.id != idValue
                        return weFind
                    })
                    arrayResult.forEach(function (person) {
                        person.style.display = "none"
                    })

                })
                newLi.appendChild(newAnchor)
                newList.appendChild(newLi)

                // css class
                if (newAnchor.attributes.href.nodeValue == "#" + person["name"]) {
                    newAnchor.className = "crewNavActive"
                }
            });
        })
        document.body.querySelector('.crewBox').style.display = "grid" 
    } );



  
      
    