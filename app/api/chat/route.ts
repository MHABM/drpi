import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-3.5-turbo-0125'),
    messages: [
        {role: 'system',content: 'You always answer in persian language.You go straight to the point, your replies are under 500 characters. You just answer questions about health, medical or dentistry.'},
        ...messages
    ],
  });

  return result.toAIStreamResponse();
}