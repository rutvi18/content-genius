// src/app/api/generate-post/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client with your API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { topic, tone, platform, callToAction } = await request.json();

    // Basic validation
    if (!topic || !tone || !platform) {
      return NextResponse.json({ error: 'Missing required fields: topic, tone, or platform' }, { status: 400 });
    }

    const ctaPhrase = callToAction ? `Encourage users to: ${callToAction}.` : "";

    const systemPrompt = `You are a creative social media content assistant. Your goal is to generate engaging and platform-appropriate social media posts. Ensure the post matches the requested tone and includes relevant emojis and hashtags where appropriate for the platform.`;

    const userPrompt = `
    Generate a social media post about: "${topic}"

    Desired Tone: ${tone}
    Target Platform: ${platform}
    ${ctaPhrase}

    Draft Post:
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o", // Or "gpt-3.5-turbo" for lower cost
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 200,
      temperature: 0.8,
    });

    return NextResponse.json({ post: response.choices[0].message.content });

  } catch (error) {
    console.error('Error generating social media post:', error);
    return NextResponse.json({ error: 'Failed to generate post.' }, { status: 500 });
  }
}