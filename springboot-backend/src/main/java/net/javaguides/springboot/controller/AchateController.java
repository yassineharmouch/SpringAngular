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
import net.javaguides.springboot.model.Achate;
import net.javaguides.springboot.repository.AchateRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v6/")
public class AchateController {



	@Autowired
	private AchateRepository achateRepository;

	// get all employees
	@GetMapping("/achates")
	public List<Achate> getAllAchates(){
		return achateRepository.findAll();
	}

	// create employee rest api
	@PostMapping("/achates")
	public Achate createAchate(@RequestBody Achate achate) {
		return achateRepository.save(achate);
	}

	// get employee by id rest api
	@GetMapping("/achates/{id}")
	public ResponseEntity<Achate> getAchateeById(@PathVariable Long id) {
		Achate achate = achateRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Achate not exist with id :" + id));
		return ResponseEntity.ok(achate);
	}

	// update employee rest api

	@PutMapping("/achates/{id}")
	public ResponseEntity<Achate> updateAchate(@PathVariable Long id, @RequestBody Achate achateDetails){
		Achate achate = achateRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Achate not exist with id :" + id));

		achate.setDate(achateDetails.getDate());
		achate.setFournisseure(achateDetails.getFournisseure());


		Achate updatedAchate = achateRepository.save(achate);
		return ResponseEntity.ok(updatedAchate);
	}

	// delete employee rest api
	@DeleteMapping("/achates/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAchate(@PathVariable Long id){
		Achate achate = achateRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Achate not exist with id :" + id));

		achateRepository.delete(achate);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
