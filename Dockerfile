FROM openjdk:latest
EXPOSE 8082
COPY target/miniapp-0.0.1-SNAPSHOT.jar miniapp-service.jar
ENTRYPOINT ["java","-jar","/miniapp-service.jar"]