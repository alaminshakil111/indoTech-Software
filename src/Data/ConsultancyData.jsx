// import for banner
import consultancy1 from "../assets/images/consultancy/business/businessBanner.jpg";

// import for tab details 
import marketing from "../assets/images/consultancy/business/marketing.jpg";
import overseas from "../assets/images/consultancy/business/overseas.jpg";
import operation from "../assets/images/consultancy/business/operation.jpg";

export const consultancyData = [
  {
    id: "business",
    img: consultancy1,
    title: "Business Consultancy",
    subtitle:
      "We help businesses grow strategically by providing expert guidance across IT marketing, international expansion, and operational management. Our consultancy services combine industry insight, practical experience, and actionable strategies to achieve measurable results.",
    details: {
    "Marketing Support": {
    heading: "IT Marketing Support",
    para1:
      "We assist companies in planning, executing, and optimizing IT marketing strategies to reach target audiences, generate leads, and improve brand visibility.",

    faq: [
      {
        question: "How can we increase visibility for our IT products or services?",
        answer:
          "We create targeted digital marketing campaigns, SEO strategies, and social media outreach to reach the right audience.",
      },
      {
        question: "Can you help generate qualified leads for our business?",
        answer:
          "Yes. We use lead generation strategies, CRM integration, and marketing automation to attract high-value prospects.",
      },
      {
        question: "How do we measure the success of marketing activities?",
        answer:
          "We provide analytics, performance dashboards, and KPI tracking for continuous optimization.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Expertise in digital marketing for IT products and services",
        "SEO, SEM, content marketing, and social media campaigns",
        "CRM integration and marketing automation",
        "Performance tracking and analytics for data-driven decisions",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Regular campaign performance reviews",
        "Optimization of strategies based on analytics",
        "Continuous improvement and reporting",
      ],
    },

    img: marketing,
  },

  "Overseas expansion and company establishment support": {
    heading: "Overseas Expansion & Company Establishment Support",
    para1:
      "We guide businesses through the complexities of international expansion, from market research to company registration and legal compliance.",

    faq: [
      {
        question: "How can we establish a company overseas?",
        answer:
          "We provide end-to-end guidance on company formation, local regulations, licensing, and documentation.",
      },
      {
        question: "Can you help identify viable markets for expansion?",
        answer:
          "Yes. We perform market research, competitor analysis, and opportunity assessments.",
      },
      {
        question: "How do we ensure compliance with local laws and regulations?",
        answer:
          "We provide legal and regulatory advisory, including tax, labor, and corporate compliance support.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Expertise in international business regulations and company setup",
        "Market research and strategic expansion planning",
        "Compliance advisory and legal coordination",
        "Guidance for establishing local offices, subsidiaries, or partnerships",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Continuous support during company registration",
        "Ongoing regulatory compliance monitoring",
        "Local market insights and operational guidance",
      ],
    },

    img: overseas,
  },

  "Operational Management": {
    heading: "Operational Management",
    para1:
      "We optimize business processes, improve operational efficiency, and implement systems that enhance productivity and reduce costs.",

    faq: [
      {
        question: "How can we streamline our business operations?",
        answer:
          "We analyze workflows, identify bottlenecks, and implement process improvements and automation solutions.",
      },
      {
        question: "Can you help improve overall productivity?",
        answer:
          "Yes. We introduce tools, dashboards, and operational KPIs to monitor and enhance performance.",
      },
      {
        question: "How do we manage risk and ensure smooth operations?",
        answer:
          "We implement risk management frameworks, SOPs, and process governance to maintain operational stability.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Expertise in process optimization and operational efficiency",
        "Implementation of management systems, dashboards, and KPIs",
        "Risk management, compliance, and governance frameworks",
        "Strategic guidance for long-term operational improvement",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Continuous operational monitoring and reporting",
        "Ongoing process optimization and improvement",
        "Guidance for scaling and adapting operations as the business grows",
      ],
    },

    img: operation,
  },
},

  },
];
