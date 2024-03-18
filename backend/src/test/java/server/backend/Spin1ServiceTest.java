package server.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import server.backend.entity.Spin1;
import server.backend.repository.Spin1Repository;
import server.backend.service.Spin1Service;

@ExtendWith(MockitoExtension.class)
public class Spin1ServiceTest {

    @Mock
    private Spin1Repository spin1Repository;

    @InjectMocks
    private Spin1Service spin1Service;

    @Test
    public void testGetAllSpins1() {

        List<Spin1> spins1 = new ArrayList<>();
        spins1.add(new Spin1());
        spins1.add(new Spin1());

        when(spin1Repository.findAll()).thenReturn(spins1);

        List<Spin1> result = spin1Service.getAllSpins1();

        assertEquals(spins1.size(), result.size());
    }
}
