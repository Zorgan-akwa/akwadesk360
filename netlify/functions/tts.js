// TTS handled entirely by Browser Speech Recognition — no remote API needed.
exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }
  // Return 204 so the client falls back to browser speech
  return { statusCode: 204, body: '' };
};
