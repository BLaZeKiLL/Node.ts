import { App } from './App/app';

App.Context.listen(3000, () => {
    console.log('Serving on http://localhost:3000/');
});
