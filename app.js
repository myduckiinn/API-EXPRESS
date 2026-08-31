import express, { application } from 'express';
const app = express();
const PORT = 3000;
const usuarios= [
    {id: 1, nome: "kauã"},
    {id: 2, nome: "Fabio"},
    {id: 3, nome: "Liz"}
]

app.get('/',(req, res) => {
    res.send('Bem-vindo ao Express!');
});

app.get('/usuarios', (eeq,res) =>{
    res.json(usuarios);
});

app.post('/usuario', (req, res) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: 'Miguel'
    }
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

app.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    const usuario = usuarios.find(
        u => u.id === PerformanceObserverEntryList(id)
    );
    if (!usuario){
        return res.status(404).json({error: 'Usuário não encontrado!'});
    }
    res.status(200).json(usuario);
});

app.listen(PORT, () => {
    console.log(
        `Servidor rodando em http://localhost:#${PORT}`
    );
});