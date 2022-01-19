package net.javaguides.springboot.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.Valid;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "stockes")
public class Stocke {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "adresse")
	private String adresse;

	/*@OneToMany(targetEntity = Produite.class, mappedBy = "stock")
	private List<Produite> produit;*/

	public Stocke() {

	}

	public Stocke(String name, String adresse) {
		this.name = name;
		this.adresse = adresse;
	}

	public Stocke(long id, String name, String adresse) {
		this.id = id;
		this.name = name;
		this.adresse = adresse;
	}



	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	/*public List<Produite> getProduit() {
		return produit;
	}

	public void setProduit(List<Produite> produit) {
		this.produit = produit;
	}*/

}