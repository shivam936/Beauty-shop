import app from './app.js'
import dotenv from 'dotenv'
import  {dbConnection} from './utils/db.js';

dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT , () => {
    console.log(`Server is running at ${PORT}`);
    dbConnection();
})