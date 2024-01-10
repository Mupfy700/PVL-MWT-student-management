# Build stage: JDK 17 base image with Maven installed
FROM eclipse-temurin:17-jdk AS build

# Install Maven
RUN apt-get update && \
    apt-get install -y maven

# Set the working directory for the build
WORKDIR /home/app

# Copy the project files into the container
COPY src /home/app/src
COPY pom.xml /home/app

# Build the project and package the application
RUN mvn clean package -DskipTests

# Runtime stage: Eclipse Temurin JDK 17 for running the application
FROM eclipse-temurin:17-jdk

# Set the working directory in the container
WORKDIR /app

# Copy the built jar file from the build stage into this new stage
COPY --from=build /home/app/target/*.jar /app/app.jar

# Expose the port that the Spring Boot application uses
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "/app/app.jar"]
