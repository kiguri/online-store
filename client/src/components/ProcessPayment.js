import { useState } from 'react';
import ProcessSteps from './ProcessSteps';
import DeliveryForm from './DeliveryForm';
import Payments from '../components/Payments';
import PlaceOrder from '../components/PlaceOrder';

const ProcessPayment = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleStep = (direction) => {
        if (direction === 'back') {
            if (currentStep <= 1) return;
            setCurrentStep(currentStep - 1);
        }
        if (direction === 'next') {
            if (currentStep >= 3) return;
            setCurrentStep(currentStep + 1);
        }
    };

    return (
        <div className='w-full lg:w-1/2 order-2 lg:order-1'>
            <ProcessSteps currentStep={currentStep} />
            {currentStep === 1 && <DeliveryForm handleStep={handleStep} />}
            {currentStep === 2 && <Payments handleStep={handleStep} />}
            {currentStep === 3 && <PlaceOrder handleStep={handleStep} />}
        </div>
    );
};

export default ProcessPayment;
