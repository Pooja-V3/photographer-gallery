
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'GitHub checkout completed!'
            }
        }

        stage('Validate Project Files') {
            steps {
                sh 'test -f index.html'
                sh 'test -f style.css'
                sh 'test -f app.js'
                sh 'test -f Dockerfile'
                echo 'All required files exist!'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t photographer-gallery:jenkins-${BUILD_NUMBER} .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKERHUB_USER',
                    passwordVariable: 'DOCKERHUB_TOKEN'
                )]) {
                    sh '''
                        set +x
                        echo "$DOCKERHUB_TOKEN" | docker login -u "$DOCKERHUB_USER" --password-stdin

                        docker tag photographer-gallery:jenkins-${BUILD_NUMBER} "$DOCKERHUB_USER/photographer-gallery:jenkins-${BUILD_NUMBER}"
                        docker tag photographer-gallery:jenkins-${BUILD_NUMBER} "$DOCKERHUB_USER/photographer-gallery:latest"

                        docker push "$DOCKERHUB_USER/photographer-gallery:jenkins-${BUILD_NUMBER}"
                        docker push "$DOCKERHUB_USER/photographer-gallery:latest"

                        docker logout
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Build and Docker Hub push completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check Console Output.'
        }
    }
}