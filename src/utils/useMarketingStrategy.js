import { useMutation } from '@tanstack/react-query';
import { callOpenAI } from '../api/openAi';
import { generateAllPrompts } from './prompts';

export const useMarketingStrategy = () => {
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const prompts = generateAllPrompts(formData);
      const results = {};

      for (const [key, prompt] of Object.entries(prompts)) {
        const result = await callOpenAI(prompt);
        results[key] = result;
      }

      return results; // { executive: "...", audience: "...", ... }
    },
  });

  return mutation;
};
