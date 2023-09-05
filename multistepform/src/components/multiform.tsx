import React, { useState } from "react";
import Step1 from "./step-2";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import Step5 from "./step-5";

function MultiStepForm () {
  // Step management state
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
  });

  // Helper function to move to the next step
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Helper function to move to the previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  // Render the form based on the current step
  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 4:
        return (
          <Step4
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 5:
        return (
          <Step5
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>
      <form onSubmit={handleSubmit}>
        {renderFormStep()}
        {/* Render navigation buttons */}
        {currentStep !== 1 && (
          <button type="button" onClick={prevStep}>
            Previous
          </button>
        )}
        {currentStep !== 5 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}
        {currentStep === 5 && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default MultiStepForm;
