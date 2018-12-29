import express from 'express';
import { Router } from 'express';

/**
 * Wraps and Exports the express Router
 */
export function GetRouter(): Router {
  return express.Router();
}
