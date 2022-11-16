import React from "react";

const useForm = (initialData) => {
  const [values, setValues] = React.useState(initialData);

  return {
    values,
    handleChange: ({ target: { name, value } }) => {
      const field = name;

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
