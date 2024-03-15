package server.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import server.backend.entity.Spin3;
import server.backend.service.Spin3Service;

@RestController
@RequestMapping("/")
public class Spin3Controller {
    
    @Autowired
    private Spin3Service spin3Service;

    @GetMapping("/spin3")
    public ResponseEntity<List<Spin3>> getAllSpins() {
        List<Spin3> spin3 = spin3Service.getAllSpins3();
        if (spin3 != null && !spin3.isEmpty()) {
            return new ResponseEntity<>(spin3, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
