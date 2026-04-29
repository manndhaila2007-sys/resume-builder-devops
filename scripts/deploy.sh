#!/bin/bash

# Simple deployment script for local testing
echo "🚀 Starting local deployment process..."

# Build Docker image
echo "📦 Building Docker image..."
docker build -t resume-builder-devops .

# Run container
echo "🌐 Running container on port 3000..."
docker run -d -p 3000:3000 --name resume-app resume-builder-devops

echo "✅ Deployment complete! Access at http://localhost:3000"
