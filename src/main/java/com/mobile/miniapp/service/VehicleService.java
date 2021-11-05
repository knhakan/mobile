package com.mobile.miniapp.service;

import com.mobile.miniapp.model.Vehicle;
import com.mobile.miniapp.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VehicleService {
    @Autowired
    VehicleRepository vehicleRepository;

    /* findAllVehicles method returns list of all vehicles in db
     */
    public List<Vehicle> findAllVehicles() {
        List<Vehicle> vehicleList = vehicleRepository.getAllVehicles();
        return vehicleList;
    }
    /* saveVehicle method saves the vehicle to db
     */
    public Vehicle saveVehicle(Vehicle vehicleToBeSaved) {
        return vehicleRepository.save(vehicleToBeSaved);
    }

    /* findVehicleById method returns the vehicle in db
     */
    public Optional<Vehicle> findVehicleById(int vehicle_id) {
        return vehicleRepository.findById(vehicle_id);
    }


    /* getVehiclesByPage method returns pages with vehicles
     */
    public List<Vehicle> getVehiclesByPage(Integer pageNo, Integer pageSize) {
        PageRequest paging = PageRequest.of(pageNo, pageSize);
        Page<Vehicle> pagedResult = vehicleRepository.findAll(paging);
        if (pagedResult.hasContent()) {
            return pagedResult.getContent();
        } else {
            return new ArrayList<Vehicle>();
        }
    }

}
