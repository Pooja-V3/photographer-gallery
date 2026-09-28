
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out GitHub repository'
                checkout scm
            }
        }

        stage('Validate Project Files') {
            steps {
                sh 'test -f index.html'
                sh 'test -f style.css'
                sh 'test -f app.js'
                sh 'test -f Dockerfile'
                echo 'All required project files exist!'
            }
        }

        stage('Validate Dockerfile') {
            steps {
                sh 'cat Dockerfile'
                echo 'Dockerfile validation completed!'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t photographer-gallery:jenkins-${BUILD_NUMBER} .'
                echo 'Docker image built successfully!'
            }
        }
    }

    post {
        success {
            echo 'Photographer Gallery pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check Console Output.'
        }
    }
}