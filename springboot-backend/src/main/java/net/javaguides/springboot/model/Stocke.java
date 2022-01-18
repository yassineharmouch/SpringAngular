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
	@JsonManagedReference
	@OneToMany(mappedBy = "stock")
	@Valid
	private List<Produite> produit = new ArrayList<>();



	public Stocke() {

	}



	public Stocke(long id, String name, String adresse, @Valid List<Produite> produit) {
		super();
		this.id = id;
		this.name = name;
		this.adresse = adresse;
		this.produit = produit;
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



	public List<Produite> getProduit() {
		return produit;
	}



	public void setProduit(List<Produite> produit) {
		this.produit = produit;
	}

}