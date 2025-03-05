import React, { useState } from 'react';

/*
  Course Creation Wizard Component
  ---------------------------------
  This component provides a step-by-step process for users to create their course.
  It is designed to be as easy and intuitive as possible, requiring minimal input from the user.
  Each step asks for essential information, and we simulate AI-generation of a course outline based on the input.
  
  Inline notes:
  - Step 1: Collect the course title.
  - Step 2: Collect a course description.
  - Step 3: Collect target audience information.
  - Step 4: Generate the course outline using simulated AI logic.
  
  Future enhancements:
  - Replace the simulated AI content generation with an actual call to an AI service.
  - Expand the number of input fields if needed and unlock more advanced options after initial setup.
*/

const CourseCreationWizard: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [courseTitle, setCourseTitle] = useState<string>('');
  const [courseDescription, setCourseDescription] = useState<string>('');
  const [targetAudience, setTargetAudience] = useState<string>('');
  const [generatedContent, setGeneratedContent] = useState<string>('');

  // Proceed to the next step
  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
  };

  // Go back to the previous step
  const handleBack = () => {
    setStep(prevStep => prevStep - 1);
  };

  // Simulate generating course content based on user inputs.
  // Replace this simulation with a real API call to an AI service as needed.
  const handleGenerateContent = () => {
    const aiOutline = `**Course Title:** ${courseTitle}\n\n` +
      `**Description:** ${courseDescription}\n\n` +
      `**Target Audience:** ${targetAudience}\n\n` +
      `**Suggested Outline:**\n1. Introduction\n2. Fundamentals\n3. Advanced Topics\n4. Practical Applications\n5. Conclusion\n\n` +
      `(This outline is auto-generated based on your inputs.)`;
    setGeneratedContent(aiOutline);
    handleNext();
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Course Creation Wizard</h2>
      
      {step === 1 && (
        // Step 1: Enter course title
        <div>
          <label className="block mb-2">Course Title:</label>
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="Enter course title"
          />
          <button onClick={handleNext} className="bg-accent text-white py-2 px-4 rounded hover-scale">
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        // Step 2: Enter course description
        <div>
          <label className="block mb-2">Course Description:</label>
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="Enter course description"
          />
          <div className="flex justify-between">
            <button onClick={handleBack} className="bg-gray-400 text-white py-2 px-4 rounded hover-scale">
              Back
            </button>
            <button onClick={handleNext} className="bg-accent text-white py-2 px-4 rounded hover-scale">
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        // Step 3: Specify target audience
        <div>
          <label className="block mb-2">Target Audience:</label>
          <input
            type="text"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="e.g., Beginners, Professionals"
          />
          <div className="flex justify-between">
            <button onClick={handleBack} className="bg-gray-400 text-white py-2 px-4 rounded hover-scale">
              Back
            </button>
            <button onClick={handleGenerateContent} className="bg-accent text-white py-2 px-4 rounded hover-scale">
              Generate Course Outline
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        // Step 4: Display the AI-generated course outline
        <div>
          <h3 className="text-2xl font-bold mb-4">Generated Course Outline</h3>
          <pre className="whitespace-pre-wrap mb-4 border border-gray-300 p-4 rounded bg-gray-50">
            {generatedContent}
          </pre>
          <div className="flex justify-between">
            <button onClick={handleBack} className="bg-gray-400 text-white py-2 px-4 rounded hover-scale">
              Back
            </button>
            <button onClick={() => alert('Course created successfully!')} className="bg-accent text-white py-2 px-4 rounded hover-scale">
              Finish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCreationWizard;
