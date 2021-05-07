import { v4 as uuid } from 'uuid';

let rents  = [];

export const getRents = (req, res) => {
    console.log(`Data Penyewaan: ${rents}`);
    res.send(rents);
}

export const createRent = (req, res) => {   
    const rent = req.body;
    rents.push({...rent, id: uuid()});
    console.log(`Info sewa buku dengan id [${req.params.id}] berhasil ditambahkan.`);
};

export const getRent = (req, res) => {
    const {id} = req.params;
    const cariRent = rents.find((rent)=> rent.id === id);
    res.send(cariRent);
};

export const deleteRent = (req, res) => {
    const {id} = req.params  
    console.log(`Info penyewaan dengan id ${id} telah dihapus`);
    rents = rents.filter((rent) => rent.id !== id);
};

// export const updateRent =  (req,res) => {


//};