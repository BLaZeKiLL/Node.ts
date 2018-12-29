import { App } from './App/app';

const app = new App(3000);

app.listen(() => {
  console.log(app.getLocalUrl());
});

