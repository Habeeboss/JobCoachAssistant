#!/bin/bash

# Login to Azure
az login

# Deploy to Azure App Service
az webapp up --name supported-employment-platform --resource-group your-resource-group --sku F1