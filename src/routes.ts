import { Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        email: 'tomassantos016@gmail.com',
        password: '123',
        techs: ['node.js', 'react.js', 'ReactNative'],
    });

    return response.json({ message: 'Hello World"'});
}