package denisson.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Spin3 {
    
    @Id
    @GeneratedValue
    private Long id;
    private double temperatura;
    private double m_a;
    private double m_b;
    private double mag_staggered;
    private double mag_total;

    public Spin3() {
        super();
    }

    public Spin3(Long id, double temperatura, double m_a, double m_b, double mag_staggered, double mag_total) {
        this.id = id;
        this.temperatura = temperatura;
        this.m_a = m_a;
        this.m_b = m_b;
        this.mag_staggered = mag_staggered;
        this.mag_total = mag_total;
    }

    public Spin3(double temperatura, double m_a, double m_b, double mag_staggered, double mag_total) {
        this.temperatura = temperatura;
        this.m_a = m_a;
        this.m_b = m_b;
        this.mag_staggered = mag_staggered;
        this.mag_total = mag_total;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public double getTemperatura() {
        return temperatura;
    }
    public void setTemperatura(double temperatura) {
        this.temperatura = temperatura;
    }
    public double getM_a() {
        return m_a;
    }
    public void setM_a(double m_a) {
        this.m_a = m_a;
    }
    public double getM_b() {
        return m_b;
    }
    public void setM_b(double m_b) {
        this.m_b = m_b;
    }
    public double getMag_staggered() {
        return mag_staggered;
    }
    public void setMag_staggered(double mag_staggered) {
        this.mag_staggered = mag_staggered;
    }
    public double getMag_total() {
        return mag_total;
    }
    public void setMag_total(double mag_total) {
        this.mag_total = mag_total;
    }
    
}
