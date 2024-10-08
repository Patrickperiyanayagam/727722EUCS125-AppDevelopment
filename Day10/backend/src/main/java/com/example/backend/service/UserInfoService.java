package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.model.Client;
import com.example.backend.model.TransportProvider;
import com.example.backend.model.UserInfo;
import com.example.backend.repository.ClientRepository;
import com.example.backend.repository.TransportProviderRepository;
import com.example.backend.repository.UserInfoRepository;

@Service
public class UserInfoService {

    // @Autowired
    // private ProductRepository productRepository;

    @Autowired
    private UserInfoRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private TransportProviderRepository providerRepository;

    

    // public Products addProducts(Product product) {
    //     Products products = new Products();
    //     products.setName(product.getName());
    //     products.setPrice(product.getPrice());
    //     products.setQty(product.getQty());
    //     productRepository.save(products);
    //     return products;
    // }

    // public List<Products> getProducts() {
    //     return productRepository.findAll();
    // }

    // public Products getProduct(int id) {
    //     return productRepository.findById(id).get();
    // }

    public String addUser(UserInfo userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        repository.save(userInfo);
        if (userInfo.getRoles().equals("ROLE_CLIENT")) {
            Client client = new Client();
            client.setCompanyName(userInfo.getName());
            client.setEmail(userInfo.getEmail());
            client.setPassword(userInfo.getPassword());
            clientRepository.save(client);
        } else if (userInfo.getRoles().equals("ROLE_PROVIDER")) {
            TransportProvider provider = new TransportProvider();
            provider.setLogisticsName(userInfo.getName());
            provider.setEmail(userInfo.getEmail());
            provider.setPassword(userInfo.getPassword());
            providerRepository.save(provider);
        }
        return "user added to system ";
    }

    public List<UserInfo> getalluUserInfos() {
        return repository.findAll();
    }
}

