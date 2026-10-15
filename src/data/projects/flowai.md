---
title: "FlowAI: AI-Powered Workflow Automation Platform"
description: "A full-stack automation platform connecting intelligent LLM agents, asynchronous background job queues, and containerized microservices."
tech: ["React", "Node.js", "Express", "MongoDB", "Redis", "BullMQ", "Docker", "Tailwind CSS"]
liveUrl: "https://github.com/Mohamedkrms"
repoUrl: "https://github.com/Mohamedkrms"
featured: true
date: 2026-02-10
image: "/assets/projects/flowai-dashboard.jpg"
images:
  - "/assets/projects/flowai-dashboard.jpg"
  - "/assets/projects/flowai-pipeline.jpg"
draft: false
---

## Overview

**FlowAI** is a modern SaaS platform designed to streamline complex business workflows through intelligent automation and AI agent coordination. Built from the ground up to solve repetitive multi-step tasks, FlowAI bridges modern frontend experiences with resilient, asynchronous backend infrastructure.

## Key Features

- **Visual Workflow Builder:** Intuitive pipeline orchestration allowing users to define triggers, actions, and conditional AI branching.
- **Asynchronous Task Processing:** Distributed task execution powered by Redis and BullMQ, guaranteeing job retries and failure handling.
- **AI Agent Integration:** Seamless integration with Large Language Model APIs for intelligent text processing, classification, and summarization.
- **Real-Time Execution Logs:** WebSocket-powered event streaming providing instant visibility into workflow progress and diagnostic information.
- **Containerized Deployment:** Fully dockerized services orchestrated with Docker Compose for seamless local development and production scalability.

## Tech Stack & Architecture

### Frontend
- **Framework:** React with React Router v7+
- **Styling:** Tailwind CSS with a clean, modern aesthetic
- **State & Data Fetching:** TanStack Query for caching and server-state synchronization

### Backend & Infrastructure
- **Server:** Node.js & Express REST API
- **Primary Database:** MongoDB for dynamic workflow schemas and execution histories
- **Queue & Cache:** Redis paired with BullMQ for high-throughput job management
- **DevOps:** Docker, Docker Compose, and automated GitHub Actions CI/CD pipelines
