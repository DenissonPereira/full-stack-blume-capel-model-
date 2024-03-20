package denisson.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Spins {
    
    @Id
    @GeneratedValue
    private Long id;
    private double valorSpin;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public double getValorSpin() {
        return valorSpin;
    }
    public void setValorSpin(double valorSpin) {
        this.valorSpin = valorSpin;
    }

}
