import FormButton from './FormButton';
import { useState } from 'react';

function Form2({ isActive, formData, setFormData, setActiveForm, activeForm }) {
  const [isChecked, setIsChecked] = useState(true);

  if (!isActive) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveForm(5);
  };

  return (
    <>
      <h1 className=" font-bold text-4xl mt-4 mb-8 text-center">
        📣 Marketing Preferences
      </h1>

      <div className="max-w-4xl mx-auto px-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Marketing Channels Card */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title text-primary mb-4">
                  Marketing Channels
                </h2>
                <div className="form-control">
                  <label htmlFor="marketingChannel" className="label">
                    <span className="label-text font-medium">
                      Which marketing channels have you tried/want to try?
                    </span>
                  </label>
                  <select
                    className="select select-bordered validator"
                    id="marketingChannel"
                    name="marketingChannel"
                    value={formData.marketingChannel}
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        marketingChannel: e.target.value,
                      })
                    }
                  >
                    <option disabled value="">
                      Choose a channel:
                    </option>
                    <option value="SEO">SEO</option>
                    <option value="Paid Ads">Paid Ads (Google/Facebook)</option>
                    <option value="Email Marketing">Email Marketing</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Influencer/Partnerships">
                      Influencer/Partnerships
                    </option>
                    <option value="Events/Webinars">Events/Webinars</option>
                  </select>
                  <p className="validator-hint">Required</p>
                </div>
              </div>
            </div>

            {/* Existing Audience Card */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title text-primary mb-4">
                  Existing Audience
                </h2>

                {/* Toggle Section */}
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-4">
                    <span className="label-text font-medium">
                      Do you have an existing audience?
                    </span>
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      aria-label="Toggle existing audience"
                    />
                    <span
                      className={`badge ${
                        isChecked ? 'badge-success' : 'badge-error'
                      }`}
                    >
                      {isChecked ? 'Yes' : 'No'}
                    </span>
                  </label>
                </div>

                {/* Textarea Section */}
                <div className="form-control">
                  <textarea
                    className="textarea textarea-bordered validator resize-none"
                    name="existingAudience"
                    id="existingAudience"
                    disabled={!isChecked}
                    required={isChecked}
                    placeholder="email list, Instagram, LinkedIn, etc"
                    pattern="^[A-Za-z0-9 .-]+$"
                    minLength="2"
                    maxLength="30"
                    rows="4"
                    value={formData.existingAudience}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        existingAudience: e.target.value,
                      })
                    }
                  />
                  <p className="validator-hint">
                    Must be 2 to 30 characters, containing only letters, numbers
                    or dash
                  </p>
                </div>
              </div>
            </div>
          </div>

          <FormButton setActiveForm={setActiveForm} activeForm={activeForm} />
        </form>
      </div>
    </>
  );
}

export default Form2;
