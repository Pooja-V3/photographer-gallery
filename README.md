\# Photographer Gallery App — DevOps Project



\## Project Overview

# Photographer Gallery App — DevOps Project

## 1. Project Overview

Photographer Gallery is a static photography portfolio website built using HTML, CSS, and JavaScript. It allows users to explore photographs and view selected images in a lightbox.

This project demonstrates DevOps practices by using containerization, CI/CD automation, infrastructure as code, configuration automation, and container orchestration.

## 2. Technologies Used

* HTML, CSS, JavaScript
* Git and GitHub
* Docker and Docker Hub
* Jenkins
* Kubernetes
* Terraform
* Ansible
* GitHub Actions

## 3. Project Architecture

1. Source code is maintained in GitHub.
2. Docker packages the website into a container image.
3. Jenkins automates source checkout, build, image publishing, and local deployment.
4. Kubernetes manages the application using a Deployment with three replicas and a NodePort Service.
5. Terraform manages a local Docker image and container.
6. Ansible runs a playbook to verify Docker availability and list containers.

## 4. Docker

Docker is used to build and run the Photographer Gallery website in a container.

Docker Hub image:

`pooja315/photographer-gallery:latest`

## 5. Jenkins CI/CD

The Jenkins pipeline automates the application workflow, including:

* Checking out source code from GitHub
* Validating and building the Docker image
* Publishing the image to Docker Hub
* Deploying the application locally

## 6. Kubernetes Deployment

The Kubernetes Deployment is configured with three replicas to maintain multiple running application pods.

* Deployment: `photographer-gallery`
* Replicas: 3
* Service type: NodePort
* NodePort: 30215

Check the deployment:

```bash
kubectl get deployments,pods,services
```

To access the website through port forwarding:

```bash
kubectl port-forward service/photographer-gallery 8088:80
```

Open `http://localhost:8088` in your browser while port forwarding is running.

## 7. Terraform

Terraform is used to manage a local Docker image and container.

* Image: `pooja315/photographer-gallery:latest`
* Container: `photographer-gallery-terraform`
* Local port: `8089`

Terraform commands:

```bash
terraform -chdir=terraform init
terraform -chdir=terraform plan
terraform -chdir=terraform apply
```

## 8. Ansible

Ansible is used to automate basic Docker verification through a YAML playbook.

The current playbook checks the Docker version and lists running containers.

Run the playbook from the `ansible` directory:

```bash
ansible-playbook site.yml --syntax-check
ansible-playbook site.yml
```

Note: The current Ansible playbook verifies Docker; it does not yet automate the full application deployment.

## 9. Project Outcome

This project demonstrates practical experience with containerization, CI/CD, Kubernetes orchestration, infrastructure as code, and basic configuration automation.

## 10. Author

**Pooja V**
BE Computer Science and Engineering# Photographer Gallery App — DevOps Project



