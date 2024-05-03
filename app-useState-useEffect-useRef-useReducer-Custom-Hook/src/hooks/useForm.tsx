import { useState, ChangeEvent } from 'react';

// * Para tomar en tiempo de ejecucion el tipo de dato generico que le pasamos
// * cuando hacemos uso del hook (e.g en el componente Form.tsx),
// * debemos marcarlo como tipo T (de tipo generico) en nuestro hook (ver below)
// * esta 'T' means of type generic, osea, va a ser del tipo del que le mandemos cuando hacemos
// * uso de nuestro hook (en el componente Form.tsx le pasamos que sera de tipo 'FormData'). 

// ? <T extends Object> for ES6 Arrow functions.
// ? <T> for ES5 normal functions.

const useForm = <T extends Object>(initState: T) => {
  const [form, setForm] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    handleChange,
    ...form
  };
};

export default useForm;
