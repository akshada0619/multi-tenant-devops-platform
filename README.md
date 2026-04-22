# Multi-Tenant DevOps Platform

## 🚀 Features
- Multi-tenant Kubernetes deployment
- Dynamic domain mapping via Ingress
- CI/CD with rollback
- Kafka event-driven pipeline
- Auto scaling (HPA)
- Observability ready

---

## 🛠️ Setup

### 1. Build App
docker build -t your-dockerhub/app ./app

### 2. Deploy Namespaces
kubectl apply -f k8s/users/

### 3. Deploy Base Resources
kubectl apply -f k8s/base/

### 4. Access Apps
curl http://user1.example.com

---

## 📈 Scaling
kubectl get hpa -n user1

---

## 🔁 Rollback
kubectl rollout undo deployment/webapp -n user1

---

## 📩 Kafka
docker-compose up -d
node kafka/producer.js
bash kafka/consumer.sh
