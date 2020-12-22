# Web Application

1. Install Redis dababase

Installation instructions:

- **Windows:** https://redislabs.com/ebook/appendix-a/a-3-installing-on-windows/a-3-2-installing-redis-on-window/
- **MacOS:** `brew install redis` or https://redis.io/topics/quickstart
- **Linux or MacOS:** https://redis.io/topics/quickstart

After installation start Redis server:

- **Windows:** double click on `redis-server.exe` file (keep it open)
- **MacOS and Linux:** `redis-server`

Test if Redis server is running:

- **Windows:** double click on `redis-cli.exe` and run `ping` command inside this terminal
- **MacOS and Linux:** run in a new terminal window `redis-cli ping` (should answer with "PONG")

2. Install an **IDE or a text editor**, for example, [Atom](https://atom.io/) or [VS Code](https://code.visualstudio.com/)

3. Install **NodeJS**: https://nodejs.org/

## 1. Use prepared User API application and run tests

Go to folder where you cloned the repo and run these commands:

```
cd DevOps_CRUD_project
```

Install application:

```
npm install
```

Run tests:

```
npm test
```

Start application:

```
npm start
```


Now you can go to the web application [HERE](http://localhost:3000/) :-) (try to sign up) 



![Alt text](img/Tests.png?raw=true "Tests")
![Alt text](img/Webapp_screen.PNG?raw=true "webapp")