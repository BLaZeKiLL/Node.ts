import express from 'express';
import { Router } from 'express';

export function GetRouter(): Router {
  return express.Router();
}
