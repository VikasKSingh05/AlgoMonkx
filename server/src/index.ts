import express from 'express';
import cors from 'cors';
import path from 'path';
import { config } from './config';
import apiRoutes from './routes';
import { notFoundHandler, errorHandler } from './middleware/errorHandler';

const app = express();

app.use(cors({ origin: config.corsOrigin }));
app.use(express.json());

app.use('/api', apiRoutes);

if (config.nodeEnv === 'production') {
  app.use(express.static(path.join(__dirname, '../../../client/dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
  });
}

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port} in ${config.nodeEnv} mode`);
});

export default app;
