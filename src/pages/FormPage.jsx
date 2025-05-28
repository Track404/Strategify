import Form1 from '../components/FormPage/form1';
function FormPage() {
  return (
    <div className="bg-white h-screen relative hero">
      <div className="card card-border bg-gray-100 pb-5">
        <div className="card-body">
          <ul className="steps text-black">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>
          <Form1 />
        </div>
        <div className="card-actions justify-around">
          <button className="btn btn-primary ">Previous</button>
          <button className="btn btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
