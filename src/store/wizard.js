import React, { useState } from "react";
export const WizardContext = React.createContext();

export const WizardProvider = ({ children, steps }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const goToStep = stepIndex => something => {
    if (stepIndex < steps.length) {
      setCurrentStepIndex(stepIndex);
    } else {
      console.log(something);
    }
  };
  return (
    <WizardContext.Provider value={{ currentStepIndex, steps, goToStep }}>
      {children}
    </WizardContext.Provider>
  );
};
