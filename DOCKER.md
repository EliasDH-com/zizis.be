![logo](https://eliasdh.com/assets/media/images/logo-github.png)
# 💙🤍DOCKER🤍💙

## 📘Table of Contents

1. [📘Table of Contents](#📘table-of-contents)
2. [🚀Docker](#🚀docker)

## 🚀Docker

- Pull the latest image and run the container
```bash
sudo docker pull ghcr.io/eliasdh-com/zizis-frontend:latest
sudo docker run --name zizis-frontend-container -p 8080:8080 -d ghcr.io/eliasdh-com/zizis-frontend:latest
```

- Check the logs
```bash
sudo docker logs zizis-frontend-container
```

- Stop and remove the existing container and image
```bash
sudo docker stop zizis-frontend-container
sudo docker rm zizis-frontend-container
sudo docker rmi ghcr.io/eliasdh-com/zizis-frontend:latest
```