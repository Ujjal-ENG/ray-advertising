"use client"
import React, {useState} from "react";
import InsuranceStatusCard from "./InsuranceStatusCard";
import VehicleCountCard from "./VehicleCountCard";
import CongratulationsCard from "./CongratulationsCard";

const QuestionCard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleInsuranceAnswer = (answer:string|number) => {
    setAnswers({ ...answers, insured: answer });
    setCurrentStep(2);
  };

  const handleVehicleCountAnswer = (count:string|number) => {
    setAnswers({ ...answers, vehicleCount: count });
    setCurrentStep(3);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {currentStep === 1 && <InsuranceStatusCard onAnswer={handleInsuranceAnswer} />}
      {currentStep === 2 && <VehicleCountCard onAnswer={handleVehicleCountAnswer} />}
      {currentStep === 3 && <CongratulationsCard />}
    </div>
  );
  };
  
  export default QuestionCard;