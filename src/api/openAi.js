import axios from 'axios';

export const callOpenAI = async (prompt) => {
  try {
    const res = await axios.post('/.netlify/functions/chat', {
      prompt,
    });
    return res.data;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    throw error;
  }
};
