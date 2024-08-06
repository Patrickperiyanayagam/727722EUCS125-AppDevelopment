package com.logistics.logistics.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.logistics.logistics.model.Admin;

public interface AdminRepository extends JpaRepository<Admin,Long>{
    public List<Admin> findByAdminEmailAndAdminPassword(String adminemail,String adminpassword);

    public List<Admin> findByAdminEmail(String email);
}
