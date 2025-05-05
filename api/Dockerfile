FROM gradle:8.5.0-jdk21 AS builder
COPY . /home/gradle/project
WORKDIR /home/gradle/project
RUN gradle build --no-daemon

FROM eclipse-temurin:21-jdk AS runner
WORKDIR /app
COPY --from=builder /home/gradle/project/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]