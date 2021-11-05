package com.mobile.miniapp.model;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "vehicles")
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int vehicle_id;
    @Column
    private String maker;
    @Column
    private String model;
    @Column
    private int manufacturing_year;
    @Column
    private String description;
    @Column
    private double price;
    @Column
    private String email;
    @Column
    private String url;

    public Vehicle() {
    }

    public Vehicle( String maker, String model, int manufacturing_year, String description, double price, String email, String url) {
        this.maker = maker;
        this.model = model;
        this.manufacturing_year = manufacturing_year;
        this.description = description;
        this.price = price;
        this.email = email;
        this.url = url;
    }

    public int getVehicle_id() {
        return vehicle_id;
    }

    public void setVehicle_id(int vehicleId) {
        this.vehicle_id = vehicleId;
    }

    public String getMaker() {
        return maker;
    }

    public void setMaker(String maker) {
        this.maker = maker;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getManufacturing_year() {
        return manufacturing_year;
    }

    public void setManufacturing_year(int manufacturingYear) {
        this.manufacturing_year = manufacturingYear;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "Vehicle{" +
                "vehicle_id=" + vehicle_id +
                ", maker='" + maker + '\'' +
                ", model='" + model + '\'' +
                ", manufacturing_year=" + manufacturing_year +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", email='" + email + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}
