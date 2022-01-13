package net.javaguides.springboot.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Achates")
public class Achate {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;



	@Column(name = "date")
	private Date date;

	public Achate() {

	}
	public Achate(long id, Date date) {
		super();
		this.id = id;
		this.date = date;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}


}
