package com.project.SpringBootRest.service;





import java.util.List;
import java.util.Optional;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

 

import com.project.SpringBootRest.entity.User;
import com.project.SpringBootRest.repository.UserRepository;

 

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

 

    public User saveUser(User user) {
        return userRepository.save(user);

 

    }

 

    public User updateUser(User user) {
        return userRepository.save(user);

 

    }

 


    public List<User> getAllUsers() {
        return userRepository.findAll();

 

    }

 


}


