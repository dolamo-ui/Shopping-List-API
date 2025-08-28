import express from 'express';
import itemsRouter from './routes/items';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Shopping List API is running!' });
});

app.use('/items', itemsRouter);

// Error handler middleware (must be last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
