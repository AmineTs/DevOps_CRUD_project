# Cloud native application

I deployed my application using Istio and created [configuration](/istio):
  - route requests between 2 different versions of the app
  - traffic shifting between 2 different versions of the app

## Usage
- Install Istio : Do everything until [Next steps](https://istio.io/docs/setup/getting-started/#next-steps) section.
- [Install Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) following the instructions depending on your OS.

1. Start Minikube with:
  ```bash
  minikube start
  ```

2. Verify that everything is OK with:
  ```bash
  minikube status
  ```

3. Go to folder where you cloned the repo and place you under [istio/](istio/):
  ```bash
  cd istio/
  ```

4. Use the demo configuration profile for the installation :
  ```bash
  istioctl install --set profile=demo -y
  ```

5. Add a namespace label to instruct Istio to automatically inject Envoy sidecar proxies when you deploy the application later: :
  ```bash
  kubectl label namespace default istio-injection=enabled
  ```

6. Deploy the web application:
  ```bash
  kubectl apply -f amine-webapp.yaml 
  ```

7. Wait until the containers are running :
  ```bash
  kubectl get pods
  ```

8. Then open the application to the outside trafic, enable route request and traffic shifting between 2 versions of the app :
  ```bash
  kubectl apply -f amine-webapp-gateway.yaml 
  ```

9. Port forward the ingress gateway :
  ```bash
  kubectl port-forward svc/istio-ingressgateway 8080:80 -n istio-system
  ```

  - Output :

  
  ![Alt text](../img/Istio_output_1-2.PNG?raw=true "Istio cmd output")

10. [Click here](http://localhost:8080/) to open the web application !

  ![Alt text](../img/Istio_output_2-2.PNG?raw=true "Istio output 2")

