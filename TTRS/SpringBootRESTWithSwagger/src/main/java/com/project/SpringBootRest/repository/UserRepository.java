package com.project.SpringBootRest.repository;





import java.util.List;

 

import com.project.SpringBootRest.entity.User;

 

//import java.util.Optional;
//
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

 


@Repository
public interface UserRepository extends JpaRepository<User, Double> {

 


    }


