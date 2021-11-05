package com.mobile.miniapp;

import com.mobile.miniapp.controller.VehicleController;
import com.mobile.miniapp.model.Vehicle;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
@SpringBootTest
class MiniappApplicationTests {

    @Autowired
    VehicleController vehicleController;

    int vehicle_id = 1;
    String maker = "BMW";
    String model = "X7";
    int manufacturing_year = 2019;
    String description = "wonderful car";
    double price = 200000;
    String email = "test@gmail.com";
    String url ="";

    Vehicle vehicle = new Vehicle(maker,  model,  manufacturing_year,  description,  price,  email,  url);

    @Test
    @DisplayName("Find vehicles by page")
    public void T1_findVehiclesByPage() {
        vehicleController.findNumberOfVehicles();
    }

    @Test
    @DisplayName("Find vehicle by id in db")
    public void T2_findVehiclesById() {
        vehicleController.findVehiclesById(vehicle_id);
    }

    @Test
    @DisplayName("Save a vehicle into db")
    public void T3_saveVehicle() {
        vehicleController.saveVehicle(vehicle);
    }


    @Test
    @DisplayName("Find number of vehicles in db")
    public void T4_findNumberOfVehicles() {
        vehicleController.findNumberOfVehicles();
    }
}
