package server.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "spin_12_1")
public class Spin1 {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private double temperatura;
    private double m_a;
    private double m_b;
    private double mag_staggered;
    private double mag_total;

    public Long getId() {
        return id;
    }

    public double getTemperatura() {
        return temperatura;
    }

    public double getM_a() {
        return m_a;
    }

    public double getM_b() {
        return m_b;
    }

    public double getMag_staggered() {
        return mag_staggered;
    }

    public double getMag_total() {
        return mag_total;
    }
}
