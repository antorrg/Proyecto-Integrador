const e = require('express');
const server = require('../src/app');
const session = require('supertest');
const agent = session(server);
 
 describe('Test de rutas', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status (201 created)', async ()=>{
            await agent.get('/rickandmorty/character/1').expect(201)
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            let response = (await agent.get('/rickandmorty/character/1')).text;
            response = JSON.parse(response)
            expect(response).toHaveProperty('id')
            expect(response).toHaveProperty('name')
            expect(response).toHaveProperty('species')
            expect(response).toHaveProperty('gender')
            expect(response).toHaveProperty('status')
            expect(response).toHaveProperty('origin')
            expect(response).toHaveProperty('image')
        })
        it('Si hay un error responde con status: 500', async () => {
            const response = (await agent.get('/rickandmorty/character/1000')).status;
            expect(response).toBe(500)
        })
    })
    describe('GET /rickandmorty/login', () => {
        it('Las credenciales son correctas', async () => {
            const response = (await (agent.get('/rickandmorty/login?email=abs@gmail.com&password=123456'))).body;
            expect(response.access).toBeTruthy();
        })
        it('Las credenciales son incorrectas', async () => {
            const response = (await (agent.get('/rickandmorty/login?email=mtr@rajen.com&password=sereje'))).body;
            expect(response.access).toBeFalsy();
        })
        //WebPT13b, code review con Auri.

    })
 })
