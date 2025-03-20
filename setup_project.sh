#!/bin/bash

# Define base directory
BASE_DIR="supported-employment-platform"

# Create directory structure
mkdir -p $BASE_DIR/backend/api/jobs \
         $BASE_DIR/backend/api/chatbot \
         $BASE_DIR/backend/api/users \
         $BASE_DIR/backend/models \
         $BASE_DIR/backend/config \
         $BASE_DIR/frontend/src/components \
         $BASE_DIR/frontend/src/styles \
         $BASE_DIR/deployment

# Create backend files
touch $BASE_DIR/backend/api/jobs/index.js \
      $BASE_DIR/backend/api/chatbot/index.js \
      $BASE_DIR/backend/api/users/index.js \
      $BASE_DIR/backend/models/job_matching_model.pkl \
      $BASE_DIR/backend/config/db.js \
      $BASE_DIR/backend/config/openai.js \
      $BASE_DIR/backend/server.js

# Create frontend files
touch $BASE_DIR/frontend/src/components/Chatbot.js \
      $BASE_DIR/frontend/src/components/JobMatches.js \
      $BASE_DIR/frontend/src/components/AccessibilitySettings.js \
      $BASE_DIR/frontend/src/styles/accessibility.css \
      $BASE_DIR/frontend/src/App.js \
      $BASE_DIR/frontend/src/index.js \
      $BASE_DIR/frontend/package.json

# Create deployment files
touch $BASE_DIR/deployment/Dockerfile \
      $BASE_DIR/deployment/azure_deploy.sh

# Create README file
touch $BASE_DIR/README.md

# Print success message
echo "Project structure for Supported Employment Platform created successfully!"

