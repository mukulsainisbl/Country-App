let container = document.getElementById("container")


let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`
function ShowData(showurl){
    fetch(showurl)
   .then(function(res){
 return res.json()
   })
   .then(function(data){

    DisplayData(data.data)
   })
   .catch(function(error){
    console.log("Error" , error)
   })
}




function DisplayData(data){
    container.innerHTML = ""


    data.forEach(function(ele){

           
        let card = document.createElement("div")
        let name = document.createElement("h3")
        name.innerHTML = "Country : " +  ele.country

        let id = document.createElement("h3")
        id.innerHTML = "Sr.No :" + ele.id

        let Rank = document.createElement("h4")
        Rank.innerHTML = "Rank " + ele.Rank
        let Popolation = document.createElement("h3")
        Popolation.innerHTML = "Population : " + ele.population

        card.append(id,name,Rank,Popolation)
        container.append(card)
    
    })
}

document.getElementById("sortButton").addEventListener("click", sortCountries);

function sortCountries() {
    let sortedUrl = `${url}?sort=population&order=desc`;
    ShowData(sortedUrl);
}

ShowData(url)


