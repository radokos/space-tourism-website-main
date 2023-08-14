import './navigation.js'          //localhost 

const response = await fetch('../data.json');
let dataJson = await response.json();
   

    // creating page html elements
dataJson.destinations.forEach(function (destination) {
    const newArticle = document.createElement("article"),
        newDiv = document.createElement("div"),
        newAside = document.createElement("aside"),
        sectionInfo = document.createElement("section"), 
        newH1 = document.createElement("h1"),
        newParagraph = document.createElement("p")
    let newList = document.createElement('ul')
    sectionInfo.insertAdjacentHTML("beforeend", `
            <div class="distance"><p>AVG. DISTANCE</p><h6> ${destination["distance"]} </h6></div>
            <div class="time"><p>EST. TRAVEL TIME</p><h6>${destination["travel"]}</h6></div>
        `);
    
    // classes,id
    newList.className = "destinationNav" 
    newArticle.className ="mainPageArticle"
    sectionInfo.className = "destinationInfo"
    newDiv.className = "destinationBox animationClass"
    newDiv.id = destination["name"]
    
    //append
    newArticle.appendChild(newList)   
    newArticle.appendChild(sectionInfo)
    newArticle.appendChild(newH1)
    newArticle.appendChild(newParagraph)   
    newDiv.appendChild(newAside)
    newDiv.appendChild(newArticle)
    
    //elements content
    
    newH1.textContent = destination["name"]
    newParagraph.textContent = destination["description"]
    newAside.style.cssText = "background: url('." + destination["images"]["png"] + "') center no-repeat; background-size: contain;"; 

    document.querySelector("section").appendChild(newDiv)
                
//creating nav links and event listener

    dataJson.destinations.forEach(element => {
        let newLi = document.createElement("li"),
            newHr = document.createElement("hr"),
            newAnchor = document.createElement("a")          
        
        newAnchor.href = "#" + element["name"];
        newAnchor.textContent = element["name"];
        
        //add link event listener
        
        newAnchor.addEventListener("click", function (event) {
        let idValue = event.target.attributes.href.textContent.slice(1)
        
        let IdElement = document.getElementById(idValue)
            IdElement.style.display="grid"
            
        let parentElem = document.getElementById(idValue).parentElement.children
        parentElem = Array.from(parentElem)

        let arrayResult = parentElem.filter(function (oneName) {
            let weFind = oneName.id != idValue
            return weFind
        })
        arrayResult.forEach(function (destination) {
        destination.style.display="none"
        })

        })
        newAnchor.appendChild(newHr)
        newLi.appendChild(newAnchor)
        newList.appendChild(newLi)
        
        // css class
        if( newAnchor.attributes.href.nodeValue == "#" + destination["name"]){
        newAnchor.className = "destinationNavActive"
        }
    });      
}) 
document.body.querySelector('.destinationBox').style.display="grid"

  
      
    