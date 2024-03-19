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

import denisson.backend.models.Spin1;
import denisson.backend.repository.Spin1Repository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class Spin1Controller {
    
    @Autowired
    Spin1Repository spin1Repository;

    @PostMapping("/spin1")
    public ResponseEntity<?> saveSpin(@RequestBody Spin1 spin1) {
        if (spin1 == null) {
            return ResponseEntity.badRequest().body("Sem dados!");
        }

        return ResponseEntity.ok(spin1Repository.save(spin1));
    }

    @GetMapping("spin1")
    public List<Spin1> getAllMag() {
        return spin1Repository.findAll();
    }

    @GetMapping("/spin1/{id}")
    public ResponseEntity<?> getMagById(@PathVariable Long id) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Id não encontrado!");
        }

        Optional<Spin1> optionalMag1 = spin1Repository.findById(id);
        if (optionalMag1.isPresent()) {
            return ResponseEntity.ok(optionalMag1.get());
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Spin não encontrado!");
    }
    
    @DeleteMapping("/spin1/{id}")
    public ResponseEntity<?> deleteMagById(@PathVariable Long id) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Digite um ID válido!");
        }
        
        Optional<Spin1> optionalMag1 = spin1Repository.findById(id);
        if (optionalMag1.isPresent()) {
            spin1Repository.deleteById(id);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Magnetização não encontrada");
    }

    @PutMapping("/spin1/{id}")
    public ResponseEntity<?> updateMagById(@PathVariable Long id, @RequestBody Spin1 spin1Atualizado) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Id não encontrado!");
        }

        Optional<Spin1> optionalMag1 = spin1Repository.findById(id);

        if (optionalMag1.isPresent()) {
            Spin1 spin1Existente = optionalMag1.get();

            spin1Existente.setId(spin1Atualizado.getId());
            spin1Existente.setTemperatura(spin1Atualizado.getTemperatura());
            spin1Existente.setM_a(spin1Atualizado.getM_a());
            spin1Existente.setM_b(spin1Atualizado.getM_b());
            spin1Existente.setMag_staggered(spin1Atualizado.getMag_staggered());
            spin1Existente.setMag_total(spin1Atualizado.getTemperatura());

            Spin1 spin1AtualizadoSalvo = spin1Repository.save(spin1Existente);

            return ResponseEntity.ok(spin1AtualizadoSalvo);
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Magnetização ou temperatura não encontrada!");
    }
}
