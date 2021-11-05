package com.mobile.miniapp.controller;

import com.mobile.miniapp.model.Vehicle;
import com.mobile.miniapp.repository.VehicleRepository;
import com.mobile.miniapp.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class VehicleController {
    @Autowired
    private VehicleService vehicleService;
    @Autowired
    VehicleRepository vehicleRepository;



    @GetMapping("/vehicle/{vehicle_id}")
    public ResponseEntity<Optional<Vehicle>> findVehiclesById(@PathVariable int vehicle_id) {
        Optional<Vehicle> vehicle = vehicleService.findVehicleById(vehicle_id);
        return new ResponseEntity<Optional<Vehicle>>(vehicle, HttpStatus.OK);
    }

    @PostMapping(value = "/save", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public void saveVehicle(@RequestBody Vehicle vehicle)  {
        vehicleService.saveVehicle(vehicle);
    }

    /* getAllVehicles method
     * returns the pages of vehicles existing in db
     * pageNo is the number of page and pageSize is the number of vehicles displayed per page
     */
    @GetMapping("/vehicles")
    public ResponseEntity<List<Vehicle>> getAllVehicles(
            @RequestParam(defaultValue = "1") Integer pageNo,
            @RequestParam(defaultValue = "5") Integer pageSize)
    {
        List<Vehicle> list = vehicleService.getVehiclesByPage(pageNo, pageSize);
        return new ResponseEntity<List<Vehicle>>(list, new HttpHeaders(), HttpStatus.OK);
    }

    /* findNumberOfVehicles method
     * returns the number of vehicles in db
     */
    @GetMapping("/numberofvehicles")
    public ResponseEntity<Integer> findNumberOfVehicles() {
        List<Vehicle> vehicles = vehicleService.findAllVehicles();
        Integer number = vehicles.size();
        return new ResponseEntity<Integer>(number, HttpStatus.OK);
    }
}
