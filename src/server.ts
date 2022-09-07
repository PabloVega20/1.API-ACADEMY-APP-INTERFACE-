import express from 'express'
import compression from 'compression'
import cors from 'cors'
import { createServer } from 'http'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema'
import expressPlayGround  from 'graphql-playground-middleware-express'

const app = express()

app.use('*', cors());
app.use(compression());

async function startServer() {
    const servidor = new ApolloServer({
        schema,
        introspection: true
    })
    await servidor.start()
    servidor.applyMiddleware({app})
}
startServer()

app.get('/', expressPlayGround({
    endpoint: '/graphql'
}))

const httpServer = createServer(app)

const PORT = 5400
httpServer.listen(
    {
        port: PORT
    },
    () => console.log(`Servidor academia online listo http://localhost:${PORT}`)
)