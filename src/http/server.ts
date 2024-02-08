import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import websocket  from '@fastify/websocket'
import { pollResult } from './ws/poll-results'

const app = fastify()

app.register(cookie, {
secret: "polls-app-nlw", // for cookies signature
hook: 'onRequest', 
})

app.register(websocket)
app.register(createPoll),
app.register(getPoll),
app.register(voteOnPoll)

app.register(pollResult)

app.listen({port: 3333}).then(() => {
    console.log('HTTP server running on port 3333')
})