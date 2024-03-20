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

import denisson.backend.models.Spins;
import denisson.backend.repository.SpinsRepository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class SpinsController {
    
    @Autowired
    SpinsRepository spinsRepository;

    @PostMapping("/spins")
    public ResponseEntity<?> saveSpin(@RequestBody Spins spins) {
        if (spins == null) {
            return ResponseEntity.badRequest().body("Sem dados!");
        }

        return ResponseEntity.ok(spinsRepository.save(spins));
    }

    @GetMapping("/spins")
    public List<Spins> getAllSpins() {
        return spinsRepository.findAll();
    }

    @GetMapping("/spins/{id}")
    public ResponseEntity<?> getSpinsById(@PathVariable Long id) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Id não encontrado!");
        }

        Optional<Spins> optionalSpins = spinsRepository.findById(id);
        if (optionalSpins.isPresent()) {
            return ResponseEntity.ok(optionalSpins.get());
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Spin não encontrado!");
    }

    @DeleteMapping("/spins/{id}")
    public ResponseEntity<?> deleteSpinById(@PathVariable Long id) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Digite um ID válido!");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Spin não encontrado!");
    }

    @PutMapping("/spins/{id}")
    public ResponseEntity<?> updateSpinById(@PathVariable Long id, @RequestBody Spins spinAtualizado) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Id não encontrado!");
        }

        Optional<Spins> optionalSpin = spinsRepository.findById(id);

        if (optionalSpin.isPresent()) {
            Spins spinExistente = optionalSpin.get();

            spinExistente.setId(spinAtualizado.getId());
            spinExistente.setValorSpin(spinAtualizado.getValorSpin());

            Spins spinAtualizadoSalvo = spinsRepository.save(spinExistente);

            return ResponseEntity.ok(spinAtualizadoSalvo);
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id ou spin não encontrado!");
    }
}
