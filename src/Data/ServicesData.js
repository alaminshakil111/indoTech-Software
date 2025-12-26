// import card image
import service1 from "../assets/images/services/itmanaged/managed-services23.jpg";
import service2 from "../assets/images/services/softwareDev/2e0700b919ea0ac80b9f6cb6f05813aa.jpg";
import service3 from "../assets/images/services/artifficial/developer-ai-349.png";
import service4 from "../assets/images/services/zeroTrust/photo-1550751827-4bd374c3f58b.avif";
import consultancy1 from "../assets/images/consultancy/business/businessBanner.jpg";
import networkImg from "../assets/images/solutions/cloud/data-network.bb164a19166923a514ba.jpg";

// import banner image

import developerAi from "../assets/images/services/artifficial/developer-ai-349.png";
import softwareBanner from "../assets/images/services/softwareDev/softwareBanner.avif";
import ictManaged from "../assets/images/services/itmanaged/ictmanagedBanner.jpg";
import zeroTrustBanner from "../assets/images/services/zeroTrust/photo-1550751827-4bd374c3f58b.avif";
import consultancyBanner from "../assets/images/consultancy/business/photo-1551135049-83f3419ef05c.avif";

// import tab details image
import aiMl from "../assets/images/services/artifficial/ai&ml.jpg";
import business from "../assets/images/services/artifficial/business&workflow.png";
import RPA from "../assets/images/services/artifficial/RPA.jpg";
import chatbots from "../assets/images/services/artifficial/chatbots.png";

import network from "../assets/images/services/itmanaged/network.png";
import security from "../assets/images/services/itmanaged/security.avif";
import cloudehosting from "../assets/images/services/itmanaged/cloudehosting.webp";
import helpdesk from "../assets/images/services/itmanaged/helpdesk.jpg";
import backupRecovery from "../assets/images/services/itmanaged/backup-disaster-recovery.png";
import itconsulting from "../assets/images/services/itmanaged/itconsulting.jpg";

import identitySecurity from "../assets/images/services/zeroTrust/identitySecurity.webp";
import deviceSecurity from "../assets/images/services/zeroTrust/deviceSecurity.jpg";
import microsegment from "../assets/images/services/zeroTrust/microsegment.jpg";
import apllicationSecurity from "../assets/images/services/zeroTrust/apllicationSecurity.jpg";
import dataSecurity from "../assets/images/services/zeroTrust/dataSecurity.webp";
import analiticsMonitoring from "../assets/images/services/zeroTrust/analiticsMonitoring.avif";

import marketing from "../assets/images/consultancy/business/marketing.jpg";
import overseas from "../assets/images/consultancy/business/overseas.jpg";
import operation from "../assets/images/consultancy/business/operation.jpg";

import webImage from "../assets/images/software/Web-Development.jpg";
import appsImage from "../assets/images/software/mobile-dev.jpg";

export const servicesData = [
    {
    id: "service-IctManagedServices",
    img: service1,
    bannerImg: ictManaged,
    title: "ICT Managed Services",
    subtitle:
      "We aim to foster a stable, secure and scalable IT environment where your operations run smoothly, your teams stay productive and your technology continuously supports your business growth. Our managed services take full ownership of your IT ecosystem so you can stay focused on your core goals.",
    details: {
      "Network Management": {
        heading: "Network Management",
        para1:
          "We deliver reliable, high-performance network solutions that keep your business connected and scalable. From LAN/WAN design to monitoring and optimization, we ensure uninterrupted operations.",

        faq: [
          {
            question:
              "Can you maintain a stable network across multiple locations?",
            answer:
              "Yes. We design resilient networks with redundancy, load balancing and monitoring for seamless connectivity.",
          },
          {
            question: "How do you prevent downtime or outages?",
            answer:
              "Our 24/7 monitoring, proactive alerts and automated issue detection minimize disruptions.",
          },
          {
            question: "Can the network scale as the business grows?",
            answer:
              "Yes. We implement modular, cloud-ready architectures and capacity planning.",
          },
        ],

        strengths: {
          title: "Our Strengths",
          items: [
            "Expertise in LAN/WAN, Wi-Fi, SD-WAN and hybrid networks",
            "Real-time monitoring and automated alert systems",
            "Scalable, high-performance network design",
            "Integration with cloud and on-premise environments",
          ],
        },

        support: {
          title: "Support Assurance",
          items: [
            "24/7 network monitoring and troubleshooting",
            "Performance optimization and maintenance",
            "Rapid issue resolution and reporting",
          ],
        },

        img: network,
      },

      "Security Management": {
        heading: "Security Management",

        para1:
          "We protect your IT environment with advanced security solutions, threat monitoring and compliance-focused management. Our proactive approach reduces risks and ensures business continuity.",

        faq: [
          {
            question: "How can we secure our network against cyber threats?",
            answer:
              "We implement firewalls, IDS/IPS, VPNs, endpoint protection and continuous monitoring.",
          },
          {
            question:
              "Can you detect and respond to security incidents quickly?",
            answer:
              "Yes. Our SOC-driven approach ensures rapid incident response and mitigation.",
          },
          {
            question: "Will this help us meet compliance standards?",
            answer:
              "Yes. We follow global standards and frameworks, including ISO, GDPR and industry-specific regulations.",
          },
        ],

        strengths: {
          title: "Our Strengths",
          items: [
            "Full-layer network security solutions",
            "Continuous vulnerability scanning and risk assessments",
            "Incident response and threat intelligence integration",
            "Compliance-driven policies and audits",
          ],
        },

        support: {
          title: "Support Assurance",
          items: [
            "Real-time threat monitoring and alerting",
            "Security patching and configuration updates",
            "Rapid incident response and reporting",
          ],
        },

        img: security,
      },

      "Cloud Services & Hosting": {
        heading: "Cloud Services & Hosting",
        para1:
          "We offer secure, scalable and optimized cloud solutions, from migration to ongoing management. Hosting, cloud applications and hybrid setups are delivered with performance and reliability in mind.",

        faq: [
          {
            question: "Can you migrate our systems to the cloud safely?",
            answer:
              "Yes. We plan and execute secure cloud migration with minimal downtime.",
          },
          {
            question: "How do we ensure high availability and performance?",
            answer:
              "We design redundant, auto-scaling infrastructure and monitor cloud resources continuously.",
          },
          {
            question: "Can you help control cloud costs?",
            answer:
              "Yes. We optimize resource allocation, usage patterns and plan cost-efficient deployments.",
          },
        ],

        strengths: {
          title: "Our Strengths",
          items: [
            "Expertise in AWS, Azure, Google Cloud and hybrid architectures",
            "Secure, scalable hosting and cloud service management",
            "Performance optimization and monitoring",
            "Disaster recovery integration for cloud systems",
          ],
        },

        support: {
          title: "Support Assurance",
          items: [
            "Continuous cloud monitoring and management",
            "Security updates and patching",
            "Backup and failover strategies",
            "Cost and performance optimization",
          ],
        },

        img: cloudehosting,
      },

      "Backup & Disaster Recovery": {
        heading: "Backup & Disaster Recovery",
        para1:
          "We ensure your critical data and applications are protected and quickly recoverable. Our backup and DR solutions minimize business impact during failures.",

        faq: [
          {
            question: "How can we protect our data from loss or corruption?",
            answer:
              "We implement automated, encrypted and verifiable backup solutions.",
          },
          {
            question: "How quickly can systems be restored after a disaster?",
            answer:
              "Our tested disaster recovery plans allow rapid restoration with minimal downtime.",
          },
          {
            question: "Can backups be compliant and auditable?",
            answer:
              "Yes. We maintain full compliance with industry and regulatory requirements.",
          },
        ],

        strengths: {
          title: "Our Strengths",
          items: [
            "Automated, encrypted backups for on-premise and cloud systems",
            "Tested disaster recovery and failover plans",
            "Data integrity monitoring and verification",
            "Scalable backup architecture for growing businesses",
          ],
        },

        support: {
          title: "Support Assurance",
          items: [
            "Scheduled backup verification and reporting",
            "Rapid disaster recovery execution",
            "Continuous monitoring and alerting for failures",
          ],
        },

        img: backupRecovery,
      },

      "IT Strategy & Consulting": {
        heading: "IT Strategy & Consulting",

        para1:
          "We help organizations align technology with business goals, optimize IT investments and plan for long-term growth. Our consulting delivers measurable impact and strategic insights.",

        faq: [
          {
            question: "How do we plan IT investments effectively?",
            answer:
              "We analyse current infrastructure, evaluate risks and deliver actionable roadmaps.",
          },
          {
            question: "Can you align IT with business goals?",
            answer:
              "Yes. We bridge the gap between technical solutions and strategic objectives.",
          },
          {
            question: "How do we plan for future technology changes?",
            answer:
              "We provide long-term IT strategy, digital transformation guidance and best practice recommendations.",
          },
        ],

        strengths: {
          title: "Our Strengths",
          items: [
            "Comprehensive IT assessment and audits",
            "Strategic planning for infrastructure, cloud and security",
            "Technology alignment with business objectives",
            "Expertise in digital transformation and optimization",
          ],
        },

        support: {
          title: "Support Assurance",
          items: [
            "Regular strategy reviews and updates",
            "Guidance on emerging technologies",
            "Recommendations for cost-effective IT solutions",
          ],
        },

        img: itconsulting,
      },

      "Helpdesk & Support": {
        heading: "Helpdesk & Support",
        para1:
          "We provide responsive, multi-channel technical support that ensures users and systems stay productive. Our helpdesk covers everything from minor troubleshooting to critical incident management.",

        faq: [
          {
            question: "How can we reduce downtime for our employees?",
            answer:
              "Our 24/7 helpdesk ensures fast issue detection, escalation and resolution.",
          },
          {
            question: "Can support cover multiple IT systems and applications?",
            answer:
              "Yes. We provide end-to-end support across networks, cloud, security and endpoints.",
          },
          {
            question: "Can support be tracked and measured?",
            answer:
              "Yes. We provide SLA-based ticketing, reporting and performance metrics.",
          },
        ],

        strengths: {
          title: "Our Strengths",
          items: [
            "Multi-level support (L1/L2/L3) across all IT systems",
            "Remote and on-site troubleshooting",
            "SLA-driven incident management",
            "Ticketing, reporting and performance dashboards",
          ],
        },

        support: {
          title: "Support Assurance",
          items: [
            "24/7 availability and rapid response",
            "Continuous system monitoring",
            "Proactive issue prevention and maintenance",
            "Regular reports and performance analytics",
          ],
        },

        img: helpdesk,
      },
    },
  },


  {
    id: "service-AI&Automation",
    img: service3,
    bannerImg: developerAi,
    title: "AI & Automation",
    subtitle:
      "We deliver intelligent, data-driven solutions that automate workflows, improve decision-making and enhance productivity. Our AI systems are built with strong backend engineering, scalable cloud architecture and modern machine learning frameworks. Whether you want predictive analytics, automated business processes or virtual assistants—we design solutions that create measurable value.",
    details: {
      "AI Software & Machine Learning": {
        heading: "AI Software & Machine Learning",

        para1:
          "We build custom AI and Machine Learning systems that analyse data, make predictions, automate decision-making and adapt over time. Our solutions integrate seamlessly with your existing applications through secure APIs and scalable infrastructure.",

        faq: [
          {
            question: "We want to leverage AI but don’t know where to start.",
            answer:
              "We help you identify use cases, define measurable goals and create a clear AI roadmap.",
          },
          {
            question: "Can you build AI that works with our current systems?",
            answer:
              "Yes. We integrate ML models into your applications through REST APIs, microservices or standalone services.",
          },
          {
            question: "Can your AI models handle large datasets?",
            answer:
              "Absolutely. We use scalable data pipelines, distributed trainingand optimized storage strategies.",
          },
          {
            question: "Will the model improve over time?",
            answer:
              "Yes. We implement retraining pipelines, continuous learning and performance monitoring.",
          },
          {
            question: "Are AI-driven decisions secure and compliant?",
            answer:
              "Yes. We follow strict data governance, anonymization, encryption and compliance frameworks.",
          },
        ],

        strengths: {
          title: "Our Strengths in AI & Machine Learning",
          items: [
            "Expertise in Python, TensorFlow, PyTorch, Scikit-learnand ML Ops",
            "Ability to convert raw data into production-ready predictive models",
            "Secure and scalable backend integrations using Springboot microservices",
            "Advanced analytics: forecasting, anomaly detection, classification, NLP",
            "End-to-end ML lifecycle management including data cleaning, training, evaluation and deployment",
          ],
        },

        support: {
          title: "Support Assurance (AI & ML)",
          items: [
            "Model performance monitoring and drift detection",
            "Scheduled model retraining and optimization",
            "Data quality audits and pipeline health checks",
            "Continuous feature enhancements based on new business needs",
          ],
        },

        img: aiMl,
      },

      "Business & Workflow Automation": {
        heading: "Business & Workflow Automation",
        para1:
          "We automate repetitive tasks, streamline internal processes and reduce operational costs using intelligent automation frameworks. From simple workflow triggers to fully automated business systems, we design solutions that eliminate manual work and improve efficiency.",

        faq: [
          {
            question:
              "Our internal processes are slow and manual—can you automate them?",
            answer:
              "Yes. We analyse your workflow, identify bottlenecks and automate tasks using custom logic, APIs and automation tools.",
          },
          {
            question:
              "Can automation work across multiple systems like CRM, ERP, HRM or custom software?",
            answer:
              "Yes. We build integrations across different platforms through APIs, webhooks and middleware.",
          },
          {
            question: "Will automation reduce human errors?",
            answer:
              "Yes. Automated workflows ensure consistent and error-free execution.",
          },
          {
            question: "Can you automate document processing or approvals?",
            answer:
              "Yes. We implement automated forms, rule engines, OCR and approval pipelines.",
          },
          {
            question: "Can we track everything in real time?",
            answer:
              "Yes. Dashboards, notifications, analytics and logs are included for full visibility.",
          },
        ],

        strengths: {
          title: "Our Strengths in Business Automation",
          items: [
            "API-driven automation with Springboot microservices and cloud functions",
            "React/Next.js dashboards for real-time workflow visibility",
            "Integration with CRMs, ERPs, HR systems, ticketing tools and communication platforms",
            "Custom rule engines for decision-making",
            "Workflow optimizations that improve speed and reduce costs",
          ],
        },

        support: {
          title: "Support Assurance (Automation)",
          items: [
            "Monitoring of automated tasks and logs",
            "Quick resolution of failures or bottlenecks",
            "Regular updates based on new processes",
            "Scalable improvements as your operations grow",
          ],
        },

        img: business,
      },

      "Virtual Assistants (AI Agents & Chatbots)": {
        heading: "Virtual Assistants (AI Agents & Chatbots)",

        para1:
          "We develop intelligent virtual assistants that automate customer support, streamline internal operations and improve user engagement. Our AI agents can respond, process information, understand natural language and integrate with your backend systems in real time.",

        faq: [
          {
            question:
              "Can you create a virtual assistant tailored to our business?",
            answer:
              "Yes. We design AI assistants that understand your workflows, FAQs, products and operations.",
          },
          {
            question: "Can the assistant handle both text and voice?",
            answer:
              "Yes. We support chatbots, voicebots and multi-channel assistants.",
          },
          {
            question:
              "Can it integrate with our CRM, database or internal tools?",
            answer:
              "Yes. We connect assistants to APIs, knowledge bases and custom systems.",
          },
          {
            question: "Will the assistant improve as customers use it?",
            answer:
              "Yes. We use continuous learning, feedback loops and analytics-based improvements.",
          },
          {
            question:
              "Can the AI handle secure actions like ticket creation or order status checks?",
            answer:
              "Yes. We implement authentication, access control and encrypted communication.",
          },
        ],

        strengths: {
          title: "Our Strengths in Virtual Assistants",
          items: [
            "NLP models using modern LLM technologies",
            "Integration with Java-based backend services for secure data handling",
            "Multi-channel deployment (web, mobile app, WhatsApp, Messenger, email)",
            "Custom knowledge bases, FAQs and workflow integration",
            "Analytics dashboards built with React/Next.js",
          ],
        },

        support: {
          title: "Support Assurance (Virtual Assistants)",
          items: [
            "Conversation analytics and optimization",
            "Regular training data updates",
            "Bug fixes and continuous performance tuning",
            "Feature expansions based on customer usage patterns",
          ],
        },

        img: chatbots,
      },
    },
  },

  {
    id: "service-SoftwareDevelopment",
    img: service2,
    bannerImg: softwareBanner,
    title: "Software Development",
    subtitle:
      "We deliver professional, reliable and scalable software solutions powered by a clean Java based backend architecture and a modern React/Next.js frontend stack. Our development process includes automated testing, CI/CD pipelines and a predictable delivery workflow. We transform client requirements into production-ready applications supported by long-term maintenance and continuous improvement.",
    details: {
      "Web Development": {
        heading: "Web Development",
        para1:
          "We build responsive, fast and secure web applications using React, Next.js and Springboot. Whether you need a corporate website, SaaS platform, dashboard or eCommerce solution—we deliver high-performance, scalable and maintainable systems.",

        faq: [
          {
            question: "Can you make our website fast and SEO-friendly?",
            answer:
              "Yes. We optimize performance, implement structured data, follow SEO and Core Web Vitals best practices.",
          },
          {
            question: "Will our website work smoothly on all devices?",
            answer:
              "Yes. We ensure responsive layouts, adaptive UI and full cross-browser compatibility.",
          },
          {
            question:
              "Can you integrate payment gateways, CRM, ERP or other APIs?",
            answer:
              "Yes. We handle REST and GraphQL APIs, OAuth authentication and enterprise-level integrations.",
          },
          {
            question:
              "Will we get admin panels or dashboards to manage content?",
            answer:
              "Yes. We develop custom admin portals or implement a headless CMS based on your needs.",
          },
        ],

        strengths: {
          title: "Our Strengths in Web Development",
          items: [
            "Strong Java based backend and React/Next.js frontend capability",
            "Clean and scalable architecture",
            "DevOps excellence: CI/CD pipelines, Docker, Kubernetes, monitoring and cloud deployment",
            "Complete documentation (API docs, UI component guidelines, deployment guides)",
            "Automated and manual testing for high-quality delivery",
          ],
        },
        support: {
          title: "Support Assurance (Web)",
          items: [
            "Continuous performance monitoring",
            "Regular security patching and updates",
            "Backup and disaster recovery plans",
            "On-demand enhancements and feature upgrades",
          ],
        },

        img: webImage,
      },

      "Mobile App Development": {
        heading: "Mobile App Development",

        para1:
          "We build native and cross-platform mobile apps with high performance, intuitive UX and secure backend integrations. From prototyping to app store release, we manage the full lifecycle.",

        faq: [
          {
            question: "Should we build native or cross-platform?",
            answer:
              "We recommend the best option based on your budget, timeline, performance expectations and device feature requirements.",
          },
          {
            question: "How do you ensure the app performs well on all devices?",
            answer:
              "We test across multiple real devices, optimize memory usage and follow native UI/UX guidelines.",
          },
          {
            question: "Can the app work offline?",
            answer:
              "Depending on your need we implement offline mode, local caching, background sync and efficient data handling.",
          },
          {
            question: "Will you handle App Store/Play Store submission?",
            answer:
              "Yes. We manage metadata, screenshots, policies, guidelines and the full approval process.",
          },
          {
            question:
              "Can you integrate real-time features such as chat, tracking or notifications?",
            answer:
              "Yes. We integrate real-time chat, tracking, notifications and more using Firebase, WebSockets and real-time data syncing.",
          },
        ],

        strengths: {
          title: "Our Strengths in Mobile Development",
          items: [
            "Expertise in Swift (iOS), Java (Android), Flutter and React Native",
            "Clean, maintainable and scalable architecture",
            "Strong backend API integration powered by Java services",
            "Device-level optimization and secure local storage strategies",
            "Full lifecycle support—from MVP to long-term maintenance",
          ],
        },

        support: {
          title: "Support Assurance (Mobile)",
          items: [
            "Crash analytics monitoring (Firebase Crashlytics, Sentry)",
            "Ongoing OS compatibility updates",
            "Performance audits and issue resolution",
            "Continuous feature rollout and improvement strategy",
          ],
        },
        img: appsImage,
      },
    },
  },
  {
    id: "service-zerotrustsecurity",
    img: service4,
    bannerImg: zeroTrustBanner,
    title: "Zero Trust Security",
    subtitle:
      "We help organizations implement Zero Trust principles to secure users, devices, applications and data. By continuously verifying identities and controlling access, we reduce risk, prevent breaches and protect critical assets.",
    details: {
      "Identity Security": {
        heading: "Identity & Access Control",
        para1:
          "We ensure only authorized users access your systems by implementing strong identity verification, access policies and continuous authentication.",
        faq: [
          {
            question:
              "How can we make sure only legitimate users access our systems?",
            answer:
              "We implement multi-factor authentication (MFA), adaptive authentication and conditional access policies.",
          },
          {
            question:
              "Can we integrate identity management with both cloud and on-premise systems?",
            answer:
              "Yes. We support hybrid environments, SSO and identity federation.",
          },
          {
            question:
              "How do we monitor user activity for suspicious behaviour?",
            answer:
              "We track login patterns, privilege use and abnormal activities in real time.",
          },
        ],

        strengths: {
          title: "Our Strengths",
          items: [
            "Expertise in Azure AD, Okta and other IAM platforms",
            "MFA, SSO and role-based access control implementation",
            "Continuous identity verification and anomaly detection",
            "Integration across cloud, on-premand hybrid environments",
          ],
        },

        support: {
          title: "Support Assurance",
          items: [
            "Real-time alerts for suspicious access",
            "Regular policy updates and compliance checks",
            "User activity reporting and auditing",
          ],
        },
        img: identitySecurity,
      },

      "Device Security": {
        heading: "Device Verification & Compliance",
        para1:
          "We protect all endpoints, ensuring devices comply with security policies and reduce risks of compromise.",
        faq: [
          {
            question: "How can we secure laptops, desktops and mobile devices?",
            answer:
              "We implement endpoint protection, encryption, device posture checks and remote management.",
          },
          {
            question: "Can devices be verified before accessing the network?",
            answer:
              "Yes. We enforce device compliance as part of access policies.",
          },
          {
            question: "How do we respond if a device is compromised?",
            answer:
              "Compromised devices are quarantined, blocked and remediated automatically.",
          },
        ],
        strengths: {
          title: "Our Strengths",
          items: [
            "Endpoint protection platforms and MDM solutions",
            "Device compliance checks and conditional access enforcement",
            "Automated threat detection and remediation",
            "Integration with overall Zero Trust architecture",
          ],
        },

        support: {
          title: "Support Assurance",
          items: [
            "Continuous device monitoring and alerting",
            "Regular security updates and patching",
            "Device risk reporting and management",
          ],
        },
        img: deviceSecurity,
      },

      "Network Security (Micro-Segmentation)": {
        heading: "Network Control & Limited Access Zones",
        para1:
          "We secure your network by dividing it into segments, limiting lateral movement and continuously verifying traffic between workloads.",
        faq: [
          {
            question:
              "How can we prevent lateral movement of threats within our network?",
            answer:
              "We implement micro-segmentation, strict access policies and traffic monitoring.",
          },
          {
            question: "Will this work with existing network infrastructure?",
            answer:
              "Yes. We integrate segmentation with firewalls, switches and SDN platforms.",
          },
          {
            question: "How do we monitor and control internal traffic?",
            answer:
              "Continuous traffic inspection, policy enforcement and anomaly detection are applied.",
          },
        ],
        strengths: {
          title: "Our Strengths",
          items: [
            "Micro-segmentation using modern network controls",
            "Policy-based access enforcement between segments",
            "Integration with firewalls, SDN and cloud networks",
            "Real-time monitoring of internal network flows",
          ],
        },

        support: {
          title: "Support Assurance",
          items: [
            "Continuous network traffic monitoring",
            "Rapid policy updates and threat mitigation",
            "Detailed segmentation reports and compliance tracking",
          ],
        },
        img: microsegment,
      },

      "Application Security": {
        heading: "Secure App Access & API Protection",
        para1:
          "We secure applications from development to deployment, protecting against vulnerabilities, attacks and unauthorized access.",
        faq: [
          {
            question: "How do we secure web and mobile applications?",
            answer:
              "We apply secure coding practices, penetration testing and vulnerability scanning.",
          },
          {
            question: "Can security be integrated into our DevOps pipeline?",
            answer:
              "Yes. We implement DevSecOps with automated scanning and policy checks.",
          },
          {
            question: "How do we maintain security over time?",
            answer:
              "Continuous monitoring, patching and code reviews ensure lasting protection.",
          },
        ],
        strengths: {
          title: "Our Strengths",
          items: [
            "DevSecOps integration with CI/CD pipelines",
            "Vulnerability scanning and automated remediation",
            "Application firewalls and runtime protection",
            "Secure coding and threat modeling expertise",
          ],
        },

        support: {
          title: "Support Assurance",
          items: [
            "Ongoing vulnerability management and patching",
            "Security monitoring dashboards",
            "Application threat analytics and reporting",
          ],
        },
        img: apllicationSecurity,
      },

      "Data Security": {
        heading: "Data Protection & Access Control",
        para1:
          "We protect sensitive data at rest, in transit and in use with encryption, classification and access control.",
        faq: [
          {
            question:
              "How can we protect sensitive corporate and customer data?",
            answer:
              "We use encryption, tokenization, masking and access policies.",
          },
          {
            question:
              "Can data protection extend to cloud and hybrid environments?",
            answer:
              "Yes. We secure data across on-prem, cloud and hybrid systems.",
          },
          {
            question: "How do we monitor data usage for unauthorized access?",
            answer:
              "Real-time monitoring, audit logs and alerts detect unusual data activity.",
          },
        ],
        strengths: {
          title: "Our Strengths",
          items: [
            "Data classification, encryptionand tokenization",
            "Access control based on roles and Zero Trust principles",
            "Data loss prevention (DLP) integration",
            "Secure data handling across cloud and on-prem systems",
          ],
        },

        support: {
          title: "Support Assurance",
          items: [
            "Continuous monitoring of data access and usage",
            "Regular audits and compliance checks",
            "Alerts for suspicious data access or exfiltration",
          ],
        },
        img: dataSecurity,
      },

      "Analytics & Monitoring": {
        heading: "Continuous Monitoring & Threat Detection",
        para1:
          "We provide continuous visibility and intelligence across identities, devices, networks, applications and data to ensure proactive security and compliance.",
        faq: [
          {
            question: "How can we gain visibility into all security events?",
            answer:
              "We implement centralized logging, SIEM and real-time analytics dashboards.",
          },
          {
            question:
              "Can analytics help detect anomalies before they become threats?",
            answer:
              "Yes. We use behavioral analytics, machine learning and correlation rules to detect early threats.",
          },
          {
            question: "How can we report on security posture for compliance?",
            answer:
              "We provide automated reports, dashboards and audit-ready documentation.",
          },
        ],
        strengths: {
          title: "Our Strengths",
          items: [
            "Centralized monitoring of users, devices, applications and networks",
            "SIEM, analytics and alerting platforms",
            "Behavioral analytics and anomaly detection",
            "Audit and compliance reporting",
          ],
        },

        support: {
          title: "Support Assurance",
          items: [
            "24/7 monitoring and alerting",
            "Regular security posture reviews",
            "Threat detection and continuous improvement",
          ],
        },
        img: analiticsMonitoring,
      },
    },
  },

  {
    id: "business",
    img: consultancy1,
    bannerImg: consultancyBanner,
    title: "Business Consultancy",
    subtitle:
      "We help businesses grow strategically by providing expert guidance across IT marketing, international expansion and operational management. Our consultancy services combine industry insight, practical experience and actionable strategies to achieve measurable results.",
    details: {
      "Marketing Support": {
        heading: "IT Marketing Support",
        para1:
          "We assist companies in planning, executing and optimizing IT marketing strategies to reach target audiences, generate leads and improve brand visibility.",

        faq: [
          {
            question:
              "How can we increase visibility for our IT products or services?",
            answer:
              "We create targeted digital marketing campaigns, SEO strategies and social media outreach to reach the right audience.",
          },
          {
            question: "Can you help generate qualified leads for our business?",
            answer:
              "Yes. We use lead generation strategies, CRM integration and marketing automation to attract high-value prospects.",
          },
          {
            question: "How do we measure the success of marketing activities?",
            answer:
              "We provide analytics, performance dashboards and KPI tracking for continuous optimization.",
          },
        ],

        strengths: {
          title: "Our Strengths",
          items: [
            "Expertise in digital marketing for IT products and services",
            "SEO, SEM, content marketing and social media campaigns",
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
              "We provide end-to-end guidance on company formation, local regulations, licensing and documentation.",
          },
          {
            question: "Can you help identify viable markets for expansion?",
            answer:
              "Yes. We perform market research, competitor analysis and opportunity assessments.",
          },
          {
            question:
              "How do we ensure compliance with local laws and regulations?",
            answer:
              "We provide legal and regulatory advisory, including tax, labour and corporate compliance support.",
          },
        ],

        strengths: {
          title: "Our Strengths",
          items: [
            "Expertise in international business regulations and company setup",
            "Market research and strategic expansion planning",
            "Compliance advisory and legal coordination",
            "Guidance for establishing local offices, subsidiaries or partnerships",
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
          "We optimize business processes, improve operational efficiency and implement systems that enhance productivity and reduce costs.",

        faq: [
          {
            question: "How can we streamline our business operations?",
            answer:
              "We analyse workflows, identify bottlenecks and implement process improvements and automation solutions.",
          },
          {
            question: "Can you help improve overall productivity?",
            answer:
              "Yes. We introduce tools, dashboards and operational KPIs to monitor and enhance performance.",
          },
          {
            question: "How do we manage risk and ensure smooth operations?",
            answer:
              "We implement risk management frameworks, SOPs and process governance to maintain operational stability.",
          },
        ],

        strengths: {
          title: "Our Strengths",
          items: [
            "Expertise in process optimization and operational efficiency",
            "Implementation of management systems, dashboards and KPIs",
            "Risk management, compliance and governance frameworks",
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