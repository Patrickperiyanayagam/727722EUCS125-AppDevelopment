package com.logistics.logistics.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.logistics.logistics.model.Admin;
import com.logistics.logistics.service.AdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdminController {
    
    @Autowired
    private AdminService adminService;


    @PostMapping("/admin/post")
    public String addadmin(@RequestBody Admin admin) {
        Admin temp = admin;
        List<Admin> arr = new ArrayList<>();
        arr = adminService.getadminbyemail(temp.getAdminEmail());
        if(arr.size() > 0){
            return "exist";
        }
        else{
            adminService.saveadmin(admin);
            return "saved";
        }
    }

    @GetMapping("/admin/getbyid/{id}")
    public Admin getadmin(@PathVariable("id") long id) {
        return adminService.getsingleadmin(id);
    }
    
    @GetMapping("/admin/getalladmins")
    public List<Admin> getalladmin() {
        return adminService.getalladmin();
    }

    @GetMapping("admin/validate/{email}/{password}")
    public List<Admin> getadminbypassword(@PathVariable("email") String email,@PathVariable("password") String password) {
        return adminService.getadminandpassword(email, password);
    }

    @GetMapping("/admin/getadminbyemail/{email}")
    public List<Admin> getadminbyemail(@PathVariable("email") String email) {
        return adminService.getadminbyemail(email);
    }
    
    

    @DeleteMapping("/admin/deleteadmin/{id}")
    public void deleteadmin(@PathVariable("id") long id){
        adminService.deleteadmin(id);
    }
}
