package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "produits")
public class Produit {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "name")
	private String Name;

	@Column(name = "qte")
	private String Qte;

	@Column(name = "prix")
	private String Prix;

	public Produit() {

	}

	public Produit(String Name, String Qte, String Prix) {
		super();
		this.Name = Name;
		this.Qte = Qte;
		this.Prix = Prix;
		
		
}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getQte() {
		return Qte;
	}

	public void setQte(String qte) {
		Qte = qte;
	}

	public String getPrix() {
		return Prix;
	}

	public void setPrix(String prix) {
		Prix = prix;
	}
}
