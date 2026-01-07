const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>QuikDB Test Deploy</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .container {
            background: white;
            padding: 3rem;
            border-radius: 1rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
            max-width: 500px;
          }
          h1 {
            color: #667eea;
            margin: 0 0 1rem 0;
          }
          p {
            color: #666;
            line-height: 1.6;
          }
          .badge {
            display: inline-block;
            background: #10b981;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.875rem;
            font-weight: 600;
            margin-top: 1rem;
          }
          .info {
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid #e5e7eb;
          }
          .info-item {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            font-size: 0.875rem;
          }
          .info-label {
            color: #9ca3af;
          }
          .info-value {
            color: #374151;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 QuikDB Compute</h1>
          <p>Your test application is successfully deployed and running!</p>
          <div class="badge">✓ Deployment Successful</div>
          
          <div class="info">
            <div class="info-item">
              <span class="info-label">Port</span>
              <span class="info-value">${PORT}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Node Version</span>
              <span class="info-value">${process.version}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Status</span>
              <span class="info-value">Running</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    port: PORT
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    name: 'test-deploy-quik',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    nodeVersion: process.version,
    platform: process.platform,
    memory: process.memoryUsage()
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Visit http://localhost:${PORT}`);
});

// Continuous logging for testing log streaming
let logCounter = 0;
setInterval(() => {
  logCounter++;
  const logLevels = ['info', 'warn', 'error', 'debug'];
  const level = logLevels[logCounter % 4];
  
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    level: level,
    message: `Test log message #${logCounter} - ${level.toUpperCase()}`,
    metadata: {
      counter: logCounter,
      uptime: Math.floor(process.uptime()),
      memoryUsedMB: Math.floor(process.memoryUsage().heapUsed / 1024 / 1024),
      type: 'interval_log'
    }
  }));
}, 1000);
