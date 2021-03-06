const { EventReceiver, RedisQueue } = require('node-event-sourcing')
const redis = require('redis')

const receiver = new EventReceiver({
  queue: new RedisQueue(redis.createClient('6379'))
})

console.log('Simulating increments')
setInterval(() => receiver.emit({ eventType: 'increment-counter-1' }), 1000)
setInterval(() => receiver.emit({ eventType: 'increment-counter-2' }), 1500)
setTimeout(() => process.exit(0), 11000)
