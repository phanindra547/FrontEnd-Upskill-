//http://api.weatherapi.com/v1/current.json?key=25eb53aab2e2439597275504242708&q=Mumbai&aqi=no


const temperatureField=document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimeField = document.querySelector(".time_location span");
const ConditionField =document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector('form');




form.addEventListener('submit',searchForLocation)




let target=`Hyderabad`

const fetchResults= async (targetlocation) =>{
    let url=`http://api.weatherapi.com/v1/current.json?key=25eb53aab2e2439597275504242708&q=${targetlocation}&aqi=no`

    const res= await fetch(url)
    const data = await res.json()

    console.log(data)

    let locationName = data.location.name
    let time=data.location.localtime
    let temp=data.current.temp_c
    let condition = data.current.condition.text
    updateDetails(temp,locationName,time,condition)
}
function updateDetails(temp,locationName,time,condition){
    temperatureField.innerText = temp
    locationField.innerText = locationName
    dateandTimeField.innerText=time
    ConditionField.innerText=condition



}

function searchForLocation(e){
    e.preventDefault()
    target=searchField.value
    fetchResults(target)
}
fetchResults(target)