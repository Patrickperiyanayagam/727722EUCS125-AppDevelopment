package com.logistics.logistics.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.logistics.logistics.model.CityVehicleDetails;
import com.logistics.logistics.model.TransportProvider;
import com.logistics.logistics.repository.CityVehicleDetailsRepo;
import com.logistics.logistics.repository.TransportationProviderRepo;

@Service
public class CityServiceDetialsService {
    
    @Autowired
    private CityVehicleDetailsRepo cityVehicleDetailsRepo;

    @Autowired
    private TransportationProviderRepo transportationProviderRepo;

    
    @Transactional
    public void deleteProvider(Long id) {
        List<CityVehicleDetails> details = cityVehicleDetailsRepo.findAll().stream()
                .filter(detail -> detail.getTransportProvider().getTproviderid().equals(id))
                .collect(Collectors.toList());

        for (CityVehicleDetails detail : details) {
            cityVehicleDetailsRepo.delete(detail);
        }

        transportationProviderRepo.deleteById(id);
    }

    public CityVehicleDetails saveCityVehicleDetail(CityVehicleDetails detail) {
        return cityVehicleDetailsRepo.save(detail);
    }

    public List<CityVehicleDetails> getCityVehicleDetailsByProvider(Long providerId) {
        return cityVehicleDetailsRepo.findAll().stream()
                .filter(detail -> detail.getTransportProvider().getTproviderid().equals(providerId))
                .collect(Collectors.toList());
    }

    public String checkVehicleAvailability(String logisticsName, String city, String vehicleType) {
        TransportProvider provider = transportationProviderRepo.findByTprovidername(logisticsName);
        if (provider == null) {
            return "Sorry, The chosen option is currently unavailable";
        }
        
        CityVehicleDetails detail = provider.getCityVehicleDetails().stream()
                .filter(d -> d.getCity().equals(city))
                .findFirst()
                .orElse(null);

        if (detail == null) {
            return "Sorry, The chosen option is currently unavailable";
        }

        boolean available = false;
        switch (vehicleType.toLowerCase()) {
            case "small":
                available = detail.getSmallVehicles() > 0;
                break;
            case "medium":
                available = detail.getMediumVehicles() > 0;
                break;
            case "large":
                available = detail.getLargeVehicles() > 0;
                break;
            default:
                return "Sorry, The chosen option is currently unavailable";
        }

        return available ? "Selection Successful" : "Sorry, The chosen option is currently unavailable";
    }

    public List<CityVehicleDetails> getallVehicles(){
        return cityVehicleDetailsRepo.findAll();
    }

}
