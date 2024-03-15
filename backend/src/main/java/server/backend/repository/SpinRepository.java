package server.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import server.backend.entity.Spin1;

public interface SpinRepository extends JpaRepository<Spin1, Long>{    
}