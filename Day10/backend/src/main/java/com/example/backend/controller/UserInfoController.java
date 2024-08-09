package com.example.backend.controller;

// import com.sample.dto.AuthRequest;
// import com.sample.dto.Product;
// import com.sample.entity.Products;
// import com.sample.entity.UserInfo;
// import com.sample.service.JwtService;
// import com.sample.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.backend.dto.AuthRequest;
import com.example.backend.model.UserInfo;
import com.example.backend.service.JwtService;
import com.example.backend.service.UserInfoService;

@RestController
@RequestMapping("/user")
public class UserInfoController {

    // @Autowired
    // private ProductService service;
    @Autowired
    private UserInfoService userInfoService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    //@PreAuthorize("hasAuthority('ROLE_USER')")
    @CrossOrigin(origins = "http://localhost:4000")
    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome this endpoint is not secure";
    }

    @CrossOrigin(origins = "http://localhost:4000")
    @PostMapping("/newuser")
    public String addNewUser(@RequestBody UserInfo userInfo) {
        // System.out.println("Request: "+ userInfo);
        return userInfoService.addUser(userInfo);
    }

    // @CrossOrigin(origins = "http://localhost:4000")
    // @PostMapping("/newproduct")
    // public Products addProducts(Product product) {
    //     return service.addProducts(product);
    // }

    // @CrossOrigin(origins = "http://localhost:4000")
    // @GetMapping("/allproducts")
    // @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    // public List<Products> getAllTheProducts() {
    //     return service.getProducts();
    // }

    // @CrossOrigin(origins = "http://localhost:4000")
    // @GetMapping("/product/{id}")
    // @PreAuthorize("hasAuthority('ROLE_USER')")
    // public Products getProductById(@PathVariable int id) {
    //     return service.getProduct(id);
    // }

    @CrossOrigin(origins = "http://localhost:4000")
    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
            System.out.println("Testing");
        if (authentication.isAuthenticated()) {
            System.out.println("Testing2");
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            System.out.println("Testing3");
            throw new UsernameNotFoundException("invalid user request !");
        }
    }

    @CrossOrigin(origins = "http://localhost:4000")
    @GetMapping("/allusers")
    public List<UserInfo> getalluUserInfos() {
        return userInfoService.getalluUserInfos();
    }

}

