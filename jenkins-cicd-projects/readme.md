# Jenkins Playbook: From Zero to Full CI/CD Pipeline

This repository supports the blog **"Jenkins Playbook: From Zero to Full CI/CD Pipeline"**.

It is a hands-on learning path that starts with basic Jenkins jobs and grows into production-style CI/CD architecture.

## Learning Roadmap

### Project 1: Freestyle Job (Beginner)

Start with Jenkins fundamentals:

- Create your first Freestyle job
- Connect Jenkins with a Git repository
- Trigger builds manually and automatically
- Understand build history and console output

### Project 2: CI Pipeline with Jenkinsfile

Move to Pipeline as Code:

- Create a `Jenkinsfile`
- Define stages like **checkout**, **build**, and **test**
- Run CI automatically on code changes
- Learn Declarative Pipeline basics

### Project 3: Full CI/CD with Docker + Deploy

Build and deploy with containers:

- Build application and Docker image in pipeline
- Push image to a registry
- Deploy to a target server/environment
- Add post-deploy verification steps

### Project 4: Multi-Branch Pipeline CI/CD

Scale CI/CD across branches:

- Configure Multi-Branch Pipeline in Jenkins
- Automatically discover branch `Jenkinsfile` changes
- Run separate pipelines for feature, develop, and main branches
- Add branch-based deployment rules

### Project 5: Master-Agent Architecture

Run distributed and scalable builds:

- Configure Jenkins controller and agents
- Assign workloads to labeled agents
- Separate build environments for better reliability
- Improve pipeline performance with parallel execution

## Prerequisites

Before running the projects, make sure you have:

- Jenkins installed and accessible
- Git and Docker installed
- A GitHub (or similar) source repository
- Basic Linux command-line knowledge
- Credentials configured in Jenkins (registry/server/API tokens)

## Suggested Repository Structure

You can organize this repository as:

- `project-1-freestyle/`
- `project-2-pipeline-jenkinsfile/`
- `project-3-cicd-docker-deploy/`
- `project-4-multibranch-pipeline/`
- `project-5-master-agent/`

## Goal of This Repo

By completing all five projects, you will learn how to design and run a complete Jenkins-based CI/CD system, from beginner setup to advanced, real-world pipeline architecture.