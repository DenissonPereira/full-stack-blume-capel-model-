package server.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.backend.entity.Spin2;
import server.backend.repository.Spin2Repository;

@Service
public class Spin2Service {
    
    @Autowired
    private Spin2Repository spin2Repository;

    public List<Spin2> getAllSpins2() {
        return spin2Repository.findAll();
    }
}
