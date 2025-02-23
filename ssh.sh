#!/bin/bash

# Navigate to the desired directory
cd /Users/rudr/Desktop/RUDR/lockin/amazon-ec2 || { echo "Failed to cd into directory"; exit 1; }

# SSH into EC2
ssh -i ./ubuntu_ssh.pem ubuntu@$(cat ./ip.txt) << 'EOF'
    echo "Connected to EC2 instance."

    # Pull the latest image from Docker Hub
    echo "Pulling latest image from Docker Hub..."
    docker pull rudrprasad/resume:latest

    # Stop and remove the current container
    if docker ps -q -f name=resume; then
        echo "Stopping existing container..."
        docker stop resume
        echo "Removing existing container..."
        docker rm resume
    else
        echo "No running container named 'resume' found."
    fi

    # Run the new container on port 3000
    echo "Running new container on port 3000..."
    docker run -d --name resume -p 3000:3000 rudrprasad/resume:latest

    echo "Deployment completed successfully."
EOF
