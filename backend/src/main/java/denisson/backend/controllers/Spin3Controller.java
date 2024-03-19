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

import denisson.backend.models.Spin3;
import denisson.backend.repository.Spin3Repository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class Spin3Controller {
    
    @Autowired
    Spin3Repository spin3Repository;

    @PostMapping("/spin3")
    public ResponseEntity<?> saveSpin(@RequestBody Spin3 spin3) {
        if (spin3 == null) {
            return ResponseEntity.badRequest().body("Sem dados!");
        }

        return ResponseEntity.ok(spin3Repository.save(spin3));
    }

    @GetMapping("spin3")
    public List<Spin3> getAllMag() {
        return spin3Repository.findAll();
    }

    @GetMapping("/spin3/{id}")
    public ResponseEntity<?> getMagById(@PathVariable Long id) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Id não encontrado!");
        }

        Optional<Spin3> optionalMag3 = spin3Repository.findById(id);
        if (optionalMag3.isPresent()) {
            return ResponseEntity.ok(optionalMag3.get());
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Spin não encontrado!");
    }
    
    @DeleteMapping("/spin3/{id}")
    public ResponseEntity<?> deleteMagById(@PathVariable Long id) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Digite um ID válido!");
        }
        
        Optional<Spin3> optionalMag3 = spin3Repository.findById(id);
        if (optionalMag3.isPresent()) {
            spin3Repository.deleteById(id);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Magnetização não encontrada");
    }

    @PutMapping("/spin3/{id}")
    public ResponseEntity<?> updateMagById(@PathVariable Long id, @RequestBody Spin3 spin3Atualizado) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Id não encontrado!");
        }

        Optional<Spin3> optionalMag3 = spin3Repository.findById(id);

        if (optionalMag3.isPresent()) {
            Spin3 spin3Existente = optionalMag3.get();

            spin3Existente.setId(spin3Atualizado.getId());
            spin3Existente.setTemperatura(spin3Atualizado.getTemperatura());
            spin3Existente.setM_a(spin3Atualizado.getM_a());
            spin3Existente.setM_b(spin3Atualizado.getM_b());
            spin3Existente.setMag_staggered(spin3Atualizado.getMag_staggered());
            spin3Existente.setMag_total(spin3Atualizado.getTemperatura());

            Spin3 spin3AtualizadoSalvo = spin3Repository.save(spin3Existente);

            return ResponseEntity.ok(spin3AtualizadoSalvo);
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Magnetização ou temperatura não encontrada!");
    }
}
