package com.mobile.miniapp.repository;

import com.mobile.miniapp.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {
    @Query(value = "select * from vehicles", nativeQuery = true)
    List<Vehicle> getAllVehicles();
}
