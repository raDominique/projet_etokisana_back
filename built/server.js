import dotenv from 'dotenv';
dotenv.config();
import DB from './configs/database.config.js';
import Server from './configs/app.js';
DB.connectDB();
Server.bootstrap();
//# sourceMappingURL=server.js.map