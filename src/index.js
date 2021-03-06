module.exports = {
  // Global
  EventReceiver: require('./EventReceiver'),
  EventArchivist: require('./EventArchivist'),
  EventProcessor: require('./EventProcessor'),
  StateReader: require('./StateReader'),
  // EventStores
  FileSystemEventStore: require('./EventStore/FileSystem'),
  ElasticsearchEventStore: require('./EventStore/Elasticsearch'),
  // Queues
  InMemoryQueue: require('./Queue/InMemory'), // not recommended in production
  KafkaQueue: require('./Queue/Kafka'),
  RedisQueue: require('./Queue/Redis'),
  // StateStores
  InMemoryStateStore: require('./StateStore/InMemory'), // not recommended in production
  RedisStateStore: require('./StateStore/Redis')
}
