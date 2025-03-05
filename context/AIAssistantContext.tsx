'use client';
import React, { createContext, ReactNode, useContext } from 'react';
import OpenAI from 'openai';

interface AIAssistantContextType {
  generateCourseOutline: (prompt: string) => Promise<string[]>;
  generateMarketingCopy: (courseDetails: any) => Promise<string>;
  analyzeCourseMarketPotential: (courseDetails: any) => Promise<object>;
}

const AIAssistantContext = createContext<AIAssistantContextType | undefined>(undefined);

export const AIAssistantProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  
  const generateCourseOutline = async (prompt: string): Promise<string[]> => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are an expert course design AI. Generate a comprehensive, structured course outline based on the user's description.",
          },
          {
            role: "user",
            content: `Generate a detailed course outline for the following concept: ${prompt}`,
          },
        ],
        max_tokens: 500,
      });
      const outline = response.choices[0].message.content
        ?.split('\n')
        .filter((line) => line.trim() !== '') || [];
      return outline;
    } catch (error) {
      console.error('Course outline generation failed', error);
      return [];
    }
  };

  const generateMarketingCopy = async (courseDetails: any): Promise<string> => {
    // Implementation for generating marketing copy
    return '';
  };

  const analyzeCourseMarketPotential = async (courseDetails: any): Promise<object> => {
    // Implementation for market potential analysis
    return {};
  };

  return (
    <AIAssistantContext.Provider
      value={{ generateCourseOutline, generateMarketingCopy, analyzeCourseMarketPotential }}
    >
      {children}
    </AIAssistantContext.Provider>
  );
};

export const useAIAssistant = () => {
  const context = useContext(AIAssistantContext);
  if (context === undefined) {
    throw new Error('useAIAssistant must be used within an AIAssistantProvider');
  }
  return context;
};
