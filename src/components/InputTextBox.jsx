const InputTextBox = ({
  label,
  inputType,
  inputStateValue,
  inputSetStateFunc,
}) => {
  return (
    <div className="flex flex-col gap-[3px]">
      <label className="text-slate-300 font-semibold text-[15px]">
        {label}
      </label>
      <input
        className="w-full outline-none px-[10px] py-[10px] bg-slate-500 rounded-md text-white"
        type={inputType}
        value={inputType === 'file' ? null : inputStateValue}
        onChange={(e) =>
          inputSetStateFunc(
            label,
            inputType === 'file' ? e.target.files[0] : e.target.value
          )
        }
      />
    </div>
  );
};

export default InputTextBox;
