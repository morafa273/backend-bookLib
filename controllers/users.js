import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Data User: ${users}`);
    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;
    users.push({...user, id: uuid()});
    console.log(`User [${user.namaUser}] berhasil ditambahkan.`);
};

export const getUser = (req, res) => {
    const {id} = req.params;
    const cariUser = users.find((user)=> user.id === id);
    res.send(cariUser);
};

export const deleteUser = (req, res) => {
    const {id} = req.params 
    console.log(`User dengan nama ${req.body.namaUser} telah dihapus`);
    users = users.filter((user) => user.id !== id);
};

export const updateUser =  (req,res) => {
    const {id} = req.params;
    const {namaUser,alamat} = req.body;

    const user = users.find((user) => user.id === id);
    
    if(namaUser) user.namaUser = namaUser;
    if(alamat) user.alamat = alamat;

    res.send(`User dengan id ${id} telah berhasil diupdate`);

};