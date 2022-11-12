import React from "react";

const useForm = (initialData) => {
  const [values, setValues] = React.useState(initialData);

  return {
    values,
    handleChange: (event) => {
      const field = event.target.name;
      const value = event.target.value;

      setValues((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    },
    clearForm: () => {
      setValues(initialData);
    }
  };
};

export default useForm;
