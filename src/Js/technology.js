import './navigation.js'          //localhost 

const response = await fetch('../data.json');
let dataJson = await response.json();
   

    // creating page html elements
dataJson.technology.forEach(function (tech) {
 const newArticle = document.createElement("article"),
        newDiv = document.createElement("div"),
        newAside = document.createElement("aside"),
        newAsidePic2 = document.createElement("aside"),
        infoSection = document.createElement("section"),
        newH1 = document.createElement("h1"),
        newH5 = document.createElement("h5"),
        newParagraph = document.createElement("p")
    let newList = document.createElement('ul'),
        i = 0
 
    // classes,id
    newList.className = "techNav" 
    newArticle.className ="mainPageArticle"
    newDiv.className = "techBox animationClass"
    newH5.className = "subHeading5"
    newDiv.id = tech["name"]
    newAside.className = "asideLandscape"
    newAsidePic2.className = "asidePortrait"
    
    //append
    newArticle.appendChild(newList)   
    newArticle.appendChild(infoSection)  
    infoSection.appendChild(newH5)
    infoSection.appendChild(newH1)
    infoSection.appendChild(newParagraph)   
    newDiv.appendChild(newAsidePic2)
    newDiv.appendChild(newAside)   
    newDiv.appendChild(newArticle)
    
    //elements content
    newH5.textContent = "The terminology"
    newH1.textContent = tech["name"]
    newParagraph.textContent = tech["description"]
    newAside.style.cssText = "background: url('." + tech["images"]["landscape"] + "') center no-repeat; background-size: cover;" 
    newAsidePic2.style.cssText = "background: url('." + tech["images"]["portrait"] + "') center center no-repeat; background-size: contain;"
    document.querySelector("section").appendChild(newDiv)
                
//creating nav links and event listener
   

    dataJson.technology.forEach(element => {
        let newLi = document.createElement("li"),
            newAnchor = document.createElement("a")          
        
        newAnchor.href = "#" + element["name"];
        newAnchor.textContent = 1 + i
        i++
        
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
        arrayResult.forEach(function (tech) {
        tech.style.display="none"
        })

        })
        newLi.appendChild(newAnchor)
        newList.appendChild(newLi)
        
        // css class
        if( newAnchor.attributes.href.nodeValue == "#" + tech["name"]){
        newAnchor.className = "techNavActive"
        }
    });      
}) 
document.body.querySelector('.techBox').style.display="grid"


    