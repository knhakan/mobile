# Mobile.de mini application  

A simple repository to implement a mini application for Mobile.de.   
The project contains both Backend written in Java/Spring Boot and frontend written in ReactJs.  The directory *secretescapes-webapp* contains the frontend component.  
For database, one in-memory database, H2, have been used.

I have used:    
Java 11  
Node 12.18.3  
H2 database  
ReactJS 17.0.2     


## Getting started
To run this app locally, you will need to :

Be able to run this repository.  

  
### Modifying baseURL  

The snippet to change BaseURL is placed in *index.js* under src.   
`axios.defaults.baseURL = "http://localhost:8082/"`

### Application Installation in Docker
The application can run as a Docker container.  
  
To run the application in docker, one must install Docker first. After the installation of Docker, install jar file of the application, 
as `miniapp-0.0.1-SNAPSHOT.jar`, (Maven can be used to install it) and place it under target folder (target folder is placed in root 
directory of the project). Precisement both in naming and in path selection is important since the Dockerfile 
contains `COPY target/miniapp-0.0.1-SNAPSHOT.jar miniapp-service.jar` command. If the user wants to customise naming or path, 
he/she should simply change the paths and the namings as desired in this command, as well.  

## Setting up Frontend

You must have node installed in your system. Go to directory *mobile-webapp* and run the code
  `npm install`  

Once the installation is completed, run
 `npm start` 
The application will be up in localhost:3000
