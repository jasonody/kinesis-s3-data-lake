const uuid = require('uuid')
const AWS = require('aws-sdk')

const kinesis = new AWS.Kinesis()

module.exports.publish = async (event, context) => {

  const streamEvent = {
    id: uuid.v1(),
    type: 'some-event',
    timestamp: Date.now(),
    item: {
      id: uuid.v4(),
      some: 'attibute',
      another: 'value',
      random: Math.random()
    }
  };

  const params = {
    StreamName: process.env.STREAM_NAME,
    PartitionKey: streamEvent.item.id,
    Data: new Buffer.from(JSON.stringify(streamEvent)),
  };

  console.log('params: %j', params);

  return kinesis.putRecord(params).promise()
}