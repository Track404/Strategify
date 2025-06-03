import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function ChatBox() {
  const [input, setInput] = useState('');

  const chatMutation = useMutation({
    mutationFn: async (input) => {
      const res = await axios.post('/.netlify/functions/chat', {
        prompt: input,
      });
      return res.data;
    },
  });

  const handleSend = () => {
    if (input.trim() === '') return;
    chatMutation.mutate(input);
  };

  return (
    <div className="p-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        className="textarea w-full mb-2"
      />
      <button
        onClick={handleSend}
        className="btn btn-primary"
        disabled={chatMutation.isPending}
      >
        {chatMutation.isPending ? 'Sending...' : 'Send'}
      </button>

      {chatMutation.isSuccess && (
        <p className="mt-4">{chatMutation.data.reply}</p>
      )}

      {chatMutation.isError && (
        <p className="mt-4 text-red-500">Error: {chatMutation.error.message}</p>
      )}
    </div>
  );
}
