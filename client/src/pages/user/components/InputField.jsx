const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}) => (
  <input
    type={type}
    id={name}
    name={name}
    value={value}
    onChange={onChange}
    required={required}
    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    placeholder={label}
  />
);

export default InputField;
