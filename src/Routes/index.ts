import { Router } from '../App/app';

Router.get('/', (req, res) => {
    res.send('Hello World!');
});

export default Router;