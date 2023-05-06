import  express  from 'express';
import { connectionDB } from './DB/Connection.js';
import * as Routers from './modules/index.routes.js';

const app = express();
const port = 3000; 










app.use(express.json());
connectionDB()
app.use(Routers.userRouter);
app.use(Routers.productRouter);
app.listen(port, () => console.log('Server Works ................ '));