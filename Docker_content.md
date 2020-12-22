# Docker & Orchestration with docker-compose

You can find the Docker image of the application [here](https://hub.docker.com/repository/docker/fuzzer/ece_devops_webapp) in Docker Hub 

This image was created using a [Dockerfile](Dockerfile) and a [.dockerignore](.dockerignore) 


You can start the application using the [docker-compose.yml](docker-compose.yml) file

## Use

#### Resources

Into the folder where you cloned this repo you can find :
- /src - the folder where the code of the web application is
- `package.json` - describes the Node.js web app and its dependencies
- `Dockerfile` - describes the previous Node.js web app as a Docker container
- `docker-compose.yaml` - describes Docker Compose configuration

#### 1. Install Docker

1. Install [Docker Desktop](https://www.docker.com/get-started) following the instructions depending on your OS.
2. Make sure your docker installation is working properly by running the following command in a terminal:
   ```
   docker run hello-world
   ```

#### 2. Pull the Docker image of the web application

1. Pull the web application image from DockerHub   
   1. Open a terminal (Cmd or Powershell for Windows)
   2. Go to the cloned repository
   3. Run the following command:
     ```
     docker pull fuzzer/ece_devops_webapp:latest
     ```
2. Build the docker container   
   1. Run the following commands
     ```
     docker build -t [NAME_OF_THE_IMAGE] .
     ```


## 3. Build and run the app with Docker Compose

**WARNING** Before following the below steps make sure that in your [configuration file](conf/default.json) DevOps_CRUD_project/conf/default.json the host is "redis-server" like that :


![Alt text](img/Conf_file.PNG?raw=true "configuration_file")


1. Docker Compose should be included in your Docker installation (on Windows and Mac at least), if not install it using the official [instructions](https://docs.docker.com/compose/install/).
2. Navigate to the clone repository
3. Start the containers with `docker-compose up`
   - Output :


   ![Alt text](img/Docker-compose.PNG?raw=true "docker-compose up")

5. Delete the containers with:
   ```
   docker-compose rm
   ```

6. To finish go back to [DevOps_CRUD_project/conf/default.json](conf/default.json) and set host to "127.0.0.1" to continue the next parts of the project 

