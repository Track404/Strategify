import OpenAI from 'openai';

const openai = new OpenAI(); // it reads the API key from process.env.OPENAI_API_KEY automatically

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Only POST allowed' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  try {
    const { prompt } = JSON.parse(event.body);

    // Use the new `client.chat.completions.create()` method:
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // or your preferred model like "gpt-4.1"
      messages: [{ role: 'user', content: prompt }],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: response.choices[0].message.content }),
      headers: { 'Content-Type': 'application/json' },
    };
  } catch (error) {
    console.error('ChatGPT error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
}
