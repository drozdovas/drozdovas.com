import { BlogPost } from '../types';

export const nextjsDeployment: BlogPost = {
  id: '0',
  slug: 'nextjs-deployment-guide',
  title: 'Guide to Next.js Deployment with Docker',
  date: 'January 15, 2020',
  excerpt: 'Learn how to deploy your Next.js application using Docker, including best practices and performance optimization tips.',
  content: (
    <div className="space-y-6">

      {/* Introduction */}
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 leading-relaxed">
          Docker has become the industry standard for deploying applications, and Next.js works beautifully with it.
          In this guide, we&apos;ll walk through the entire process of containerizing and deploying your Next.js application.
        </p>
      </div>

      {/* Main content sections */}
      <div className="space-y-12">
        {/* Prerequisites section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Prerequisites</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Node.js installed (version 14 or higher)
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Docker installed on your machine
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Basic understanding of Next.js
              </li>
            </ul>
          </div>
        </section>

        {/* Code example section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Setting Up Your Dockerfile</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <pre className="text-gray-300 overflow-x-auto m-0">
              <code>{`FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build`}</code>
            </pre>
          </div>
        </section>

        {/* Tips section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Performance Tips</h2>
          <div className="grid gap-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 m-0">Use Multi-Stage Builds</h3>
              <p className="text-gray-300 m-0">
                Multi-stage builds significantly reduce your final image size by excluding build dependencies.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 m-0">Optimize Caching</h3>
              <p className="text-gray-300 m-0">
                Structure your Dockerfile to maximize layer caching and speed up builds.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  ),
};