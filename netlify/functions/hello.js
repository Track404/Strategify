export default async function handler(event, context) {
  const data = { message: 'Hello from Netlify Function!' };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
