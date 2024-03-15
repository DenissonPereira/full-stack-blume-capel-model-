package server.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import server.backend.entity.Spin2;
import server.backend.service.Spin2Service;

@RestController
@RequestMapping("/")
public class Spin2Controller {
    
    @Autowired
    private Spin2Service spin2Service;

    @GetMapping("/spin2")
    public ResponseEntity<List<Spin2>> getAllSpins() {
        List<Spin2> spin2 = spin2Service.getAllSpins2();
        if (spin2 != null && !spin2.isEmpty()) {
            return new ResponseEntity<>(spin2, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
