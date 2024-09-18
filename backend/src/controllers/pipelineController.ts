import { Request, Response } from 'express';
import { supabase } from '../supabaseClient';
import { Pipeline } from '../models/Pipeline';

export const createPipeline = async (req: Request, res: Response) => {
  const newPipeline: Pipeline = req.body;

  try {
    const { data, error } = await supabase
      .from('pipelines')
      .insert([newPipeline]);

    if (error) {
      console.error('Error inserting data:', error);
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json(data);
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
};

export const getPipelines = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('pipelines')
      // .select<Pipeline>('*');
      .select('*');

    if (error) {
      console.error('Error fetching pipelines:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
};

export const getPipelineById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('pipelines')
      // .select<Pipeline>('*')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) {
      console.error('Error fetching data:', error);
      return res.status(404).json({ error: 'Pipeline not found' });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
};

export const updatePipeline = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates: Partial<Pipeline> = req.body;

  try {
    const { data, error } = await supabase
      .from('pipelines')
      .update(updates)
      .eq('id', id);

    if (error) {
      console.error('Error updating data:', error);
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
};

export const deletePipeline = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const { error } = await supabase
      .from('pipelines')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting data:', error);
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ message: 'Pipeline deleted successfully' });
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
};


