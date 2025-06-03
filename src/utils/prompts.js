export const generateAllPrompts = (formData) => ({
  executiveSummary: `
Based on the following business information, write an Executive Summary for a marketing strategy. Include what the business does, who it serves, and a brief overview of its goals.

Business Info:
- Name: ${formData.businessName}
- What We Sell: ${formData.sellInfo}
- Type: ${formData.businessType}
- Unique Selling Proposition: ${formData.usp}

Primary Goal:
- ${formData.goal}
`,
  targetAudience: `
Create a detailed customer persona based on this target audience data. Include demographics, psychographics, key pain points, and behavior.

Target Audience Info:
- Ideal Customer: ${formData.idealCustomer}
- Pain Points: ${formData.painPoints}
- Age: ${formData.age}
- Location: ${formData.location}
- Job Role: ${formData.jobrole}
`,
  marketingObjectives: `
Using the following goal and business context, define SMART marketing objectives (Specific, Measurable, Achievable, Relevant, Time-bound).

- Business Name: ${formData.businessName}
- Goal: ${formData.goal}
- Preferred Timeline: ${formData.preferredTime} days
- Budget: $${formData.budget}
`,
  positioning: `
Based on this information, craft a positioning statement and core brand message that communicates the unique value of the business to its target audience.

- Business Type: ${formData.businessType}
- What We Sell: ${formData.sellInfo}
- Unique Selling Proposition (USP): ${formData.usp}
- Ideal Customer: ${formData.idealCustomer}
- Pain Points: ${formData.painPoints}
`,
  marketingChannels: `
Suggest the most effective marketing channels and tactics based on this business and target audience. Include organic and paid options if relevant.

- Preferred Marketing Channels: ${formData.marketingChannel}
- Existing Audience: ${formData.existingAudience}
- Budget: $${formData.budget}
- Goal: ${formData.goal}
`,
  contentStrategy: `
Based on the USP, audience, and channels, create a content strategy including types of content, formats, and themes that will resonate with the audience.

- USP: ${formData.usp}
- Ideal Customer: ${formData.idealCustomer}
- Preferred Channels: ${formData.marketingChannel}
`,
  timeline: `
Suggest a timeline and milestone plan to implement the marketing strategy effectively over the next ${formData.preferredTime} days.

Include key phases such as research, content creation, launch, and optimization.
`,
  kpi: `
What are the best Key Performance Indicators (KPIs) to track progress for the following goal?

- Goal: ${formData.goal}
- Preferred Channels: ${formData.marketingChannel}
- Budget: $${formData.budget}
- Timeline: ${formData.preferredTime} days
`,
});
