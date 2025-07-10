// src/app/page.tsx
'use client'; // This directive is crucial for client-side components in Next.js App Router

import { useState, FormEvent } from 'react';

export default function Home() {
  const [topic, setTopic] = useState<string>('');
  const [tone, setTone] = useState<string>('');
  const [platform, setPlatform] = useState<string>('');
  const [callToAction, setCallToAction] = useState<string>('');
  const [generatedPost, setGeneratedPost] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneratedPost('');
    setError(null);

    try {
      const res = await fetch('/api/generate-post', { // Call your API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic, tone, platform, callToAction }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'An unexpected error occurred.');
        return;
      }

      setGeneratedPost(data.post);
    } catch (err) {
      console.error('Frontend fetch error:', err);
      setError('Failed to connect to the server. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          ContentGenius: Social Media Post Assistant
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
              Topic/Keywords:
            </label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="e.g., New eco-friendly product launch"
              required
            />
          </div>

          <div>
            <label htmlFor="tone" className="block text-sm font-medium text-gray-700">
              Desired Tone:
            </label>
            <select
              id="tone"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="">Select a tone</option>
              <option value="enthusiastic">Enthusiastic</option>
              <option value="informative">Informative</option>
              <option value="humorous">Humorous</option>
              <option value="professional">Professional</option>
              <option value="friendly">Friendly</option>
            </select>
          </div>

          <div>
            <label htmlFor="platform" className="block text-sm font-medium text-gray-700">
              Target Platform:
            </label>
            <select
              id="platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="">Select a platform</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Instagram Caption">Instagram Caption</option>
              <option value="Twitter Tweet">Twitter (Tweet)</option>
              <option value="Facebook Post">Facebook Post</option>
              <option value="TikTok Script Idea">TikTok Script Idea</option>
            </select>
          </div>

          <div>
            <label htmlFor="callToAction" className="block text-sm font-medium text-gray-700">
              Optional Call to Action:
            </label>
            <input
              type="text"
              id="callToAction"
              value={callToAction}
              onChange={(e) => setCallToAction(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="e.g., Shop now, Learn more, Visit our website"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Generating...' : 'Generate Post'}
          </button>
        </form>

        {error && (
          <div className="mt-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
            Error: {error}
          </div>
        )}

        {generatedPost && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Generated Post:</h2>
            <textarea
              readOnly
              value={generatedPost}
              rows={8}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800 text-sm resize-none"
            ></textarea>
            <button
              onClick={() => navigator.clipboard.writeText(generatedPost)}
              className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}