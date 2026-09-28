\# Photographer Gallery App — DevOps Project



\## Project Overview



Photographer Gallery is a static website built using HTML, CSS, and JavaScript. Users can explore photographs and view selected images in a lightbox.



This project demonstrates DevOps tools and practices, including version control, containerization, image publishing, and CI/CD automation.



\## Technologies Used



\* HTML

\* CSS

\* JavaScript

\* Git and GitHub

\* Docker

\* Docker Hub

\* GitHub Actions

\* Jenkins (planned)

\* Kubernetes (planned)

\* Terraform (planned)

\* Ansible (planned)



\## Application Features



\* Photograph gallery

\* Image lightbox

\* Previous and next image navigation

\* Responsive web layout



\## Docker



The application is packaged using Docker and served through Nginx.



Build the image locally:



```bash

docker build -t photographer-gallery:1.0 .

```



Run the container:



```bash

docker run -d --name photographer-gallery -p 8081:80 photographer-gallery:1.0

```



Open http://localhost:8081 in a browser.



\## Docker Hub



Published image:



`pooja315/photographer-gallery:1.0`



Version 1.1 is also published to Docker Hub.



Pull the image:



```bash

docker pull pooja315/photographer-gallery:1.0

```



Run it with a different container name and port:



```bash

docker run -d --name gallery-demo -p 8084:80 pooja315/photographer-gallery:1.0

```



\## CI/CD Pipeline



GitHub Actions automatically runs when changes are pushed to the `main` branch.



Pipeline steps:



1\. Check out the repository.

2\. Set up Docker Buildx.

3\. Log in to Docker Hub using GitHub repository secrets.

4\. Build the Docker image.

5\. Push the image to Docker Hub with the `1.0` tag.



Required GitHub repository secrets:



\* `DOCKERHUB\_USERNAME`

\* `DOCKERHUB\_TOKEN`



Never commit Docker Hub access tokens or other credentials to the repository.



\## Project Repository



GitHub: https://github.com/Pooja-V3/photographer-gallery



Docker Hub: https://hub.docker.com/r/pooja315/photographer-gallery



\## Future Enhancements



\* Jenkins pipeline integration

\* Kubernetes deployment

\* Terraform infrastructure provisioning

\* Ansible configuration automation

\* Automated application tests and monitoring



\## Learning Outcomes



\* Version control with Git and GitHub

\* Docker image creation and container management

\* Publishing container images to Docker Hub

\* Automating image builds and publishing with GitHub Actions

\* Understanding CI/CD and infrastructure automation



