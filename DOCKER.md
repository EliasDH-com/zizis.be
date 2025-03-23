![logo](https://eliasdh.com/assets/media/images/logo-github.png)
# 💙🤍DOCKER🤍💙

## 📘Table of Contents

1. [📘Table of Contents](#📘table-of-contents)
2. [🚀Docker](#🚀docker)

## 🚀Docker

- Pull the latest image and run the container
```bash
sudo docker pull ghcr.io/eliasdh-com/XXX-frontend:latest
sudo docker run --name XXX-frontend-container -p 80:80 -d ghcr.io/eliasdh-com/XXX-frontend:latest
```

- Check the logs
```bash
sudo docker logs displaylevelupbe-frontend-container
```

- Stop and remove the existing container and image
```bash
sudo docker stop XXX-frontend-container
sudo docker rm XXX-frontend-container
sudo docker rmi ghcr.io/eliasdh-com/XXX-frontend:latest
```