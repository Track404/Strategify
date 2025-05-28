function FormButton({ setActiveForm, activeForm }) {
  return (
    <div className="flex justify-around">
      <button
        type="button"
        className={activeForm === 1 ? 'btn btn-disabled  ' : 'btn btn-primary '}
        onClick={() => setActiveForm(activeForm - 1)}
      >
        Previous
      </button>
      <button
        type="submit"
        className={activeForm === 4 ? 'btn btn-disabled  ' : 'btn btn-primary '}
      >
        next
      </button>
    </div>
  );
}

export default FormButton;
