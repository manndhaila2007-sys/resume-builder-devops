# DevOps Resume Builder

A simple web-based Resume Builder college project showcasing a complete DevOps lifecycle.

## Live Deployment
👉 **[Insert your Render or Live URL Here]**

## Features
- **Frontend**: Clean, responsive UI built with HTML, CSS (Custom styling), and Vanilla JS.
- **Backend**: Node.js with Express for serving the application.
- **CI/CD Pipeline**: GitHub Actions for automated Building, Testing, and Docker deployment.
- **Docker Integration**: Fully containerized using `Dockerfile`.

## CI/CD Pipeline (Build → Test → Deploy)
1. **Build**: GitHub Actions installs Node.js and dependencies.
2. **Test**: Runs a suite of automated unit/integration tests using Jest.
3. **Deploy**: Builds the Docker image and pushes it to Docker Hub using GitHub Secrets (`DOCKER_USERNAME`, `DOCKER_PASSWORD`).

## GitHub Secrets Used
For security, passwords are NOT stored in the code. The following secrets are set in the GitHub repository settings:
- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

## Git Usage
- Development was done across multiple branches (e.g., `main`, `feature/resume-ui`).
- Features were merged using **Pull Requests (PRs)**.

---

## Local Development (Docker)

To run this application locally using Docker:

1. **Build the image**:
   ```bash
   docker build -t resume-builder .
   ```

2. **Run the container**:
   ```bash
   docker run -p 3000:3000 resume-builder
   ```

3. Open your browser and navigate to `http://localhost:3000`.

---

## Screenshots

*(Add your screenshots here)*
- **Home Page**:
  ![Home Page Screenshot](#)

- **Generated Resume preview**:
  ![Resume Preview](#)

- **GitHub Actions Pipeline Success**:
  ![CI/CD Pipeline](#)
