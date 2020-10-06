//Core
import { useState } from 'react';


export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleChange = (event) => {
    event.persist();
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    values
  }
}
