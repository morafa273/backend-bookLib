import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './routes/books.js'
import userRoutes from './routes/users.js'
import rentRoutes from './routes/rents.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/books',bookRoutes);
app.use('/users',userRoutes);
app.use('/rents',rentRoutes);

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(PORT,()=> console.log(`Server berjalan pada http://localhost:${PORT}`));

