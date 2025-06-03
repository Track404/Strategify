import { useMarketingStrategy } from '../../utils/useMarketingStrategy';
import { useEffect } from 'react';
function Summary({ isActive, formData, setActiveForm, activeForm }) {
  const mutation = useMarketingStrategy();
  const { mutate, data, isLoading } = mutation;

  const handleGenerateAll = () => {
    mutate(formData);
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem('marketingStrategy', JSON.stringify(data));
    }
  }, [data]);

  if (!isActive) return null;

  const InfoItem = ({ label, value }) => {
    if (!value) return null;
    return (
      <div className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
        <span className="text-gray-600">{label}: </span>
        <span className="font-medium text-gray-800">{value}</span>
      </div>
    );
  };

  return (
    <>
      <h1 className="text-primary font-bold text-4xl mt-4 mb-8 text-center">
        📋 Summary
      </h1>
      <button onClick={handleGenerateAll} disabled={isLoading} className="btn">
        {isLoading ? (
          <span className="loading loading-spinner text-neutral"></span>
        ) : (
          'Generate Full Strategy'
        )}
      </button>

      {data && (
        <div>
          <h2>Executive Summary</h2>
          <p>{data.executive}</p>

          <h2>Target Audience</h2>
          <p>{data.audience}</p>

          {/* etc... */}
        </div>
      )}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business Info */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-primary">Business Info</h2>
              <div className="space-y-2">
                <InfoItem label="Name" value={formData.businessName} />
                <InfoItem label="What you sell" value={formData.sellInfo} />
                <InfoItem label="Business Type" value={formData.businessType} />
                <InfoItem label="USP" value={formData.usp} />
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-primary">Target Audience</h2>
              <div className="space-y-2">
                <InfoItem
                  label="Ideal Customer"
                  value={formData.idealCustomer}
                />
                <InfoItem label="Pain Points" value={formData.painPoints} />
                <InfoItem
                  label="Age"
                  value={formData.age ? `${formData.age}` : 'No age'}
                />
                <InfoItem
                  label="Location"
                  value={
                    formData.location ? `${formData.location}` : 'No location'
                  }
                />
                <InfoItem
                  label="Job Role"
                  value={formData.jobrole ? `${formData.jobrole}` : 'No role'}
                />
              </div>
            </div>
          </div>

          {/* Goals */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-primary">Goals</h2>
              <div className="space-y-2">
                <InfoItem label="Goal" value={formData.goal} />
                <InfoItem
                  label="Preferred Time"
                  value={
                    formData.preferredTime
                      ? `${formData.preferredTime} days`
                      : null
                  }
                />
                <InfoItem
                  label="Budget"
                  value={formData.budget ? `$${formData.budget}` : 'No budget'}
                />
              </div>
            </div>
          </div>

          {/* Marketing Preferences */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-primary">Marketing Preferences</h2>
              <div className="space-y-2">
                <InfoItem
                  label="Preferred Channels"
                  value={formData.marketingChannel}
                />
                <InfoItem
                  label="Existing Audience"
                  value={formData.existingAudience}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around  mt-8 px-6">
        <button
          type="button"
          className={
            activeForm === 1
              ? 'btn btn-disabled'
              : 'btn btn-outline btn-primary'
          }
          onClick={() => setActiveForm(activeForm - 1)}
        >
          Previous
        </button>
        <button type="submit" className="btn btn-success">
          Confirm
        </button>
      </div>
    </>
  );
}

export default Summary;
