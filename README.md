# DevOps Project - CI/CD Demo App

**Student:** Mann Dhaila | **Subject:** DevOps | **Semester:** 1

A simple Node.js web application that demonstrates a complete **DevOps pipeline** — from code push to automatic deployment.

---

## ✅ DevOps Concepts Implemented

| Concept | Tool Used | Status |
|---------|-----------|--------|
| Source Code Management (SCM) | GitHub | ✅ Done |
| Branching Strategy | Feature Branches + PR | ✅ Done |
| CI/CD Pipeline | GitHub Actions | ✅ Done |
| Automated Testing | Jest (unit tests) | ✅ Done |
| Containerization | Docker | ✅ Done |
| Deployment | Render (cloud hosting) | ✅ Done |
| Secrets Management | GitHub Secrets | ✅ Done |

---

## 🔄 CI/CD Pipeline

The CI/CD pipeline is defined in `.github/workflows/ci-cd.yml` and runs automatically on every `git push`.

### Pipeline Flow

```
Developer pushes code
        ↓
GitHub Actions triggers automatically
        ↓
Job 1: BUILD & TEST
  - Install Node.js 18
  - Run npm install
  - Run automated Jest tests
        ↓ (only if tests pass)
Job 2: DOCKER BUILD & PUSH
  - Build Docker image
  - Push to Docker Hub
        ↓
Job 3: DEPLOY
  - Trigger Render deployment
  - App goes live automatically
```

### Workflow File (`.github/workflows/ci-cd.yml`)

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ "main" ]         # Triggers on every push to main
  pull_request:
    branches: [ "main" ]         # Triggers on every pull request

jobs:
  build-and-test:               # Job 1: Build & Test
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: 18.x
    - run: npm install
    - run: npm test              # Runs automated tests

  docker-build-push:            # Job 2: Docker
    needs: build-and-test       # Only runs if Job 1 passes
    if: github.event_name == 'push'
    ...

  deploy-to-render:             # Job 3: Deploy
    needs: docker-build-push    # Only runs if Job 2 passes
    ...
```

---

## 🌿 Git Branching Strategy (Multi-developer Workflow)

```
main branch (production)
    │
    ├── feature/update-readme    ← Feature branch (developed separately)
    │       │
    │       └──── Pull Request #1 ──→ merged into main
    │
    └── main (updated after PR merge)
```

**Workflow followed:**
1. Create a feature branch: `git checkout -b feature/update-readme`
2. Make changes and commit: `git commit -m "feat: update readme"`
3. Push branch: `git push origin feature/update-readme`
4. Open Pull Request on GitHub → review → merge into `main`
5. GitHub Actions automatically runs pipeline on merge

---

## 🧪 Automated Testing

Tests are in `test/server.test.js` and run automatically in the pipeline:

```javascript
// Test 1: Health check
it('GET /api/health should return 200 OK', ...)

// Test 2: Home page loads
it('GET / should serve the home page', ...)
```

Run tests manually:
```bash
npm test
```

---

## 🐳 Docker (Containerization)

The app is packaged into a Docker container for consistent deployment.

**Build and run locally:**
```bash
# Build the Docker image
docker build -t devops-demo-app .

# Run the container
docker run -p 3000:3000 devops-demo-app
```

Open browser: `http://localhost:3000`

---

## 🔒 Secrets Management

No passwords are stored in the code. All credentials are stored as **GitHub Secrets**:

| Secret Name | Purpose |
|-------------|---------|
| `DOCKER_USERNAME` | Docker Hub login |
| `DOCKER_PASSWORD` | Docker Hub password |
| `RENDER_DEPLOY_HOOK` | Render deployment webhook URL |

Set these at: `GitHub Repo → Settings → Secrets and variables → Actions`

---

## 🚀 Live Deployment

👉 **[View Live App on Render](https://resume-builder-devops.onrender.com)**

---

## 📁 Project Structure

```
devops-project/
├── .github/
│   └── workflows/
│       └── ci-cd.yml       ← CI/CD Pipeline definition
├── public/
│   └── index.html          ← Simple web page
├── test/
│   └── server.test.js      ← Automated tests (Jest)
├── server.js               ← Node.js Express server
├── package.json            ← Project dependencies
└── Dockerfile              ← Docker container definition
```

---

## 🛠️ Tech Stack

- **Runtime:** Node.js 18
- **Framework:** Express.js
- **Testing:** Jest + Supertest
- **CI/CD:** GitHub Actions
- **Container:** Docker
- **Deployment:** Render
- **SCM:** Git + GitHub