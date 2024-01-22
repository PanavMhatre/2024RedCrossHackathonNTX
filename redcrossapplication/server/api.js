const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*'
}))

app.get('/api', (req, res) => {
    res.statusCode(200).json({'status': 'OK'});
});

app.post('/api/contact', (req, res) => {
    
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});