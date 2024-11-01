const ResuableForm = ({
  formTitle,
  handleSubmit,
  submitBtnText = "Submit",
}) => {
  // this is the function for getting value of input forms
  const handleLocalSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div>
      <h2>{formTitle}</h2>
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="text" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ResuableForm;
