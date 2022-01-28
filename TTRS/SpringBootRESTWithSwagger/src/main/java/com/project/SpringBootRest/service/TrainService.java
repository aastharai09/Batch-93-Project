package com.project.SpringBootRest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.SpringBootRest.entity.Train;
import com.project.SpringBootRest.repository.TrainRepository;

@Service
public class TrainService {

	@Autowired
	private TrainRepository trainRepository;

	public Train saveTrain(Train train) {
		return trainRepository.save(train);

	}

	public Train updateTrain(Train train) {
		return trainRepository.save(train);

	}

	public void deleteTrain(int trainId) {
		trainRepository.deleteById(trainId);

	}
	 public Optional<Train> getTrainBySourceAndDestination(String source, String destination) {
	        // TODO Auto-generated method stub
	        return trainRepository.findTrainBySourceAndDestination(source, destination);
	    }

	public Optional<Train> getTrainById(int trainId) {
	return	trainRepository.findById(trainId);

	}

	public List<Train> getAllTrains() {
		return trainRepository.findAll();

	}

}
