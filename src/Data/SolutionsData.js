// import from local
import solution1 from "../assets/images/solutions/solution1.jpg";
import solution2 from "../assets/images/solutions/solution2.jpeg";
import solution3 from "../assets/images/solutions/solution3.jpg";
import solution4 from "../assets/images/solutions/solution4.jpg";
import solution5 from "../assets/images/solutions/solution5.jpg";
import solution6 from "../assets/images/solutions/solution6.jpg";
import solution7 from "../assets/images/solutions/solution7.jpg";
import solution8 from "../assets/images/solutions/solution8.jpg";

import identitySecurity from "../assets/images/solutions/zeroTrust/identitySecurity.webp";
import deviceSecurity from "../assets/images/solutions/zeroTrust/deviceSecurity.jpg";
import microsegment from "../assets/images/solutions/zeroTrust/microsegment.jpg";
import apllicationSecurity from "../assets/images/solutions/zeroTrust/apllicationSecurity.jpg";
import dataSecurity from "../assets/images/solutions/zeroTrust/dataSecurity.webp";
import analiticsMonitoring from "../assets/images/solutions/zeroTrust/analiticsMonitoring.avif";

import productSdWan from "../assets/images/solutions/sdWan/Product_SD_WAN.jpg";
import diySdwan from "../assets/images/solutions/sdWan/diySdwan.jpg";
import cloudSdwan from "../assets/images/solutions/sdWan/cloudSdwan.webp";
import hybridSdWan from "../assets/images/solutions/sdWan/hybrid-sd-wan.webp";

import cloudImg from "../assets/images/solutions/cloud/cloud.png";
import serverImg from "../assets/images/solutions/cloud/server.jpg";
import databaseImg from "../assets/images/solutions/cloud/database.webp";
import securityImg from "../assets/images/solutions/cloud/istockphoto-585806700-612x612.jpg";
import networkImg from "../assets/images/solutions/cloud/data-network.bb164a19166923a514ba.jpg";
import avImg from "../assets/images/solutions/cloud/voice-and-video.faf084e5f0b4c16bb266.png";
import implementationImg from "../assets/images/solutions/cloud/network-security.ff252e04acec9288d299.png";

import ethernetLan from "../assets/images/solutions/lan_wifi/ethernetLan.jpg";
import wirelessLan from "../assets/images/solutions/lan_wifi/wirelessLan.jpg";
import hybrid from "../assets/images/solutions/lan_wifi/hybrid.jpg";
import enterpriseWifi from "../assets/images/solutions/lan_wifi/wifi-enterprise-illustration.png";
import pointToPoint from "../assets/images/solutions/lan_wifi/point_to_point.png";
import mesh from "../assets/images/solutions/lan_wifi/mesh.jpg";

import businessDigital from "../assets/images/solutions/dxSolution/businessDigital.avif";
import rpaAi from "../assets/images/solutions/dxSolution/rpaAi.webp";
import cloudTransformation from "../assets/images/solutions/dxSolution/cloudTransformation.jpg";
import datavisualization from "../assets/images/solutions/dxSolution/datavisualization.avif";
import integration from "../assets/images/solutions/dxSolution/integration.png";
import workplace from "../assets/images/solutions/dxSolution/workplace.png";
import customerexperience from "../assets/images/solutions/dxSolution/customerexperience.png";

import aiAutomation from "../assets/images/solutions/internalAi/aiAutomation.jpg";
import aiAnalytics from "../assets/images/solutions/internalAi/aiAnalytics.webp";
import aiChatbots from "../assets/images/solutions/internalAi/aiChatbots.webp";
import ocr from "../assets/images/solutions/internalAi/ocr.png";
import aiDecision from "../assets/images/solutions/internalAi/aiDecision.jpg";
import aiMonitoring from "../assets/images/solutions/internalAi/aiMonitoring.jpg";

import cloudInfrusture from "../assets/images/solutions/global/cloudInfrusture.webp";
import cyberSecurity from "../assets/images/solutions/global/cyberSecurity.jpg";
import businessProcess from "../assets/images/solutions/global/businessProcess.jpg";
import enterprise from "../assets/images/solutions/global/enterprise.webp";
import digitalTransform from "../assets/images/solutions/global/digitalTransform.jpg";
import globalManaged from "../assets/images/solutions/global/Global-Managed-Services.png";


export const solutionsData = [
  {
    id: "solution-ict",
    img: solution1,
    title: "ICT Solutions",
    subtitle: "We provide end-to-end ICT solutions to ensure your infrastructure, applications, and data are secure, reliable, and scalable. Our expertise spans cloud management, servers and storage, databases, and fraud prevention, enabling businesses to operate efficiently and safely.",
    details: {
  "Cloud Management": {
    img: cloudImg,
    para1:
      "We manage cloud environments to ensure high availability, performance, and cost optimization. From migration to continuous monitoring, our services allow you to focus on core business activities.",

    faq: [
      {
        question: "Can you manage our cloud infrastructure effectively?",
        answer:
          "Yes. We handle provisioning, configuration, monitoring, and optimization across AWS, Azure, and hybrid setups.",
      },
      {
        question: "How do we ensure uptime and performance?",
        answer:
          "We implement redundancy, auto-scaling, and continuous monitoring to maintain high availability.",
      },
      {
        question: "Can you help reduce cloud costs?",
        answer:
          "Yes. We optimize resource usage, plan deployments efficiently, and monitor spending continuously.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Expertise in cloud architecture, deployment, and management",
        "Performance optimization and monitoring",
        "Cost-effective cloud resource planning",
        "Secure cloud operations and compliance management",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "24/7 cloud monitoring and maintenance",
        "Regular updates, patches, and security checks",
        "Backup, failover, and disaster recovery support",
      ],
    },
  },

  "Servers & Storage": {
    img: serverImg,
    para1:
      "We design, deploy, and maintain robust server and storage solutions to meet the demands of your business operations.",

    faq: [
      {
        question: "Can you provide reliable server and storage infrastructure?",
        answer:
          "Yes. We deliver scalable, high-performance, and fault-tolerant server setups.",
      },
      {
        question: "How do we ensure data availability and integrity?",
        answer:
          "We implement redundant storage, RAID configurations, and real-time replication.",
      },
      {
        question: "Can you manage our servers and storage continuously?",
        answer:
          "Yes. We offer monitoring, maintenance, and optimization for seamless operations.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Expertise in physical and virtual server environments",
        "Scalable storage design and management",
        "High-availability configurations and performance tuning",
        "Backup and disaster recovery integration",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Continuous monitoring of servers and storage",
        "Routine maintenance, patching, and optimization",
        "Rapid troubleshooting and issue resolution",
      ],
    },
  },

  "Database": {
    img: databaseImg,
    para1:
      "We provide database management, optimization, and administration services to ensure your data is secure, accessible, and performant.",

    faq: [
      {
        question: "Can you manage our databases efficiently?",
        answer:
          "Yes. We handle database design, deployment, tuning, and maintenance for MySQL, PostgreSQL, SQL Server, and more.",
      },
      {
        question: "How do we ensure high performance and availability?",
        answer:
          "We optimize queries, implement indexing, replication, and failover strategies.",
      },
      {
        question: "Can you ensure data security and compliance?",
        answer:
          "Yes. We apply access control, encryption, regular backups, and auditing.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Expertise in relational and non-relational databases",
        "Performance optimization and query tuning",
        "Backup, replication, and high-availability setups",
        "Security and compliance management",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Database monitoring and performance tracking",
        "Scheduled maintenance, backups, and patching",
        "Rapid response for outages or performance issues",
      ],
    },
  },

  "Crime Prevention Security": {
    img: securityImg,
    para1:
      "We implement advanced systems to detect, prevent, and respond to fraudulent activities, protecting your business and customers.",

    faq: [
      {
        question: "How can we detect and prevent fraud effectively?",
        answer:
          "We use AI-driven analytics, real-time monitoring, and rule-based systems to identify suspicious activity.",
      },
      {
        question: "Can this system integrate with our existing operations?",
        answer:
          "Yes. We integrate fraud detection across payments, transactions, applications, and APIs.",
      },
      {
        question: "How do we respond to potential threats?",
        answer:
          "Alerts, automated responses, and investigation workflows ensure rapid mitigation.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "AI and rule-based fraud detection systems",
        "Real-time monitoring of transactions and activities",
        "Integration with enterprise systems and APIs",
        "Analytics dashboards and reporting for decision-making",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Continuous monitoring for fraud patterns",
        "Automated alerts and incident response",
        "Periodic system tuning and analytics review",
      ],
    },
  },
},

  },
  {
    id: "solution-network",
    img: solution2,
    title: "Networks Solutions",
    subtitle: "We provide end-to-end network solutions that ensure reliable connectivity, enhanced communication, and robust security. Our services cover data networking, audio/video systems, and security implementation, designed to optimize your business operations.",
details: {
  "Data Network": {
    img: networkImg,
    para1:
      "We design, deploy, and manage high-performance data networks that keep your business connected and scalable.",

    faq: [
      {
        question: "How can we ensure reliable connectivity across our offices?",
        answer:
          "We design resilient LAN/WAN networks with redundancy, load balancing, and real-time monitoring.",
      },
      {
        question: "Can the network handle increased traffic as our business grows?",
        answer:
          "Yes. We implement scalable architectures and capacity planning for future growth.",
      },
      {
        question: "How do we ensure minimal downtime and fast issue resolution?",
        answer:
          "Our 24/7 monitoring and proactive alert system detect and resolve issues quickly.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "LAN/WAN design, configuration, and management",
        "High-performance network deployment",
        "Scalable and future-ready network architecture",
        "24/7 monitoring and proactive optimization",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Continuous network performance monitoring",
        "Rapid troubleshooting and maintenance",
        "Regular performance audits and optimization",
      ],
    },
  },

  "Audio and Video Solutions": {
    img: avImg,
    para1:
      "We provide integrated audio and video systems for meetings, conferences, and events, delivering seamless communication and collaboration.",

    faq: [
      {
        question: "How can we implement professional audio and video systems?",
        answer:
          "We design and deploy AV setups tailored to your rooms, requirements, and usage patterns.",
      },
      {
        question: "Can the system support remote collaboration?",
        answer:
          "Yes. We integrate video conferencing tools, streaming solutions, and remote control capabilities.",
      },
      {
        question: "How do we ensure clear, high-quality audio and video?",
        answer:
          "We select the right hardware, perform calibration, and optimize system configurations for each environment.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Expertise in AV design, installation, and integration",
        "Conference room, auditorium, and event AV solutions",
        "Remote collaboration and streaming capabilities",
        "Optimized hardware and software configuration for quality",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Regular system maintenance and calibration",
        "Troubleshooting and quick repairs",
        "Monitoring for performance and uptime",
      ],
    },
  },

  "Security Implementation": {
    img: implementationImg,
    para1:
      "We implement physical and network security solutions to protect assets, data, and personnel, ensuring comprehensive safety across your organization.",

    faq: [
      {
        question: "How can we secure our premises and network?",
        answer:
          "We provide layered security solutions including CCTV, access control, intrusion detection, and network firewalls.",
      },
      {
        question: "Can security systems integrate with our existing infrastructure?",
        answer:
          "Yes. We integrate security systems with IT networks, cloud platforms, and operational systems.",
      },
      {
        question: "How do we monitor and respond to security incidents?",
        answer:
          "Continuous monitoring, real-time alerts, and incident response protocols ensure rapid mitigation.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Physical and network security solutions",
        "Integrated access control, surveillance, and monitoring",
        "Network firewalls, intrusion detection, and threat prevention",
        "Rapid incident response and security audits",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "24/7 monitoring and alerting",
        "Regular system updates and security checks",
        "Incident investigation and remediation",
        "Performance and compliance reporting",
      ],
    },
  },
},

  },
  // {
  //   id: "solution-zerotrustsecurity",
  //   img: solution3,
  //   title: "Zero Trust Security",
  //   subtitle: "We help businesses secure their entire digital ecosystem with Zero Trust — a modern security approach that assumes no user, device, or application should be trusted by default. Every access request is verified, monitored, and controlled to protect your organization from cyber threats.",
  //   details: {
  //     "Identity Security": {
  //       heading : "Identity & Access Control",
  //       para1: "Identity Security ensures only verified users can access your systems. Every login request is authenticated and authorized using strong, modern security methods.",
  //       what: [
  //         "Multi-Factor Authentication (MFA): Extra layer of protection beyond passwords.",
  //         "Single Sign-On (SSO): Secure and simple login across all apps.",
  //         "Role-based access: Users get only the access they need.",
  //         "Identity lifecycle management: Onboarding and offboarding handled securely.",
  //       ],
  //       img : identitySecurity,

  //       clients: [
  //         "It dramatically reduces the risk of account breaches and ensures only trusted users enter your environment."
  //       ],
  //     },
  //     "Device Security": {
  //       heading : "Device Verification & Compliance",
  //       para1: "Zero Trust verifies the security health of every device — laptops, mobiles, tablets, desktops — before granting access.",
  //       what: [
  //         "Device health check: OS version, patches, and antivirus status are verified.",
  //         "Secure BYOD support: Staff can safely use personal devices.",
  //         "Real-time monitoring: Detect compromised or risky devices instantly.",
  //         "Automatic quarantine: Unsafe devices are blocked from the network.",
  //         "Central compliance dashboard: Full visibility of all devices.",
  //       ],
  //       img : deviceSecurity,

  //       clients: [
  //         "It prevents attackers from using infected or unmanaged devices to enter the network."
  //       ],
  //     },
  //     "Network Security (Micro-Segmentation)": {
  //       heading : "Network Control & Limited Access Zones",
  //       para1: "Instead of trusting the internal network, Zero Trust breaks it into small, secure segments. Users only access what they absolutely need.",
  //       what: [
  //         "Zero Trust Network Access (ZTNA): Replaces old VPNs with secure access.",
  //         "Micro-segmentation: Blocks lateral movement during a breach.",
  //         "Encrypted traffic: All communication is protected end-to-end.",
  //         "Context-based access rules: Access depends on identity, location, device, and behavior.",
  //         "Continuous verification: Not a one-time login — checks happen throughout the session.",
  //       ],
  //       img : microsegment,

  //       clients: [
  //         "Even if one part of the network is attacked, the threat cannot spread."
  //       ],
  //     },
  //     "Application Security": {
  //       heading : "Secure App Access & API Protection",
  //       para1: "Applications and APIs require verification before communicating or sharing data. This prevents attacks targeting apps or backend systems.",
  //       what: [
  //         "Application-level authentication: Only verified traffic reaches apps.",
  //         "API security: Prevents unauthorized API calls and data misuse.",
  //         "Secure access policies: Users can only use apps they are approved for.",
  //         "Runtime protection: Apps are monitored for abnormal activity.",
  //         "Protection from common attacks: OWASP threats, injection, bot attacks, etc.",
  //       ],
  //       img : apllicationSecurity,

  //       clients: [
  //         "It stops attackers from exploiting vulnerabilities in applications or APIs."
  //       ],
  //     },
  //     "Data Security": {
  //       heading : "Data Protection & Access Control",
  //       para1: "Zero Trust protects sensitive data no matter where it lives — in the cloud, on devices, or in applications.",
  //       what: [
  //         "Data classification: Identifies sensitive vs non-sensitive data.",
  //         "Data encryption: Protects data at rest and in transit.",
  //         "Data Loss Prevention (DLP): Stops unauthorized data sharing or downloads.",
  //         "Access logging: Tracks who accessed what data and when.",
  //         "Policy enforcement: Prevents data misuse or leaks.",
  //       ],
  //       img : dataSecurity,

  //       clients: [
  //         "It ensures that confidential information remains protected and compliant with regulations."
  //       ],
  //     },
  //     "Analytics & Monitoring": {
  //       heading : "Continuous Monitoring & Threat Detection",
  //       para1: "Zero Trust uses AI and behavioral analytics to detect suspicious activity in real time.",
  //       what: [
  //         "Behavior analytics (UEBA): Identifies abnormal user or device actions.",
  //         "Real-time alerts: Instant notifications of threats.",
  //         "Threat detection: Identifies ransomware, malware, and insider attacks.",
  //         "Automated response: Suspicious sessions can be blocked automatically.",
  //         "Full visibility: A complete picture of all user and device activity.",
  //       ],
  //       img : analiticsMonitoring,

  //       clients: [
  //         "It helps stop attacks early and reduces the impact of breaches."
  //       ],
  //     },

  //   },
  // },
  {
    id: "solution-sdwan",
    img: solution4,
    title: "SD WAN Solution",
    subtitle: "We provide flexible, secure, and high-performance SD-WAN solutions tailored to your business needs. Whether you prefer fully managed services, self-managed setups, cloud-delivered deployments, or hybrid models, our SD-WAN solutions optimize connectivity, reliability, and control.",
    details: {
  "Managed SD-WAN Solution": {
    img: productSdWan,
    para1:
      "Our managed SD-WAN service provides end-to-end deployment, monitoring, and optimization, allowing you to focus on your business while we handle your network.",

    faq: [
      {
        question: "Can you manage all aspects of our SD-WAN deployment?",
        answer:
          "Yes. We take full ownership of configuration, monitoring, performance tuning, and security.",
      },
      {
        question: "How do you ensure uptime and network performance?",
        answer:
          "24/7 monitoring, proactive optimization, and failover strategies ensure high availability.",
      },
      {
        question: "Can this integrate with our existing network and cloud infrastructure?",
        answer:
          "Yes. Our managed SD-WAN is compatible with on-prem, cloud, and hybrid environments.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Complete end-to-end SD-WAN management",
        "24/7 monitoring, optimization, and alerting",
        "Seamless integration with existing networks and cloud systems",
        "Security, failover, and performance assurance",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Continuous performance monitoring",
        "Rapid issue detection and resolution",
        "Regular reports and optimization recommendations",
      ],
    },
  },

  "DIY (Self-Managed) SD-WAN Solution": {
    img: diySdwan,
    para1:
      "Our self-managed SD-WAN solution allows organizations to retain full control while leveraging our guidance, templates, and tools for deployment and monitoring.",

    faq: [
      {
        question: "Can we deploy SD-WAN ourselves with support?",
        answer:
          "Yes. We provide setup guides, configuration templates, and technical assistance for your team.",
      },
      {
        question: "How do we monitor and maintain network performance?",
        answer:
          "Our dashboards, documentation, and training allow your team to monitor traffic, performance, and security.",
      },
      {
        question: "Can we scale the solution as our business grows?",
        answer:
          "Absolutely. The self-managed SD-WAN is modular and scalable for expanding networks.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Comprehensive guidance and templates for self-deployment",
        "Training and technical support for your IT team",
        "Scalable, modular SD-WAN architecture",
        "Best practices for performance, security, and reliability",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Technical assistance when needed",
        "Regular updates and best practice guidance",
        "Monitoring dashboards and alert systems",
      ],
    },
  },

  "Cloud-Delivered SD-WAN Solution": {
    img: cloudSdwan,
    para1:
      "We deliver SD-WAN services through a cloud-native platform, providing agility, rapid deployment, and simplified network management.",

    faq: [
      {
        question: "How quickly can we deploy a cloud SD-WAN solution?",
        answer:
          "Cloud-delivered SD-WAN allows fast, zero-touch deployment across multiple sites.",
      },
      {
        question: "Can it support cloud applications efficiently?",
        answer:
          "Yes. Traffic is optimized with intelligent routing, QoS, and direct cloud access.",
      },
      {
        question: "How is security maintained in the cloud SD-WAN?",
        answer:
          "End-to-end encryption, segmentation, and cloud-native security features protect your traffic.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Rapid deployment and zero-touch provisioning",
        "Intelligent routing and traffic optimization",
        "Direct secure access to cloud applications",
        "Continuous monitoring and analytics",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "24/7 cloud monitoring and alerting",
        "Regular system updates and performance checks",
        "Analytics and optimization recommendations",
      ],
    },
  },

  "Hybrid SD-WAN Solution": {
    img: hybridSdWan,
    para1:
      "Our hybrid SD-WAN combines on-premises and cloud capabilities, offering flexibility, reliability, and cost efficiency for complex network environments.",

    faq: [
      {
        question: "Can we integrate existing on-prem networks with SD-WAN?",
        answer:
          "Yes. Hybrid SD-WAN seamlessly connects legacy infrastructure with cloud networks.",
      },
      {
        question: "How do we balance performance, cost, and redundancy?",
        answer:
          "Intelligent routing and traffic prioritization optimize performance while controlling costs.",
      },
      {
        question: "Can the solution handle multiple sites and branches?",
        answer:
          "Absolutely. Hybrid SD-WAN supports multi-site, multi-cloud, and global deployments.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Seamless integration of on-premises and cloud networks",
        "Multi-site and hybrid deployment expertise",
        "Intelligent traffic management and cost optimization",
        "Full monitoring, security, and failover support",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Continuous performance and reliability monitoring",
        "Rapid issue detection and resolution",
        "Regular reporting and network optimization guidance",
      ],
    },
  },
},

},
  {
    id: "solution-lanwifi",
    img: solution5,
    title: "LAN & WiFi Solution",
    subtitle: "We design, deploy, and manage enterprise-grade LAN and Wi-Fi networks using Cisco and FortiGate solutions, including Cisco ASA security appliances for firewalling and VPN. Our networks deliver high performance, reliability, and security for all business environments, from small offices to large campuses.",
    details: {
  "Wired LAN Solution (Ethernet LAN)": {
    img: ethernetLan,
    para1:
      "We provide robust, secure, and high-performance wired LAN solutions for reliable connectivity across offices, data centers, and enterprise environments.",

    faq: [
      {
        question: "How can we build a high-performance wired network?",
        answer:
          "Using Cisco switches, routers, Cisco ASA firewalls, and FortiGate appliances, we design scalable LANs with redundancy, optimal traffic management, and secure segmentation.",
      },
      {
        question: "Can the network be secure against threats?",
        answer:
          "Yes. Cisco ASA and FortiGate appliances enforce firewall policies, VPN access, and segmentation for full network protection.",
      },
      {
        question: "How do we ensure minimal downtime?",
        answer:
          "Redundant links, high-availability configurations, and proactive monitoring guarantee maximum uptime.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Cisco LAN switches, routers, and ASA firewalls",
        "FortiGate integrated security appliances",
        "Scalable and high-availability network architecture",
        "Real-time monitoring, fault detection, and optimization",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "24/7 LAN monitoring and maintenance",
        "Rapid troubleshooting and issue resolution",
        "Performance audits and optimization reports",
      ],
    },
  },

  "Wireless LAN / WiFi Solution": {
    img: wirelessLan,
    para1:
      "We deploy secure, high-performance Wi-Fi networks using Cisco access points, controllers, and FortiGate/Cisco ASA security appliances for seamless connectivity.",

    faq: [
      {
        question: "How can we provide reliable Wi-Fi coverage across the office?",
        answer:
          "Cisco APs and controllers, combined with FortiGate and Cisco ASA security, ensure strong coverage, secure access, and VPN integration.",
      },
      {
        question: "Can the Wi-Fi network handle multiple users and devices?",
        answer:
          "Yes. Intelligent load balancing, spectrum management, and QoS guarantee smooth performance.",
      },
      {
        question: "How do we secure the Wi-Fi network?",
        answer:
          "FortiGate and Cisco ASA enforce WPA3, access policies, segmentation, and VPN security for all wireless traffic.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Cisco enterprise-grade Wi-Fi access points and controllers",
        "FortiGate and Cisco ASA security integration",
        "Load balancing, QoS, and performance optimization",
        "Scalable and secure Wi-Fi deployments",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Continuous monitoring and optimization",
        "Firmware updates and security patching",
        "Rapid troubleshooting and client support",
      ],
    },
  },

  "Hybrid LAN + WiFi Solution": {
    img: hybrid,
    para1:
      "Our hybrid solution combines wired and wireless networks for seamless connectivity, with full security using Cisco ASA and FortiGate appliances.",

    faq: [
      {
        question: "How do we integrate wired and wireless networks securely?",
        answer:
          "Using Cisco LAN/Wi-Fi devices with Cisco ASA and FortiGate appliances, we provide secure hybrid connectivity with monitoring and VPN capabilities.",
      },
      {
        question: "Can the network scale for growth?",
        answer:
          "Yes. Modular architecture and intelligent design allow easy expansion.",
      },
      {
        question: "How do we monitor both wired and wireless performance?",
        answer:
          "Centralized dashboards track traffic, performance, and security across the network.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Cisco LAN, Wi-Fi devices, ASA, and FortiGate appliances",
        "Integrated monitoring for wired and wireless networks",
        "Modular, scalable architecture",
        "Optimized performance, redundancy, and security",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "24/7 network monitoring and alerts",
        "Firmware updates, configuration tuning, and troubleshooting",
        "Periodic performance and security reports",
      ],
    },
  },

  "Enterprise WiFi Solution (High-Density WiFi)": {
    img: enterpriseWifi,
    para1:
      "We design high-density Wi-Fi networks for large offices, auditoriums, and campuses using Cisco high-capacity APs, controllers, ASA, and FortiGate appliances.",

    faq: [
      {
        question: "How can we provide Wi-Fi for hundreds or thousands of users?",
        answer:
          "Cisco high-density APs with controllers, combined with ASA and FortiGate security, ensure reliable coverage and secure access.",
      },
      {
        question: "How do we prevent interference and maintain performance?",
        answer:
          "Spectrum analysis, load balancing, and QoS optimize network performance in dense environments.",
      },
      {
        question: "How is security maintained for large-scale networks?",
        answer:
          "Cisco ASA and FortiGate appliances enforce segmentation, access policies, and encryption.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Cisco high-density APs and controllers",
        "Cisco ASA and FortiGate security integration",
        "Load balancing, spectrum management, and QoS",
        "Scalable enterprise Wi-Fi solutions",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Real-time monitoring for high-density networks",
        "Firmware updates, tuning, and optimization",
        "Rapid troubleshooting and support",
      ],
    },
  },

  "Point-to-Point & Mesh WiFi Solution": {
    img: pointToPoint,
    para1:
      "We provide long-range point-to-point wireless links and mesh Wi-Fi using Cisco and FortiGate solutions, secured with Cisco ASA firewalls.",

    faq: [
      {
        question: "Can we connect multiple buildings wirelessly?",
        answer:
          "Yes. Cisco point-to-point and mesh solutions with ASA and FortiGate appliances deliver reliable long-range connectivity.",
      },
      {
        question: "How do we ensure stable performance over long distances?",
        answer:
          "Optimized antennas, line-of-sight planning, and intelligent routing maintain stable links.",
      },
      {
        question: "Is the connection secure?",
        answer:
          "Cisco ASA and FortiGate firewalls, encryption, and VPNs protect all traffic.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Cisco point-to-point wireless links and mesh Wi-Fi",
        "Cisco ASA and FortiGate security appliances",
        "High-performance long-range network design",
        "Scalable and modular for multiple locations",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "24/7 link monitoring and maintenance",
        "Rapid troubleshooting and repair",
        "Periodic performance and security reports",
      ],
    },
  },
},

  },
  {
    id: "solution-dx",
    img: solution6,
    title: "DX Solution",
    subtitle: "We help organizations modernize operations, adopt new technologies, and improve customer experiences through digital transformation. Our DX solutions combine strategy, technology, and process optimization to achieve measurable business outcomes.",
    details: {
  "IT Modernization & Cloud Adoption": {
    heading: "IT Modernization & Cloud Adoption",
    img: businessDigital,
    para1:
      "We assist businesses in migrating legacy systems to modern, scalable cloud environments while optimizing IT operations.",

    faq: [
      {
        question: "How do we modernize legacy IT systems?",
        answer:
          "We assess current systems, plan migrations, and implement cloud-native or hybrid solutions.",
      },
      {
        question: "Can cloud adoption improve performance and reduce costs?",
        answer:
          "Yes. We design cloud architecture with cost optimization, auto-scaling, and monitoring.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Cloud strategy and migration (AWS, Azure, GCP)",
        "Modernization of applications and infrastructure",
        "Cost-effective, scalable IT environments",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "24/7 monitoring and performance tracking",
        "Cloud optimization and updates",
        "Security, backup, and compliance support",
      ],
    },
  },

  "Process Automation & Workflow Optimization": {
    heading: "Process Automation & Workflow Optimization",
    img: rpaAi,
    para1:
      "We streamline business processes using automation, reducing errors, improving efficiency, and enhancing productivity.",

    faq: [
      {
        question: "How can we automate repetitive business processes?",
        answer:
          "We implement RPA, AI-driven workflows, and integrated platforms for process automation.",
      },
      {
        question: "Can automation integrate with our existing systems?",
        answer:
          "Yes. We connect automation solutions to ERP, CRM, and other enterprise applications.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Robotic Process Automation (RPA) implementation",
        "Workflow optimization using AI and cloud tools",
        "Seamless integration with existing systems",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Continuous monitoring of automated processes",
        "Updates and optimization based on performance metrics",
        "Troubleshooting and process improvement support",
      ],
    },
  },

  "Customer Experience (CX) Digitalization": {
    heading: "Customer Experience (CX) Digitalization",
    img: customerexperience,
    para1:
      "We transform customer interactions through digital channels, personalized experiences, and omnichannel engagement.",

    faq: [
      {
        question: "How can we enhance customer engagement digitally?",
        answer:
          "We implement CRM, chatbots, mobile apps, and digital platforms for seamless interactions.",
      },
      {
        question: "Can we personalize customer experiences effectively?",
        answer:
          "Yes. We use analytics, AI-driven insights, and automated recommendations to enhance CX.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Digital customer platforms and mobile apps",
        "Omnichannel engagement strategies",
        "AI-driven personalization and analytics",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Performance monitoring and reporting",
        "Regular updates to CX platforms",
        "Support for analytics and engagement tools",
      ],
    },
  },

  "Data Analytics & Business Intelligence": {
    heading: "Data Analytics & Business Intelligence",
    img: datavisualization,
    para1:
      "We enable data-driven decision-making through analytics, dashboards, and actionable insights.",

    faq: [
      {
        question: "How can we make sense of our business data?",
        answer:
          "We implement BI platforms, dashboards, and AI analytics to provide actionable insights.",
      },
      {
        question: "Can analytics support strategic decisions?",
        answer:
          "Yes. Real-time and historical data insights guide business planning and growth.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "BI and analytics platform deployment",
        "Predictive analytics and reporting",
        "Integration with operational and customer data",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "Continuous monitoring and data validation",
        "Dashboard updates and performance tuning",
        "Analytical insights and optimization support",
      ],
    },
  },

  "Enterprise Mobility & Collaboration": {
    heading: "Enterprise Mobility & Collaboration",
    img: workplace,
    para1:
      "We enable mobile workforces with secure access, collaboration tools, and modern workplace solutions.",

    faq: [
      {
        question: "How can employees collaborate effectively remotely?",
        answer:
          "We implement collaboration platforms (Teams, Slack, Zoom), mobile access, and secure file sharing.",
      },
      {
        question: "Can we maintain security while enabling mobility?",
        answer:
          "Yes. VPNs, MDM, conditional access, and secure cloud apps ensure safe remote work.",
      },
    ],

    strengths: {
      title: "Our Strengths",
      items: [
        "Enterprise collaboration and mobility solutions",
        "Secure remote access and mobile device management",
        "Cloud-based productivity and collaboration platforms",
      ],
    },

    support: {
      title: "Support Assurance",
      items: [
        "24/7 access and support monitoring",
        "Security updates and policy enforcement",
        "Continuous optimization for collaboration efficiency",
      ],
    },
  },
},

  },
  {
    id: "solution-internalai",
    img: solution7,
    title: "Internal AI Solutions",
    subtitle: "We help organizations leverage AI internally to optimize operations, automate processes, enhance decision-making, and improve security. Our AI solutions cover automation, predictive analytics, chatbots, document intelligence, recommendations, and monitoring systems.",
    details: {
      "AI Automation Systems": {
        heading: "AI Automation Systems",
        para1: "We implement AI-driven automation to handle repetitive tasks, streamline workflows, and reduce human error.",
        faq: [
          {
            question: "How can we automate internal business processes using AI?",
            answer: "We implement AI-powered RPA and workflow automation tools to handle tasks like approvals, data entry, and reporting."
          },
          {
            question: "Can AI automation integrate with existing systems?",
            answer: "Yes. We connect AI automation with ERP, CRM, HR, and other enterprise applications."
          }
        ],
        strengths: {
          title: "Our Strengths",
          items: [
            "AI-driven RPA and workflow automation",
            "Integration with enterprise applications",
            "Scalable, modular automation architecture"
          ]
        },
        support: {
          title: "Support Assurance",
          items: [
            "Monitoring of automated processes",
            "Performance optimization and updates",
            "Troubleshooting and support for workflow continuity"
          ]
        },
        img: aiAutomation
      },

      "AI Predictive Analytics": {
        heading: "AI Predictive Analytics",
        para1: "We turn internal data into actionable insights, forecasting trends, performance, and operational outcomes.",
        faq: [
          {
            question: "How can we use AI to predict business trends?",
            answer: "We deploy predictive models using historical data to forecast performance, demand, or risk factors."
          },
          {
            question: "Can predictions be integrated into decision-making?",
            answer: "Yes. Insights feed into dashboards, planning tools, and strategy platforms for proactive decision-making."
          }
        ],
        strengths: {
          title: "Our Strengths",
          items: [
            "AI-powered predictive modeling",
            "Data integration from multiple internal sources",
            "Real-time and historical trend analysis"
          ]
        },
        support: {
          title: "Support Assurance",
          items: [
            "Continuous model performance monitoring",
            "Updates and recalibration of AI models",
            "Reporting and actionable insights for management"
          ]
        },
        img: aiAnalytics
      },

      "AI Chatbots & Virtual Assistants (Internal Use)": {
        heading: "AI Chatbots & Internal Assistants",
        para1: "We provide AI-powered chatbots and virtual assistants for internal helpdesks, employee support, and knowledge management.",
        faq: [
          {
            question: "Can we automate internal employee support?",
            answer: "Yes. AI chatbots answer FAQs, guide processes, and escalate complex issues to humans."
          },
          {
            question: "How do we ensure accuracy and relevance?",
            answer: "Continuous learning from interactions and integration with internal knowledge bases ensures high accuracy."
          }
        ],
        strengths: {
          title: "Our Strengths",
          items: [
            "AI chatbots for internal helpdesk and HR support",
            "Virtual assistants integrated with enterprise systems",
            "Continuous learning and knowledge updates"
          ]
        },
        support: {
          title: "Support Assurance",
          items: [
            "Monitoring chatbot performance and usage",
            "Updating knowledge base and AI models",
            "Continuous improvement of response accuracy"
          ]
        },
        img: aiChatbots
      },

      "Document Intelligence & AI OCR Systems": {
        heading: "Document Intelligence Solutions",
        para1: "We automate document processing, extract information, and convert paper or digital documents into actionable data.",
        faq: [
          {
            question: "Can AI process large volumes of documents automatically?",
            answer: "Yes. AI OCR and document intelligence systems extract, categorize, and store data efficiently."
          },
          {
            question: "How accurate is the AI in reading and processing documents?",
            answer: "Advanced OCR and NLP models ensure high accuracy, even with unstructured or scanned documents."
          }
        ],
        strengths: {
          title: "Our Strengths",
          items: [
            "AI OCR and document intelligence systems",
            "Automatic data extraction, classification, and validation",
            "Integration with internal databases and workflows"
          ]
        },
        support: {
          title: "Support Assurance",
          items: [
            "Monitoring of document processing accuracy",
            "Updates and retraining of AI models",
            "Support for data integration and validation"
          ]
        },
        img: ocr
      },

      "AI Recommendation & Decision Systems": {
        heading: "AI Decision Support Systems",
        para1: "We provide AI systems that recommend actions, optimize workflows, and assist internal decision-making.",
        faq: [
          {
            question: "Can AI suggest actions to improve efficiency?",
            answer: "Yes. Recommendation engines analyze internal data and provide actionable insights for processes, resources, and performance."
          },
          {
            question: "How do we ensure recommendations align with business rules?",
            answer: "AI systems are configured with organizational policies, KPIs, and approval workflows."
          }
        ],
        strengths: {
          title: "Our Strengths",
          items: [
            "AI recommendation engines and decision-support systems",
            "Integration with enterprise data sources",
            "Configurable for internal policies and KPIs"
          ]
        },
        support: {
          title: "Support Assurance",
          items: [
            "Monitoring recommendation accuracy and relevance",
            "Updating models based on feedback and new data",
            "Ensuring alignment with organizational rules"
          ]
        },
        img: aiDecision
      },

      "AI Monitoring & Security Intelligence": {
        heading: "AI Monitoring & Security Systems",
        para1: "We implement AI systems to monitor internal IT infrastructure, detect anomalies, and strengthen security intelligence.",
        faq: [
          {
            question: "How can AI help monitor internal systems and detect threats?",
            answer: "AI continuously analyzes logs, user behavior, and system metrics to detect anomalies or security threats."
          },
          {
            question: "Can AI respond to incidents automatically?",
            answer: "Yes. Alerts, automated responses, and escalation workflows enable proactive threat mitigation."
          }
        ],
        strengths: {
          title: "Our Strengths",
          items: [
            "AI-powered monitoring for IT infrastructure",
            "Anomaly detection, threat analysis, and alerting",
            "Integration with internal security and compliance systems"
          ]
        },
        support: {
          title: "Support Assurance",
          items: [
            "24/7 monitoring and alerting",
            "Continuous updates of AI models and threat patterns",
            "Incident response and system optimization"
          ]
        },
        img: aiMonitoring
      },
    },

  },
  {
    id: "solution-globalsolution",
    img: solution8,
    title: "Global Solutions",
    subtitle: "We provide comprehensive global IT solutions designed to help enterprises scale internationally. Our services cover cloud and infrastructure, cybersecurity, business process automation, enterprise We provide comprehensive global IT solutions designed to help enterprises scale internationally. Our services cover cloud and infrastructure, cybersecurity, business process automation, enterprise software, digital transformation, and global IT support, ensuring consistent performance and security across regions.",
 details : {
  "Cloud & Infrastructure Solutions": {
    heading: "Cloud & Infrastructure Solutions",
    para1: "We deliver scalable, secure, and high-performance cloud and IT infrastructure solutions for global operations.",
    faq: [
      {
        question: "How can we manage cloud and infrastructure across multiple regions?",
        answer: "We deploy globally scalable cloud solutions (AWS, Azure, GCP) and manage infrastructure with centralized monitoring and optimization."
      },
      {
        question: "Can we ensure performance and cost-efficiency?",
        answer: "Yes. Resource optimization, auto-scaling, and monitoring ensure efficiency and reliability."
      }
    ],
    strengths: {
      title: "Our Strengths",
      items: [
        "Multi-region cloud deployments and management",
        "Scalable IT infrastructure design",
        "Centralized monitoring, optimization, and automation"
      ]
    },
    support: {
      title: "Support Assurance",
      items: [
        "24/7 global monitoring and support",
        "Regular updates, patches, and optimization",
        "Backup, failover, and disaster recovery"
      ]
    },
    img: cloudInfrusture
  },

  "Cybersecurity & Data Protection Solutions": {
    heading: "Cybersecurity Solutions",
    para1: "We secure global IT operations with comprehensive cybersecurity strategies and data protection systems.",
    faq: [
      {
        question: "How can we protect data across multiple countries?",
        answer: "We implement end-to-end encryption, access controls, and compliance-aligned data protection."
      },
      {
        question: "Can you monitor threats in real time?",
        answer: "Yes. Continuous monitoring, threat detection, and AI-driven analytics protect your global operations."
      }
    ],
    strengths: {
      title: "Our Strengths",
      items: [
        "Global cybersecurity strategy and implementation",
        "Real-time monitoring and threat detection",
        "Data protection and compliance management"
      ]
    },
    support: {
      title: "Support Assurance",
      items: [
        "24/7 security monitoring and incident response",
        "Regular audits, updates, and patching",
        "Backup and disaster recovery support"
      ]
    },
    img: cyberSecurity
  },

  "Business Process Automation Solutions": {
    heading: "Business Automation Solutions",
    para1: "We automate workflows and internal processes to optimize operations across global teams.",
    faq: [
      {
        question: "Can we streamline repetitive global business processes?",
        answer: "Yes. AI-driven automation and RPA streamline processes in HR, finance, and operations."
      },
      {
        question: "Can automation integrate with existing systems?",
        answer: "Yes. ERP, CRM, and enterprise applications are fully integrated."
      }
    ],
    strengths: {
      title: "Our Strengths",
      items: [
        "RPA and AI-driven workflow automation",
        "Integration with enterprise systems",
        "Scalable global automation architecture"
      ]
    },
    support: {
      title: "Support Assurance",
      items: [
        "Continuous monitoring and optimization",
        "Updates, performance tracking, and troubleshooting",
        "Support for process expansion and improvements"
      ]
    },
    img: businessProcess
  },

  "Enterprise Software Solutions": {
    heading: "Enterprise Solutions",
    para1: "We develop and deploy scalable enterprise software for global operations, including ERP, CRM, and custom platforms.",
    faq: [
      {
        question: "Can you deliver software that works across multiple regions?",
        answer: "Yes. We design multi-region SaaS, web, and mobile enterprise applications with localization support."
      },
      {
        question: "How do we ensure scalability and performance?",
        answer: "Modular architecture, cloud hosting, and performance monitoring guarantee scalability."
      }
    ],
    strengths: {
      title: "Our Strengths",
      items: [
        "Multi-region SaaS and enterprise software development",
        "Scalable architecture with performance optimization",
        "Security, compliance, and integration with existing systems"
      ]
    },
    support: {
      title: "Support Assurance",
      items: [
        "24/7 global software monitoring",
        "Updates, bug fixes, and feature enhancements",
        "User training and documentation"
      ]
    },
    img: enterprise
  },

},

  },




];
