import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'yup';

export const validate =
  (schema: ObjectSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (err: any) {
      res.status(400).json({ error: err.errors[0] });
    }
  };
