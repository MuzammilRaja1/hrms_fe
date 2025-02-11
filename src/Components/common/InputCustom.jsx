const InputCustom = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  icon: Icon,
  iconClassname,
  inputClassname,
}) => {
  return (
    <>
      <div className="relative flex items-center">
        {Icon && <Icon className="w-5 h-5 absolute left-4 text-gray-300" />}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full text-gray-800 text-sm border px-4 pl-12 py-3 rounded-md outline-customblue border-gray-300"
        />
      </div>
    </>
  );
};

export default InputCustom;
