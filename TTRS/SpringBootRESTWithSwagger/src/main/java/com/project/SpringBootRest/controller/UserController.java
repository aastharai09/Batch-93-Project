package com.project.SpringBootRest.controller;




import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.SpringBootRest.entity.User;
import com.project.SpringBootRest.service.UserService;

//import com.project.SpringBootRest.entity.Train;
//import com.project.SpringBootRest.service.TrainService;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RequestMapping("/api")
@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/user")
	public User saveUser(@RequestBody User user) {
		return userService.saveUser(user);

	}

	@PutMapping("/user")
	public User updateUser(@RequestBody User user) {
		return userService.updateUser(user);

	}

//	@DeleteMapping("/train/{trainId}")
//	public void deleteTrain(@PathVariable int trainId) {
//		trainService.deleteTrain(trainId);
//
//	}


	@GetMapping("/user")
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}



}
