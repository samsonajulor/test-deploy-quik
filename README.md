# QuikDB Test Deploy

A simple Node.js/Express test application for QuikDB Compute deployments.

## Features

- **Homepage**: Beautiful landing page showing deployment success
- **Health Check**: `/health` endpoint for monitoring
- **API Info**: `/api/info` endpoint with system information

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm start
```

## Deployment

This application is designed to be deployed on QuikDB Compute:

1. Connect your Git repository
2. Select this repository and branch
3. QuikDB will auto-detect the Node.js configuration
4. Deploy!

## Environment Variables

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)

## Endpoints

- `GET /` - Landing page
- `GET /health` - Health check endpoint
- `GET /api/info` - Application information

## Tech Stack

- Node.js
- Express.js
- Pure HTML/CSS (no build step required)
