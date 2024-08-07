package com.logistics.logistics.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.logistics.logistics.model.CityVehicleDetails;

public interface CityVehicleDetailsRepo extends JpaRepository<CityVehicleDetails,Long>{
    
}
