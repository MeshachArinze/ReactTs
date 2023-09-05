import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import validationSchema from "./validationSchema";

interface Step1Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  nextStep: () => void;
}

const Step5: React.FC<Step1Props> = ({ formData, setFormData, nextStep }) => {
  const handleNext = () => {
    nextStep(); // Move to the next step
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values: any) => {
          setFormData(values);
          handleNext();
        }}
      >
        <form>
          <div>
            <label>First Name:</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>
          {/* Add more form fields for Step 1 */}
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </form>
      </Formik>
    </div>
  );
};

export default Step5;
