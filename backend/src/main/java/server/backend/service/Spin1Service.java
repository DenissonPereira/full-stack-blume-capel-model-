package server.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.backend.entity.Spin1;
import server.backend.repository.Spin1Repository;

@Service
public class Spin1Service {
    
    @Autowired
    private Spin1Repository spin1Repository;

    public List<Spin1> getAllSpins1() {
        return spin1Repository.findAll();
    }
}
