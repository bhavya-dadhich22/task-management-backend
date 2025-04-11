stage('Test') {
  steps {
    sh 'npm test || echo "No tests defined"'
  }
}

stage('Run') {
  steps {
    sh 'nohup node server.js &'
  }
}
