import express, { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { items } from '../data/items';
import { Item } from '../models/item';

const router = express.Router();

// GET /items → return all items
router.get('/', (req: Request, res: Response) => {
  res.json({ data: items });
});

// POST /items → create a new item
router.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { name, quantity } = req.body;

  if (!name || quantity === undefined) {
    const err = new Error('Missing required fields: name and quantity');
    (err as any).status = 400;
    return next(err);
  }

  if (typeof name !== 'string' || typeof quantity !== 'number') {
    const err = new Error('Invalid data types for name or quantity');
    (err as any).status = 400;
    return next(err);
  }

  const newItem: Item = {
    id: uuidv4(),
    name,
    quantity,
    purchased: false,
  };

  items.push(newItem);

  res.status(201).json({ data: newItem });
});

// GET /items/:id → get single item by ID
router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  const item = items.find(i => i.id === req.params.id);

  if (!item) {
    const err = new Error('Item not found');
    (err as any).status = 404;
    return next(err);
  }

  res.json({ data: item });
});

// PUT /items/:id → update item
router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  const item = items.find(i => i.id === req.params.id);

  if (!item) {
    const err = new Error('Item not found');
    (err as any).status = 404;
    return next(err);
  }

  const { name, quantity, purchased } = req.body;

  if (name !== undefined && typeof name !== 'string') {
    const err = new Error('Invalid name');
    (err as any).status = 400;
    return next(err);
  }

  if (quantity !== undefined && typeof quantity !== 'number') {
    const err = new Error('Invalid quantity');
    (err as any).status = 400;
    return next(err);
  }

  if (purchased !== undefined && typeof purchased !== 'boolean') {
    const err = new Error('Invalid purchased status');
    (err as any).status = 400;
    return next(err);
  }

  if (name !== undefined) item.name = name;
  if (quantity !== undefined) item.quantity = quantity;
  if (purchased !== undefined) item.purchased = purchased;

  res.json({ data: item });
});

// DELETE /items/:id → delete item
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  const index = items.findIndex(i => i.id === req.params.id);

  if (index === -1) {
    const err = new Error('Item not found');
    (err as any).status = 404;
    return next(err);
  }

  items.splice(index, 1);
  res.status(204).send();
});

export default router;
