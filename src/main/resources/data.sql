DROP TABLE IF EXISTS vehicles;

CREATE TABLE vehicles (
  vehicle_id INT AUTO_INCREMENT  PRIMARY KEY,
  maker VARCHAR(50) NOT NULL,
  model VARCHAR(32) NOT NULL,
  manufacturing_year INT NOT NULL,
  description VARCHAR(250) NOT NULL,
  price INT NOT NULL,
  email VARCHAR(250) NOT NULL,
  url VARCHAR(65535)
  );

INSERT INTO vehicles (maker, model, manufacturing_year,description, price, email,url)
VALUES  ('BMW', 'X7','2019', 'Wonderful car, only one owner, 5000 km traveled, parked in box. Euro 6', '300000', 'michael.scott@gmail.com', 'https://www.bmw.com.tr/content/dam/bmw/common/all-models/x-series/x7/2018/Inspire/bmw-x7-inspire-radiating-presence-01.jpg');
