
async function getData (url){

    let res = await fetch(url)
    let data = await res.json()
    
    return data
}



function append(data,container){
     data =  data.meals[0]
console.log(data)
container.innerHTML = null
let videoId = data.strYoutube
    let div = document.createElement("div")
    let div2 = document.createElement("div")
    div2.innerHTML = `<iframe width="300" height="180" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


    let img = document.createElement("img")
    img.src = data.strMealThumb

    let ingredients = document.createElement("h2")
    ingredients.textContent = "Ingredients"

    let category = document.createElement("h3")
    category.textContent =  "("+data.strCategory+ ")"

    let name = document.createElement("h1")
    name.textContent  = data. strMeal 

    let i1 = document.createElement("p")
    i1.textContent = data.strMeasure1 + " "+ data.strIngredient1 ;

    let i2 = document.createElement("p")
    i2.textContent =data.strMeasure2 + " "+ data.strIngredient2

    let i3 = document.createElement("p")
    i3.textContent =data.strMeasure3 + " "+ data.strIngredient3

    let i4 = document.createElement("p")
    i4.textContent =data.strMeasure4 + " "+ data.strIngredient4

    let i5 = document.createElement("p")
    i5.textContent =data.strMeasure5 + " "+ data.strIngredient5

    let i6 = document.createElement("p")
    i6.textContent =data.strMeasure6 + " "+ data.strIngredient6

    let ins_head = document.createElement("h1")
    ins_head.textContent = "Instructions"

let instructions = document.createElement("p")
instructions.textContent = data.strInstructions

container.append(div)

div.append(name ,category,div2,img,ingredients,i1,i2,i3,i4,i5,i6,ins_head,instructions)

}


function showerror(container){
    container.innerHTML = null
    let div = document.createElement("div")
    let p = document.createElement("h1")
    p.textContent = "Invalid entry"
    let img = document.createElement("img")
    img.src = "https://c.tenor.com/c8ctkv1WWqUAAAAC/sda.gif"
    container.append(div)
    div.append(p,img)

}

function append2(data,container){
container.innerHTML = null
    data = data.categories
    console.log(data)
    data.forEach(function(e){

        let div = document.createElement("div")
        div.setAttribute("class","box")
        let image = document.createElement("img")
       
        image.src= e.strCategoryThumb
        
        let description = document.createElement("p")
        description.textContent = e.strCategoryDescription
        let category = document.createElement("h3")
        category.textContent = e.strCategory
      

console.log(e.strCategoryThumb)
div.append(category,image,description)
        container.append(div)
      
    })
}



export {getData,append,showerror,append2} 
