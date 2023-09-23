'use strict';

const express = require('express');
const path = require('path'); // Modul 'path' diperlukan untuk menangani path file.

const PORT = process.env.PORT || 8000;
const HOST = '0.0.0.0';

const app = express();

// Menggunakan middleware express.static untuk mengakses berkas statis dari folder 'public'.
app.use(express.static(path.join(__dirname, 'public')));

// Menambahkan rute untuk berkas 'index.html'.
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, HOST, () => {
   console.log(`Server is up and listening at http://${HOST}:${PORT}`);
});