const { expect } = require('chai')
const configure = require('../src/configure')

describe('Configure', () => {
  it('load default json configuration file', () => {
    const config = configure()
    expect(config.redis).to.eql({"_comment":"If you are using docker-compose replace <127.0.0.1> by <redis-server>","host": "127.0.0.1", "port": 6379})
  })
  it('load custom configuration', () => {
    const config_custom = {"custom": "value"}
    const config = configure(config_custom)
    expect(config).to.eql({"redis": {"_comment":"If you are using docker-compose replace <127.0.0.1> by <redis-server>","host": "127.0.0.1", "port": 6379}, "custom": "value"})
  })
})
