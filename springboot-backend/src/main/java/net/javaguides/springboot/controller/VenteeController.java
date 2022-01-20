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
import net.javaguides.springboot.model.Ventee;
import net.javaguides.springboot.repository.VenteeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2/")
public class VenteeController {


	@Autowired
	private VenteeRepository venteeRepository;

	// get all employees
	@GetMapping("/ventees")
	public List<Ventee> getAllVentees(){
		return venteeRepository.findAll();
	}

	// create employee rest api
	@PostMapping("/ventees")
	public Ventee createVentee(@RequestBody Ventee ventee) {
		return venteeRepository.save(ventee);
	}

	// get employee by id rest api
	@GetMapping("/ventees/{id}")
	public ResponseEntity<Ventee> getVenteeById(@PathVariable Long id) {
		Ventee ventee = venteeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ventee not exist with id :" + id));
		return ResponseEntity.ok(ventee);
	}

	// update employee rest api

	@PutMapping("/ventees/{id}")
	public ResponseEntity<Ventee> updateVentee(@PathVariable Long id, @RequestBody Ventee venteeDetails){
		Ventee ventee = venteeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ventee not exist with id :" + id));

		ventee.setDate(venteeDetails.getDate());
		ventee.setClient(venteeDetails.getClient());
		ventee.setProduite(venteeDetails.getProduite());

		Ventee updatedVentee = venteeRepository.save(ventee);
		return ResponseEntity.ok(updatedVentee);
	}

	// delete employee rest api
	@DeleteMapping("/ventees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteVentee(@PathVariable Long id){
		Ventee ventee = venteeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ventee not exist with id :" + id));

		venteeRepository.delete(ventee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


}
