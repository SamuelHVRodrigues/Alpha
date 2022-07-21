import { app } from './server';
import { config } from './config';

app.listen(config.PORT, () => console.log(`server is running on port ${config.PORT}`));