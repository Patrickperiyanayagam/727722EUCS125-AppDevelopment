package com.logistics.logistics.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TransportProvider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tproviderid;
    private String logisticsName;
    private String tprovidername;
    private String tprovideremail;
    private String tproviderpassword;

    @JsonManagedReference
    @OneToMany(mappedBy = "transportProvider")
    private List<CityVehicleDetails> cityVehicleDetails;
}
