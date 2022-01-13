package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Achate;

@Repository
public interface AchateRepository extends JpaRepository<Achate, Long>{

}
