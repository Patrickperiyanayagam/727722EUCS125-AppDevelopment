package com.logistics.logistics.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.logistics.logistics.model.Admin;
import com.logistics.logistics.repository.AdminRepository;

@Service
public class AdminService {
    
    @Autowired
    private AdminRepository adminRepository;

    public Admin saveadmin(Admin admin){
        return adminRepository.save(admin);
    }

    public Admin getsingleadmin(long id){
        return adminRepository.findById(null).orElse(null);
    }

    public List<Admin> getalladmin(){
        return adminRepository.findAll();
    }
    
    public void deleteadmin(long id){
        adminRepository.deleteById(id);
    }

    public List<Admin> getadminandpassword(String email,String password){
        return adminRepository.findByAdminEmailAndAdminPassword(email, password);
    }

    public List<Admin> getadminbyemail(String email){
        return adminRepository.findByAdminEmail(email);
    }
}
