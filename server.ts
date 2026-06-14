/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const port = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Configure server-side Gemini API client safely
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = new GoogleGenAI({
    apiKey: apiKey || '',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  // Server-side path proxy for secure AI Assistant
  app.post('/api/gemini/chat', async (req, res) => {
    try {
      const { message, previousMessages } = req.body;
      if (!apiKey) {
        return res.status(200).json({ 
          text: "Hello! I am Elite AI assistant. The dental clinic's Gemini API key is currently not configured, but you can configure it under Settings > Secrets. In the meantime, I am happy to chat with you! Our senior surgeons and elite clinical team specialize in gorgeous smiles, implants, and clear aligners." 
        });
      }

      // Reconstruct prompt with system context and conversation history
      const systemInstruction = 
        "You are Dr. Elite AI, the expert virtual assistant for Elite Dental Clinic in Chennai, India, led by our senior aesthetic dentist and chief implant surgeon. " +
        "You are professional, hygienic, warm, and highly informative. " +
        "Help answer dental questions, detail services offered (e.g. Laser Dentistry, Dental Implants, Clear Invisible Aligners, Teeth Whitening/Bleaching, Wisdom Tooth Painless Removal, Pediatric Dental Care & Root Canals), " +
        "give useful prevention checklists, and encourage patients to schedule a consultation with our dental team. " +
        "The clinic's contact details: WhatsApp at +91 99625 96979. " +
        "Ensure advice is helpful but carries a gentle, clinical disclaimer that physical visits are recommended.";

      const contents = [];
      if (previousMessages && previousMessages.length > 0) {
        for (const msg of previousMessages) {
          contents.push({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.text }]
          });
        }
      }
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error("Gemini proxy error:", err);
      res.status(500).json({ error: err.message || "Failed to generate health advice." });
    }
  });

  // Enable Hot-Module Replacement compatible Vite middleware in non-prod
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve production assets from the Vite output
    app.use(express.static(path.join(process.cwd(), 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Elite Dental Server listening on port ${port}`);
  });
}

startServer();
