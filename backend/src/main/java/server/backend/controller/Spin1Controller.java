package server.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import server.backend.entity.Spin1;
import server.backend.service.Spin1Service;

@RestController
@RequestMapping("/")
public class Spin1Controller {
    
    @Autowired
    private Spin1Service spin1Service;

    @GetMapping("/spin1")
    public ResponseEntity<List<Spin1>> getAllSpins() {
        List<Spin1> spin1 = spin1Service.getAllSpins1();
        if (spin1 != null && !spin1.isEmpty()) {
            return new ResponseEntity<>(spin1, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
