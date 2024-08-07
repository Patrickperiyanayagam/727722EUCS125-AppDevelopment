package com.logistics.logistics.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.logistics.logistics.model.TransportProvider;

public interface TransportationProviderRepo extends JpaRepository<TransportProvider,Long>{
    
    public List<TransportProvider> findByTprovideremailAndTproviderpassword(String tprovideremail,String tproviderpassword);

    public List<TransportProvider> findByTprovideremail(String tprovideremail);

    public TransportProvider findByTprovidername(String tprovidername);
}
