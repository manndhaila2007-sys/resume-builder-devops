# System Architecture

The following diagram illustrates the complete DevOps CI/CD pipeline for this project.

```mermaid
graph TD
    A[Developer] -->|Push Code| B(GitHub Repository)
    B -->|Trigger| C{GitHub Actions}
    
    subgraph CI Pipeline
        C --> D[Build & Install]
        D --> E[Automated Testing]
    end
    
    subgraph CD Pipeline
        E -->|Pass| F[Docker Build]
        F --> G[Push to Docker Hub]
        G --> H[Trigger Render Webhook]
    end
    
    H --> I[Live Production Server]
```

### Components:
- **SCM**: GitHub for version control and collaboration.
- **CI**: GitHub Actions runs tests on every push/PR.
- **Containerization**: Docker ensures the app runs the same everywhere.
- **CD**: Automatic deployment to Render using webhooks.
