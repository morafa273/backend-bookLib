import { v4 as uuid } from 'uuid';

let books = [];

export const getBooks = (req, res) => {
    console.log(`Data Buku: ${books}`);
    res.send(books);
}

export const createBook = (req, res) => {   
    const book = req.body;
    books.push({...book, id: uuid()});
    console.log(`Buku [${book.judulBuku}] berhasil ditambahkan.`);
};

export const getBook = (req, res) => {
    const {id} = req.params;
    const cariBuku = books.find((book)=> book.id === id);
    res.send(cariBuku);
};

export const deleteBook = (req, res) => { 
    console.log(`buku dengan id ${req.params.id} telah dihapus`);
    books = books.filter((book) => book.id !== req.params.id);
};

export const updateBook =  (req,res) => {
    const {id} = req.params;
    const {judulBuku,pengarang,stok,hargasewa} = req.body;

    const book = books.find((book) => book.id === id);
    
    if(judulBuku) book.judulBuku = judulBuku;
    if(pengarang) book.pengarang = pengarang;
    if(stok) book.stok = stok;
    if(hargasewa) book.hargasewa = hargasewa;

    res.send(`Data dengan id ${id} telah berhasil diupdate`);

};