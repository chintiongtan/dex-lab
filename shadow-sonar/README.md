<div align="center">

# Shadow Sonar

This project demonstrates setting up a local SonarQube environment using Docker Compose, featuring [SonarQube Community Edition](https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/), [PostgreSQL](https://www.postgresql.org/), [Ngrok](https://ngrok.com).

Ngrok is used to expose the local SonarQube instance to the internet, enabling code quality reports from external Git repositories to be uploaded and analyzed.

[Getting Started](#getting-started) •
[References](#references)

</div>

## Getting Started

> ℹ️ **Prerequisites**
> 
> Ensure that the `NGROK_AUTHTOKEN` environment variable is set with your Ngrok authentication token.

1. Bring up the services using Docker Compose:

   ```sh
   docker-compose up -d
   ```

1. Ngrok web inspection interface is accessible at [http://localhost:4040](http://localhost:4040).

1. SonarQube is accessible at both [http://localhost:9000](http://localhost:9000) and the tunnel URL provided by Ngrok.

## References

- https://github.com/SonarSource/docker-sonarqube/blob/master/example-compose-files/sq-with-postgres/docker-compose.yml

- https://ngrok.com/docs/using-ngrok-with/docker/
