import React, { useState } from "react";
import Header from "@/components/homepage_sections/Header";
import Layout from "@/components/Layout";
import MyForm from "@/components/homepage_sections/Form";
import StepIndicator from "@/components/homepage_sections/StepIndicator";
import About from "@/components/homepage_sections/About";
import TrustedBy from "@/components/homepage_sections/TrustedBy";
import Customers from "@/components/homepage_sections/Customers";

const Homepage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 5;

  const handleNextStep = (nextStep: number) => {
    setCurrentStep(nextStep);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <Header />
        <About />
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-28 pl-28">
            {Array.from({ length: totalSteps }, (_, index) => index + 1).map(
              (step) => (
                <StepIndicator
                  key={step}
                  step={step}
                  currentStep={currentStep}
                />
              )
            )}
          </div>
          <div>
            <MyForm onNextStep={handleNextStep} />
          </div>
        </div>
        <TrustedBy />
        <Customers />
      </Layout>
    </div>
  );
};

export default Homepage;
