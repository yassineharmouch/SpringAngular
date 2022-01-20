package net.javaguides.springboot.model;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name = "Achates")
public class Achate {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;


	@Column(name = "date")
	private String date;

	@ManyToOne
	@JoinColumn(name = "id_fournisseur", nullable = true)
	private Fournisseure fournisseure;
	public Achate() {

	}

	public Achate(String date, Fournisseure fournisseure) {
		this.date = date;
		this.fournisseure = fournisseure;
	}

	public Achate(long id, String date, Fournisseure fournisseure) {
		this.id = id;
		this.date = date;
		this.fournisseure = fournisseure;
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

	public Fournisseure getFournisseure() {
		return fournisseure;
	}

	public void setFournisseure(Fournisseure fournisseure) {
		this.fournisseure = fournisseure;
	}
}
