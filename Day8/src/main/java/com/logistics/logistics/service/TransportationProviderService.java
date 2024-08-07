package com.logistics.logistics.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.logistics.logistics.model.TransportProvider;
import com.logistics.logistics.repository.TransportationProviderRepo;

@Service
public class TransportationProviderService {
    
    @Autowired
    private TransportationProviderRepo transportationProviderRepo;

    public TransportProvider saveprovider(TransportProvider t){
        return transportationProviderRepo.save(t);
    }

    public TransportProvider getsingletprovider(long id){
        return transportationProviderRepo.findById(id).orElse(null);
    }

    public List<TransportProvider> getalltprovider(){
        return transportationProviderRepo.findAll();
    }
    
    public void deletetprovider(long id){
        transportationProviderRepo.deleteById(id);
    }

    public List<TransportProvider> gettproviderandpassword(String email,String password){
        return transportationProviderRepo.findByTprovideremailAndTproviderpassword(email, password);
    }

    public List<TransportProvider> gettproviderbyemail(String email){
        return transportationProviderRepo.findByTprovideremail(email);
    }
}
