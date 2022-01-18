package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "produites")
public class Produite {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "code")
	private String code;

	@Column(name = "prix")
	private String prix;

	@Column(name = "qte")
	private String qte;
	@ManyToOne
	@JoinColumn
	private Stocke stock;

	public Produite() {

	}


	public Produite(long id, String name, String code, String prix, String qte, Stocke stock) {
		super();
		this.id = id;
		this.name = name;
		this.code = code;
		this.prix = prix;
		this.qte = qte;
		this.stock = stock;
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

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getPrix() {
		return prix;
	}

	public void setPrix(String prix) {
		this.prix = prix;
	}

	public String getQte() {
		return qte;
	}

	public void setQte(String qte) {
		this.qte = qte;
	}

	public Stocke getStock() {
		return stock;
	}

	public void setStock(Stocke stock) {
		this.stock = stock;
	}



}