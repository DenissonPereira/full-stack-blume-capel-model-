package server.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import server.backend.entity.Spin1;
import server.backend.service.SpinService;

@RestController
@RequestMapping("/")
public class Spin1Controller {
    
    @Autowired
    private SpinService spinService;

    @GetMapping("/spin1")
    public ResponseEntity<List<Spin1>> getAllSpins() {
        List<Spin1> spin1s = spinService.getAllSpins();
        if (spin1s != null && !spin1s.isEmpty()) {
            return new ResponseEntity<>(spin1s, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
