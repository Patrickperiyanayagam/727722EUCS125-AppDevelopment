package com.logistics.logistics.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.logistics.logistics.model.TransportProvider;
import com.logistics.logistics.service.TransportationProviderService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TproviderController {
    @Autowired
    private TransportationProviderService transportationProviderService;


    @PostMapping("/tprovider/post")
    public String addtprovider(@RequestBody TransportProvider tProvider) {
        TransportProvider temp = tProvider;
        List<TransportProvider> arr = new ArrayList<>();
        arr = transportationProviderService.gettproviderbyemail(temp.getTprovideremail());
        if(arr.size() > 0){
            return "exist";
        }
        else{
            transportationProviderService.saveprovider(tProvider);
            return "saved";
        }
    }

    @GetMapping("/tprovider/getbyid/{id}")
    public TransportProvider gettprovider(@PathVariable("id") int id) {
        return transportationProviderService.getsingletprovider(id);
    }
    
    @GetMapping("/tprovider/getallprovider")
    public List<TransportProvider> getallprovider() {
        return transportationProviderService.getalltprovider();
    }

    @GetMapping("tprovider/validate/{email}/{password}")
    public List<TransportProvider> getproviderbypassword(@PathVariable("email") String email,@PathVariable("password") String password) {
        return transportationProviderService.gettproviderandpassword(email, password);
    }

    @GetMapping("/tprovider/getproviderbyemail/{email}")
    public List<TransportProvider> getproviderbyemail(@PathVariable("email") String email) {
        return transportationProviderService.gettproviderbyemail(email);
    }
    
    

    @DeleteMapping("/tprovider/deleteprovider/{id}")
    public void deleteprovider(@PathVariable("id") int id){
        transportationProviderService.deletetprovider(id);
    }

    @GetMapping("/tprovider/findbycities/{fromCity}/{toCity}")
    public List<String> getProvidersByCities(@PathVariable("fromCity") String fromCity,@PathVariable("toCity") String toCity) {
        List<TransportProvider> allProviders = transportationProviderService.getalltprovider();
        return allProviders.stream()
                .filter(provider -> provider.getCityVehicleDetails().stream()
                        .anyMatch(detail -> detail.getCity().equals(fromCity)) &&
                        provider.getCityVehicleDetails().stream()
                        .anyMatch(detail -> detail.getCity().equals(toCity)))
                .map(TransportProvider::getLogisticsName)
                .collect(Collectors.toList());
    }
}
