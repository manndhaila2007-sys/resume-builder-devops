#!/bin/bash


echo "🚀 Starting local deployment process..."


echo "📦 Building Docker image..."
docker build -t resume-builder-devops .


echo "🌐 Running container on port 3000..."
docker run -d -p 3000:3000 --name resume-app resume-builder-devops

echo "✅ Deployment complete! Access at http://localhost:3000"
