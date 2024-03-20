package denisson.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import denisson.backend.models.Spins;

public interface SpinsRepository extends JpaRepository<Spins, Long>{
    
}
