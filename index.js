/**
 * Node Engine
 * Response
 * @param {object} input Parameter of object
 * @param {number} input.status Status Code
 * @param {string} input.message Message
 * @param {any} input.body Body data
 * @param {any} input.headers Header data
 * @returns {object} Response
 */
function execute(input) {
  const cloneInput = JSON.parse(JSON.stringify(input));
  if (input.body instanceof Error) {
    cloneInput.body = input.body.message;
  }

  return {
    status: cloneInput.status,
    message: cloneInput.message,
    body: cloneInput.body,
    headers: cloneInput.headers
  };
}

module.exports = {
  category: 'response',
  title: 'Response',
  description: '',
  parameters: {
    properties: {
      status: {
        type: 'number',
        description: '',
        minimum: 100,
        maximum: 599,
        example: 200
      },
      message: {
        type: 'string',
        description: '',
        example: 'Ok'
      },
      body: {
        anyOf: [
          { type: 'number' },
          { type: 'string' },
          { type: 'object' },
          { type: 'array' },
          { type: 'boolean' },
          { type: 'null' }
        ]
      },
      headers: {
        anyOf: [
          { type: 'object' },
          { type: 'null' }
        ]
      }
    },
    required: ['status', 'message']
  },
  execute
};
