import App from './server/app';
import dotenv from 'dotenv';
dotenv.config();

const app= new App()
app.start();
