import Form1 from '../components/FormPage/form1';
import Form2 from '../components/FormPage/form2';
import Form3 from '../components/FormPage/form3';
import Form4 from '../components/FormPage/form4';
import Summary from '../components/FormPage/Summary';

import backgroundForm from '../assets/backgroundForm.jpg';
import { useState } from 'react';

function FormPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    sellInfo: '',
    businessType: '',
    usp: '',
  });
  const [activeForm, setActiveForm] = useState(5);

  return (
    <div
      className="bg-white min-h-screen relative"
      style={{
        backgroundImage: `url(${backgroundForm})`,
      }}
    >
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="card card-border bg-gray-100 w-full max-w-7xl">
          <div className="card-body ">
            <ul className="steps text-black mb-8 w-full hidden sm:inline-grid ">
              <li className="step step-primary">
                <span>Business Info</span>
              </li>
              <li className={activeForm >= 2 ? 'step step-primary' : 'step'}>
                <span>Marketing Preferences</span>
              </li>
              <li className={activeForm >= 3 ? 'step step-primary' : 'step'}>
                <span>Goals</span>
              </li>
              <li className={activeForm >= 4 ? 'step step-primary' : 'step'}>
                <span>Marketing Preferences</span>
              </li>
              <li
                data-content="✓"
                className={activeForm >= 5 ? 'step step-primary' : 'step'}
              >
                <span>Summary</span>
              </li>
            </ul>

            <ul className="steps text-black mb-8 w-full sm:hidden">
              <li className="step step-primary">
                <span>🔧</span>
              </li>
              <li className={activeForm >= 2 ? 'step step-primary' : 'step'}>
                <span>📊</span>
              </li>
              <li className={activeForm >= 3 ? 'step step-primary' : 'step'}>
                <span>🎯</span>
              </li>
            </ul>
            <ul className="steps text-black mb-8 w-full sm:hidden">
              <li
                data-content="4"
                className={activeForm >= 4 ? 'step step-primary' : 'step'}
              >
                <span>📈</span>
              </li>
              <li
                data-content="✓"
                className={activeForm >= 5 ? 'step step-primary' : 'step'}
              >
                <span>📋</span>
              </li>
            </ul>

            {/* Form Container with consistent width */}
            <div className="w-full">
              <Form1
                isActive={activeForm === 1}
                formData={formData}
                activeForm={activeForm}
                setFormData={setFormData}
                setActiveForm={setActiveForm}
              />
              <Form2
                isActive={activeForm === 2}
                formData={formData}
                activeForm={activeForm}
                setFormData={setFormData}
                setActiveForm={setActiveForm}
              />
              <Form3
                isActive={activeForm === 3}
                formData={formData}
                activeForm={activeForm}
                setFormData={setFormData}
                setActiveForm={setActiveForm}
              />
              <Form4
                isActive={activeForm === 4}
                formData={formData}
                activeForm={activeForm}
                setFormData={setFormData}
                setActiveForm={setActiveForm}
              />
              <Summary
                isActive={activeForm === 5}
                formData={formData}
                activeForm={activeForm}
                setFormData={setFormData}
                setActiveForm={setActiveForm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
