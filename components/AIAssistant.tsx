'use client';
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { useAIAssistant } from '../context/AIAssistantContext';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coursePrompt, setCoursePrompt] = useState('');
  const [suggestedCourseStructure, setSuggestedCourseStructure] = useState<string[]>([]);
  const { generateCourseOutline } = useAIAssistant();

  const handleGenerateCourseOutline = useCallback(async () => {
    try {
      const outline = await generateCourseOutline(coursePrompt);
      setSuggestedCourseStructure(outline);
    } catch (error) {
      console.error('Failed to generate course outline', error);
    }
  }, [coursePrompt, generateCourseOutline]);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Get AI Course Guidance</Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>AI Course Creation Assistant</DialogTitle>
          </DialogHeader>
          <Card>
            <CardHeader>
              <CardTitle>Course Concept Generator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  placeholder="Describe your course concept, target audience, and key objectives"
                  value={coursePrompt}
                  onChange={(e) => setCoursePrompt(e.target.value)}
                  className="h-32"
                />
                <Button onClick={handleGenerateCourseOutline} disabled={!coursePrompt.trim()}>
                  Generate Course Outline
                </Button>
                {suggestedCourseStructure.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mt-4">Suggested Course Structure:</h3>
                    <ul className="list-disc pl-5">
                      {suggestedCourseStructure.map((section, index) => (
                        <li key={index}>{section}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AIAssistant;
