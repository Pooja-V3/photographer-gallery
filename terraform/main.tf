terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {
  host = "npipe:////.//pipe//docker_engine"
}

resource "docker_image" "gallery" {
  name         = "pooja315/photographer-gallery:latest"
  keep_locally = true
}

resource "docker_container" "gallery" {
  name  = "photographer-gallery-terraform"
  image = docker_image.gallery.image_id

  ports {
    internal = 80
    external = 8089
  }
}
