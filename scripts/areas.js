import { getAreas } from "./database.js";
import { getAreaServices } from "./database.js";
import { getServices } from "./database.js";

areas = getAreas()
areaServices = getAreaServices()
services = getServices()

// function that receives a parameter of an area object and 
// returns an array with the id of each service offered

const servicesByArea = (area) =>{
    let filteredAreaServices = []
    for (const areaService of areaServices) {
        if(area.id === areaService.areaId){
            filteredAreaServices.push(areaService.serviceId)
        }
    }
    return filteredAreaServices
}

// function that receives a parameter of a filtered services array from the 
// servicesByArea function and returns an html string of those services

const serviceNames = (filteredServices) =>{
    let offeredServices = ``;
    for (const serviceId of filteredServices) {
        for (const service of services) {
            if(serviceId === service.id){
                offeredServices += `${service.name}`
            }
        }
    }
    return offeredServices
}

 