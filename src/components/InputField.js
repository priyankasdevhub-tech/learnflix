const InputField = ({ 
    label, 
    type = "text", 
    value, 
    onChange, 
    error 
  }) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          className={`peer w-full px-4 pt-6 pb-1 bg-black/60 border rounded text-white placeholder-transparent focus:outline-none
            ${error ? "border-red-600 focus:ring-white" : "border-gray-400 focus:ring-2 focus:ring-white"}`}
        />
        
        <label
          className="absolute left-4 top-2 text-gray-400 text-sm transition-all 
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
          peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm 
          peer-focus:text-white pointer-events-none"
        >
          {label}
        </label>
  
        {error && (
          <p className="text-red-600 text-sm mt-1 flex items-center">
            <span className="mr-1">❌</span> {error}
          </p>
        )}
      </div>
    );
  };
  
  export default InputField;
  