# DevOps Project

This GitHub repository was created by Amine TSOULI student in ECE Paris Engineer School.

It show the use of the differents step of the DevOps by the development of a web application that interact with a redis database (Create, Read, Update, Delete).

## Installation

To clone the repository :

1. Open Git Bash.
2. Change the current working directory to the location where you want the cloned directory.
3. Type ```git clone``` and paste the URL of the repo :

```bash
git clone https://github.com/AmineTs/DevOps_CRUD_project
```

## Usage

Installation and Results of each part :

1. [Web application](src/content.md)
2. [Continuous integration and delivery (CI/CD)](CI_CD_content.md)
3. [Infrastructure as Code (IaC)](iac/content.md)
4. [Docker & Orchestration with docker-compose](Docker_content.md)
5. [Container orchestration with Kubernetes](k8s/content.md)
6. [Service mesh using Istio](istio/content.md)


## Description
#### Web Application

Web application with **CRUD user fonctionnality** created with **NodeJs** that store data in a **Redis database**.

This web application is **covered with tests** of differents levels :
- Configuration file
- Redis database connection
- Creation of a new user
- Get user
- Update user
- Delete user
- All the routes related to different requests

![Alt text](img/Tests.png?raw=true "Tests")
![Alt text](img/Webapp_screen.PNG?raw=true "webapp")

#### CI/CD Pipeline

The web application is using Travis CI as Continuous Integration platform ( [link](https://travis-ci.com/github/AmineTs/DevOps_CRUD_project) ) and Heroku as Continuous Deployment platform ( [link](https://dashboard.heroku.com/apps/devops-amine-webapp/access) ) 

#### Infrastructure as Code

I configured and provisioned a virtual environment to run your application using IaC approach (Vagrant & Ansible), all files can be found in [/iac](/iac)

1. Configured with Vagrant: 1 VM running on Kali Linux 
2. Provisioned the VM with Ansible :
  - nodejs and npm
  - redis
  - webapp (using sync folders)
  - health check of the application and the language runtime installation

#### Docker image of the application

You can find the Docker image of the application [here](https://hub.docker.com/repository/docker/fuzzer/ece_devops_webapp) in Docker Hub 

This image was created using a [Dockerfile](Dockerfile) and a [.dockerignore](.dockerignore) 
#### Container orchestration using Docker Compose

You can start the application using the [docker-compose.yml](docker-compose.yml) file

#### Docker orchestration using Kubernetes

I installed Kubernetes cluster using Minikube and created Kubernetes Manifest yaml files:
  - [deployment](/k8s/deployment.yaml)
  - [service](/k8s/service.yaml)
  - [persistent volume](/k8s/PersistentVolume.yaml) and [persistent volume claim](/k8s/PersistentVolumeClaim.yaml)

#### Service mesh using Istio

I deployed my application using Istio and created [configuration](/istio):
  - route requests between 2 different versions of the app
  - traffic shifting between 2 different versions of the app


## Author

Amine TSOULI

amine.tsouli@edu.ece.fr

Apprentice IT Engineer at ECE Paris 4th Year - SI01A Group