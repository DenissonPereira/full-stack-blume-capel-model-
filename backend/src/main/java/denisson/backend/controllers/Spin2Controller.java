package denisson.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import denisson.backend.models.Spin2;
import denisson.backend.repository.Spin2Repository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class Spin2Controller {
    
    @Autowired
    Spin2Repository spin2Repository;

    @PostMapping("/spin2")
    public ResponseEntity<?> saveSpin(@RequestBody Spin2 spin2) {
        if (spin2 == null) {
            return ResponseEntity.badRequest().body("Sem dados!");
        }

        return ResponseEntity.ok(spin2Repository.save(spin2));
    }

    @GetMapping("spin2")
    public List<Spin2> getAllMag() {
        return spin2Repository.findAll();
    }

    @GetMapping("/spin2/{id}")
    public ResponseEntity<?> getMagById(@PathVariable Long id) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Id não encontrado!");
        }

        Optional<Spin2> optionalMag2 = spin2Repository.findById(id);
        if (optionalMag2.isPresent()) {
            return ResponseEntity.ok(optionalMag2.get());
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Spin não encontrado!");
    }
    
    @DeleteMapping("/spin2/{id}")
    public ResponseEntity<?> deleteMagById(@PathVariable Long id) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Digite um ID válido!");
        }
        
        Optional<Spin2> optionalMag2 = spin2Repository.findById(id);
        if (optionalMag2.isPresent()) {
            spin2Repository.deleteById(id);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Magnetização não encontrada");
    }

    @PutMapping("/spin2/{id}")
    public ResponseEntity<?> updateMagById(@PathVariable Long id, @RequestBody Spin2 spin1Atualizado) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Id não encontrado!");
        }

        Optional<Spin2> optionalMag2 = spin2Repository.findById(id);

        if (optionalMag2.isPresent()) {
            Spin2 spin2Existente = optionalMag2.get();

            spin2Existente.setId(spin1Atualizado.getId());
            spin2Existente.setTemperatura(spin1Atualizado.getTemperatura());
            spin2Existente.setM_a(spin1Atualizado.getM_a());
            spin2Existente.setM_b(spin1Atualizado.getM_b());
            spin2Existente.setMag_staggered(spin1Atualizado.getMag_staggered());
            spin2Existente.setMag_total(spin1Atualizado.getTemperatura());

            Spin2 spin2AtualizadoSalvo = spin2Repository.save(spin2Existente);

            return ResponseEntity.ok(spin2AtualizadoSalvo);
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Magnetização ou temperatura não encontrada!");
    }
}
