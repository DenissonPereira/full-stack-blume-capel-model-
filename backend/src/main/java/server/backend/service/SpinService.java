package server.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.backend.entity.Spin1;
import server.backend.repository.SpinRepository;

@Service
public class SpinService {
    
    @Autowired
    private SpinRepository spinRepository;

    public List<Spin1> getAllSpins() {
        return spinRepository.findAll();
    }
}
