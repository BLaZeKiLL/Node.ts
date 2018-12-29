import { App } from './App/app';

const app = new App(3000, 'NODETS');

app.listen(() => {
  console.log(app.getLocalUrl());
});

export default app;
