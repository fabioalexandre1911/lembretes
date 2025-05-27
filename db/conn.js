const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('lembretes_db', 'root', 'password', {
    host: 'localhost', // <-- verifique se o host está correto
    port: 3307, // <-- aqui pode estar o problema
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado com sucesso!')
} catch (error) {
    console.error('Erro ao conectar:', error) 
}

module.exports = sequelize