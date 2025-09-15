interface InputProps {
  textarea?: boolean;
  label: string;
}

export const Input = ({ textarea, label, ...props }: InputProps) => {
  return (
    <p>
      <label> {label} </label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
};
