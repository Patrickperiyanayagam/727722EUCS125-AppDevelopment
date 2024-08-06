package com.logistics.logistics.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.logistics.logistics.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
    
    public List<User> findByEmailAndPassword(String email,String password);

    public List<User> findByEmail(String email);

}
