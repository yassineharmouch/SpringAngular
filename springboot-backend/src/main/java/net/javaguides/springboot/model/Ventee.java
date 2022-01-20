package net.javaguides.springboot.model;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name = "ventees")
public class Ventee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "date")
	private String date;

	@ManyToOne
	@JoinColumn(name = "id_client", nullable = true)
	private Cliente client;

	@ManyToOne
	@JoinColumn(name = "id_produit", nullable = true)
	private Produite produite;


	public Ventee() {

	}

	public Ventee(String date, Cliente client, Produite produite) {
		this.date = date;
		this.client = client;
		this.produite = produite;
	}

	public Ventee(long id, String date, Cliente client, Produite produite) {
		this.id = id;
		this.date = date;
		this.client = client;
		this.produite = produite;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}

	public Cliente getClient() {
		return client;
	}

	public void setClient(Cliente client) {
		this.client = client;
	}

	public Produite getProduite() {
		return produite;
	}

	public void setProduite(Produite produite) {
		this.produite = produite;
	}
}
