# Container orchestration with Kubernetes

I installed Kubernetes cluster using Minikube and created Kubernetes Manifest yaml files:
  - [deployment](/k8s/deployment.yaml)
  - [service](/k8s/service.yaml)
  - [persistent volume](/k8s/PersistentVolume.yaml) and [persistent volume claim](/k8s/PersistentVolumeClaim.yaml)

## Usage

- [Install Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) following the instructions depending on your OS.

1. Start Minikube with:
  ```bash
  minikube start
  ```

2. Verify that everything is OK with:
  ```bash
  minikube status
  ```

3. Go to folder where you cloned the repo and place you under [k8s/](k8s/):
  ```bash
  cd k8s/
  ```

4. Create the Persistent volume :
  ```bash
  kubectl apply -f PersistentVolume.yaml
  ```

5. Create the Persistent volume claim :
  ```bash
  kubectl apply -f PersistentVolumeClaim.yaml
  ```

6. Create the deployment that create a container with the webapp and another with the redis database:
  ```bash
  kubectl create -f deployment.yaml
  ```

7. Wait until the containers are running :
  ```bash
  kubectl get pods
  ```

8. Then create the service :
  ```bash
  kubectl create -f service.yaml
  ```

9. You can list volumes and pods with :
  ```bash
  kubectl get pv && kubectl get pvc && kubectl get pods
  ```

10. Find out on which port the service has been attached to with:
   ```bash
   kubectl get services
   ```

![Alt text](../img/K8s_output_1-3.PNG?raw=true "K8s output 1/3")


11. Get the IP of your Minikube VM with:
   ```bash
   minikube ip
   ```
12. Using the answers of questions 10. and 11., open your web browser and try to reach the web app.

**Note!** If you are using Docker driver in Minikube, you must create a tunnel to the cluster node (that is running as a Docker container). Run the command (replace `$SERVICE_NAME` with your service name):

```bash
minikube service $SERVICE_NAME
```

![Alt text](../img/K8s_output_2-3.PNG?raw=true "K8s output 2/3")


13. On the web app, create a user in the "Sign Up" page and then run the command :
  ```bash
  kubectl logs <POD_NAME> redis-server
  ```

![Alt text](../img/K8s_output_3-3.PNG?raw=true "K8s output 3/3")

**Note!** To check if your data have been correctly saved in the redis database you can delete it 
```bash
kubectl delete pod <POD_NAME> redis-server
```
Then wait until the pods is ok with the 2 containers and try to sign in with the user that you just created. 

