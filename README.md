# Multi-Tenant DevOps Platform 🚀

## Overview
A Kubernetes-based multi-tenant platform where each user is isolated using namespaces.

## Features
- Multi-tenant architecture using namespaces
- CI/CD pipeline (GitHub Actions)
- Dockerized Node.js app
- Kubernetes deployment (Deployment, Service, HPA, Ingress)
- Rollback support
- Kafka event simulation

## Architecture
- user1 → namespace user1
- user2 → namespace user2
- user3 → namespace user3

## How to Run (Minikube)
1. minikube start
2. eval $(minikube docker-env)
3. docker build -t app:latest ./App
4. kubectl apply -f k8s/users/
5. kubectl apply -f k8s/base/

## Access
kubectl port-forward svc/webapp-service 9091:80 -n user1
kubectl port-forward svc/webapp-service 9092:80 -n user2
kubectl port-forward svc/webapp-service 9093:80 -n user3

## Output
Hello from user1
Hello from user2
Hello from user3