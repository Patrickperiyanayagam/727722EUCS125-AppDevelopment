package com.logistics.logistics.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.logistics.logistics.model.User;
import com.logistics.logistics.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveuser(User u){
        return userRepository.save(u);
    }

    public User getsingleuser(long id){
        return userRepository.findById(id).orElse(null);
    }

    public List<User> getalluser(){
        return userRepository.findAll();
    }
    
    public void deleteuser(long id){
        userRepository.deleteById(id);
    }

    public List<User> getuserandpassword(String email,String password){
        return userRepository.findByEmailAndPassword(email, password);
    }

    public List<User> getuserbyemail(String email){
        return userRepository.findByEmail(email);
    }
}
