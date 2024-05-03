import useForm from '../hooks/useForm';

// * Tipo que le pasaremos al hook 'FormData'.
interface FormData {
  email: string;
  name: string;
}

// ! Instead... use our custom hook 'useForm'.
const Form = () => {
  //   const [form, setForm] = useState<FormType>({
  //     email: '',
  //     name: '',
  //   });

  //   const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = target;

  //     setForm({
  //       ...form,
  //       [name]: value,
  //     });
  //   };

  const { name, email, form, handleChange } = useForm<FormData>({
    email: 'arthur@gmail.com',
    name: 'Arthur',
  });

  return (
    <form autoComplete="off" style={{ marginBottom: '23rem' }}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="name"
          className="form-control"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

export default Form;
