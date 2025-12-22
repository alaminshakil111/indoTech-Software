// import from local
import solution1 from "../assets/images/solutions/solution1.jpg";
import solution2 from "../assets/images/solutions/solution2.jpeg";
import solution4 from "../assets/images/solutions/solution4.jpg";
import solution5 from "../assets/images/solutions/solution5.jpg";
import solution6 from "../assets/images/solutions/solution6.jpg";
import solution7 from "../assets/images/solutions/solution7.jpg";
import solution8 from "../assets/images/solutions/solution8.jpg";

export const accordionData = [
  {
    title: "ICT Solutions",
    subtitle:
      "We provide end-to-end ICT solutions to ensure your infrastructure, applications and data are secure, reliable and scalable. Our expertise spans cloud management, servers and storage, databases and fraud prevention, enabling businesses to operate efficiently and safely.",
    img: solution1,
    links: [
      {
        label: "Cloud Management",
        to: "/solutions/solution-ict",
        tabIndex: 0,
      },
      {
        label: "Servers & Storage",
        to: "/solutions/solution-ict",
        tabIndex: 1,
      },
      {
        label: "Database",
        to: "/solutions/solution-ict",
        tabIndex: 2,
      },
      {
        label: "Crime Prevention Security",
        to: "/solutions/solution-ict",
        tabIndex: 3,
      },
    ],
  },

  {
    title: "Network Solutions",
    subtitle:
      "We provide end-to-end network solutions that ensure reliable connectivity, enhanced communication and robust security. Our services cover data networking, audio/video systems and security implementation, designed to optimize your business operations.",
    img: solution2,


  },

  {
    title: "SD-WAN (Software-Defined Wide Area Network) Solution",
    subtitle:
      "We provide flexible, secure and high-performance SD-WAN solutions tailored to your business needs. Whether you prefer fully managed services, self-managed setups, cloud-delivered deployments, or hybrid models, our SD-WAN solutions optimize connectivity, reliability and control.",
    img: solution4,
    
    links: [
      {
        label: "Managed SD-WAN Solution",
        to: "/solutions/solution-sdwan",
        tabIndex: 0,
      },
      {
        label: "DIY (Self-Managed) SD-WAN Solution",
        to: "/solutions/solution-sdwan",
        tabIndex: 1,
      },
      {
        label: "Cloud-Delivered SD-WAN Solution",
        to: "/solutions/solution-sdwan",
        tabIndex: 2,
      },
      {
        label: "Hybrid SD-WAN Solution",
        to: "/solutions/solution-sdwan",
        tabIndex: 3,
      },
    ],
  },

  {
    title: "LAN & Wi-Fi Solutions",
    subtitle:
      "We design, deploy and manage enterprise-grade LAN and Wi-Fi networks using Cisco and FortiGate solutions, including Cisco ASA security appliances for firewalling and VPN.",
    img: solution5,
    
    links: [
      { label: "Wired LAN Solution (Ethernet LAN)", to: "/solutions/solution-lanwifi", tabIndex: 0 },
      { label: "Wireless LAN / WiFi Solution", to: "/solutions/solution-lanwifi", tabIndex: 1 },
      { label: "Hybrid LAN + WiFi Solution", to: "/solutions/solution-lanwifi", tabIndex: 2 },
      { label: "Enterprise WiFi Solution", to: "/solutions/solution-lanwifi", tabIndex: 3 },
      { label: "Point-to-Point (P2P) Wireless Link", to: "/solutions/solution-lanwifi", tabIndex: 4 },
      { label: "Point-to-Point & Mesh WiFi Solution", to: "/solutions/solution-lanwifi", tabIndex: 5 },
    ],
  },

  {
    title: "DX Solution",
    subtitle:
      "We help organizations modernize operations, adopt new technologies and improve customer experiences through digital transformation.",
    img: solution6,
    
    links: [
      { label: "IT Modernization & Cloud Adoption", to: "/solutions/solution-dx", tabIndex: 0 },
      { label: "Process Automation & Workflow Optimization", to: "/solutions/solution-dx", tabIndex: 1 },
      { label: "Customer Experience (CX) Digitalization", to: "/solutions/solution-dx", tabIndex: 2 },
      { label: "Data Analytics & Business Intelligence", to: "/solutions/solution-dx", tabIndex: 3 },
      { label: "Enterprise Mobility & Collaboration", to: "/solutions/solution-dx", tabIndex: 4 },
    ],
  },

  {
    title: "Internal AI Solutions",
    subtitle:
      "We help organizations leverage AI internally to optimize operations, automate processes, enhance decision-making and improve security.",
    img: solution7,
    
    links: [
      { label: "AI Automation Systems", to: "/solutions/solution-internalai", tabIndex: 0 },
      { label: "AI Predictive Analytics", to: "/solutions/solution-internalai", tabIndex: 1 },
      { label: "AI Chatbots & Virtual Assistants", to: "/solutions/solution-internalai", tabIndex: 2 },
      { label: "Document Intelligence & AI OCR Systems", to: "/solutions/solution-internalai", tabIndex: 3 },
      { label: "AI Recommendation & Decision Systems", to: "/solutions/solution-internalai", tabIndex: 4 },
      { label: "AI Monitoring & Security Intelligence", to: "/solutions/solution-internalai", tabIndex: 5 },
    ],
  },

  {
    title: "Global Solutions",
    subtitle: "We provide comprehensive global IT solutions designed to help enterprises scale internationally.",
    img: solution8,
    
    links: [
      { label: "Cloud & Infrastructure Solutions", to: "/solutions/solution-globalsolution", tabIndex: 0 },
      { label: "Cybersecurity & Data Protection Solutions", to: "/solutions/solution-globalsolution", tabIndex: 1 },
      { label: "Business Process Automation Solutions", to: "/solutions/solution-globalsolution", tabIndex: 2 },
      { label: "Enterprise Software Solutions", to: "/solutions/solution-globalsolution", tabIndex: 3 },
    ],
  },
];
