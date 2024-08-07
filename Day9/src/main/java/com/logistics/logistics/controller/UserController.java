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

import com.logistics.logistics.model.User;
import com.logistics.logistics.service.UserService;





@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user/post")
    public String addUser(@RequestBody User user) {
        User temp = user;
        List<User> arr = new ArrayList<>();
        arr = userService.getuserbyemail(temp.getEmail());
        if(arr.size() > 0){
            return "exist";
        }
        else{
            userService.saveuser(user);
            return "saved";
        }
    }

    @GetMapping("/user/getbyid/{id}")
    public User getUser(@PathVariable("id") long id) {
        return userService.getsingleuser(id);
    }
    
    @GetMapping("/user/getallusers")
    public List<User> getalluser() {
        return userService.getalluser();
    }

    @GetMapping("user/validate/{email}/{password}")
    public List<User> getuserbypassword(@PathVariable("email") String email,@PathVariable("password") String password) {
        return userService.getuserandpassword(email, password);
    }

    @GetMapping("/user/getuserbyemail/{email}")
    public List<User> getuserbyemail(@PathVariable("email") String email) {
        return userService.getuserbyemail(email);
    }
    
    

    @DeleteMapping("/user/deleteuser/{id}")
    public void deleteuser(@PathVariable("id") long id){
        userService.deleteuser(id);
    }
    
    
    
}
