package server.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.backend.entity.Spin3;
import server.backend.repository.Spin3Repository;

@Service
public class Spin3Service {
    
    @Autowired
    private Spin3Repository spin3Repository;

    public List<Spin3> getAllSpins3() {
        return spin3Repository.findAll();
    }
}
