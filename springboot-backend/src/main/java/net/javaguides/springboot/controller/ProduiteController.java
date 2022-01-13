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
import net.javaguides.springboot.model.Produite;
import net.javaguides.springboot.repository.ProduiteRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v4/")
public class ProduiteController {

	@Autowired
	private ProduiteRepository produiteRepository;

	// get all employees
	@GetMapping("/produites")
	public List<Produite> getAllProduites(){
		return produiteRepository.findAll();
	}


	// create employee rest api
	@PostMapping("/produites")
	public Produite createProduite(@RequestBody Produite produite) {
		return produiteRepository.save(produite);
	}

	// get employee by id rest api
	@GetMapping("/produites/{id}")
	public ResponseEntity<Produite> getProduiteById(@PathVariable Long id) {
		Produite produite = produiteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Produite not exist with id :" + id));
		return ResponseEntity.ok(produite);
	}

	// update employee rest api

	@PutMapping("/produites/{id}")
	public ResponseEntity<Produite> updateProduite(@PathVariable Long id, @RequestBody Produite produiteDetails){
		Produite produite = produiteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Produite not exist with id :" + id));

		produite.setName(produiteDetails.getName());
		produite.setCode(produiteDetails.getCode());
		produite.setPrix(produiteDetails.getPrix());
		produite.setQte(produiteDetails.getQte());


		Produite updatedProduite = produiteRepository.save(produite);
		return ResponseEntity.ok(updatedProduite);
	}

	// delete employee rest api
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteProduite(@PathVariable Long id){
		Produite produite = produiteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("produite not exist with id :" + id));

		produiteRepository.delete(produite);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
