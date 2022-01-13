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
import net.javaguides.springboot.model.Fournisseure;
import net.javaguides.springboot.repository.FournisseureRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v7/")

public class FournisseureController {


	@Autowired
	private FournisseureRepository fournisseureRepository;

	// get all employees
	@GetMapping("/fournisseures")
	public List<Fournisseure> getAllFournisseures(){
		return fournisseureRepository.findAll();
	}


	// create employee rest api
	@PostMapping("/fournisseures")
	public Fournisseure createFournisseure(@RequestBody Fournisseure fournisseure) {
		return fournisseureRepository.save(fournisseure);
	}

	// get employee by id rest api
	@GetMapping("/fournisseures/{id}")
	public ResponseEntity<Fournisseure> getFournisseureById(@PathVariable Long id) {
		Fournisseure fournisseure = fournisseureRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Fournisseure not exist with id :" + id));
		return ResponseEntity.ok(fournisseure);
	}

	// update employee rest api

	@PutMapping("/fournisseures/{id}")
	public ResponseEntity<Fournisseure> updateFournisseure(@PathVariable Long id, @RequestBody Fournisseure fournisseureDetails){
		Fournisseure fournisseure = fournisseureRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Fournisseure not exist with id :" + id));

		fournisseure.setNom(fournisseureDetails.getNom());
		fournisseure.setPrenom(fournisseureDetails.getPrenom());
		fournisseure.setAdresse(fournisseureDetails.getAdresse());


		Fournisseure updatedFournisseure = fournisseureRepository.save(fournisseure);
		return ResponseEntity.ok(updatedFournisseure);
	}

	// delete employee rest api
	@DeleteMapping("/fournisseures/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteFournisseure(@PathVariable Long id){
		Fournisseure fournisseure = fournisseureRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Fournisseure not exist with id :" + id));

		fournisseureRepository.delete(fournisseure);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


}
