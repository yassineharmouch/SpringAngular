package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Stocke;
import net.javaguides.springboot.repository.StockeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v3/")
public class StockeController {
	

	@Autowired
	private StockeRepository stockeRepository;

	// get all employees
	@GetMapping("/stockes")
	public List<Stocke> getAllStockes(){
		return stockeRepository.findAll();
	}

	// create employee rest api
	@PostMapping("/stockes")
	public Stocke createStocke(@RequestBody Stocke stocke) {
		return stockeRepository.save(stocke);
	}

	// get employee by id rest api
	@GetMapping("/stockes/{id}")
	public ResponseEntity<Stocke> getStockeById(@PathVariable Long id) {
		Stocke stocke = stockeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Stocke not exist with id :" + id));
		return ResponseEntity.ok(stocke);
	}

	// update employee rest api

	@PutMapping("/stockes/{id}")
	public ResponseEntity<Stocke> updateStocke(@PathVariable Long id, @RequestBody Stocke stockeDetails){
		Stocke stocke = stockeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Stocke not exist with id :" + id));

		stocke.setName(stockeDetails.getName());
		stocke.setAdresse(stockeDetails.getAdresse());
		

		Stocke updatedStocke = stockeRepository.save(stocke);
		return ResponseEntity.ok(updatedStocke);
	}

	// delete employee rest api
	@DeleteMapping("/stockes/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteStocke(@PathVariable Long id){
		Stocke stocke = stockeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Stocke not exist with id :" + id));

		stockeRepository.delete(stocke);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


}
