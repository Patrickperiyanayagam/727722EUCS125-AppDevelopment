package com.logistics.logistics.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.logistics.logistics.model.CityVehicleDetails;
import com.logistics.logistics.service.CityServiceDetialsService;





@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CityVehicleDetailsController {
    
    @Autowired
    private CityServiceDetialsService cityServiceDetialsService;

    @PostMapping("/vehicle/post")
    public CityVehicleDetails postvehicles(@RequestBody CityVehicleDetails cityVehicleDetails) {
        return cityServiceDetialsService.saveCityVehicleDetail(cityVehicleDetails);
    }
    
    @GetMapping("/vehicle/getall")
    public List<CityVehicleDetails> getallvehicles() {
        return cityServiceDetialsService.getallVehicles();
    }
    
    @GetMapping("/vehicle/getvehicleid/{id}")
    public List<CityVehicleDetails> getvehiclebyid(@PathVariable("id") long id) {
        return cityServiceDetialsService.getCityVehicleDetailsByProvider(id);
    }
    
    @GetMapping("/check/vehicleavailability/{logisticsname}/{city}/{transporttype}")
    public String getavailablevehicles(@PathVariable("logisticsname") String logisticsname,@PathVariable("city") String city,@PathVariable("transporttype") String transporttype) {
        return cityServiceDetialsService.checkVehicleAvailability(logisticsname, city, transporttype);
    }
    
}
