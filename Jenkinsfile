
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Connecting to GitHub'
                checkout scm
            }
        }

        stage('Build Info') {
            steps {
                echo 'Photographer Gallery project checked out successfully!'
                sh 'ls -la'
            }
        }
    }
}
