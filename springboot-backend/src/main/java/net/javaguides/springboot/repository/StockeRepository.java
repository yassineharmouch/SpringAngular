package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Stocke;

@Repository
public interface StockeRepository  extends JpaRepository<Stocke, Long>{

}
