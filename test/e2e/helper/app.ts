import express, { Express, Request, Response } from 'express';
import cors from 'cors'
const app = express();
app.use(cors())
const port = 3001;

import * as sampleDelta from '../../data/sample-delta-response.json' with { type: 'json' };
console.log('helllpppp')
// Define a route for GET requests to the root URL
app.get('/delta/get-store-delta', (req, res) => {
  console.log('requested')
  res.send(sampleDelta.default);
});

// Start the server
await app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 