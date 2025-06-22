import {
  ToolOutlined,
  SafetyOutlined,
  GlobalOutlined,
  RocketOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';

const servicesData = [
  {
    id: 1,
    title: 'Shipbuilding',
    description: 'Specialized in designing and constructing various types of ships for commercial and industrial use with a focus on quality and timely delivery.',
    icon: <ToolOutlined />,
    link: '/services#shipbuilding',
    image: '/images/gallery/IMG_5735.JPG',
    details: {
      overview: 'We specialize in designing and constructing various types of ships for commercial and industrial use. With years of experience in the industry, we have become one of the leading shipbuilders, offering customized solutions to clients worldwide.',
      features: [
        'Custom vessel design and construction',
        'Mini bulk carrier construction',
        'Dumb barges and oil-tanker barges',
        'Motor tug vessels',
        'Specialized stone carrier barges',
        'Compliance with IRS and IACS standards'
      ],
      process: 'From initial design to final delivery, we ensure that every vessel meets the highest standards of quality and safety. Our process includes design consultation, plan approval, construction, stability tests, inclining experiments, and sea trials.'
    }
  },
  {
    id: 2,
    title: 'Ship Modification Services',
    description: 'Comprehensive ship modification services to enhance vessel performance and extend operational life.',
    icon: <SafetyOutlined />,
    link: '/services#modification',
    image: '/images/gallery/IMG_0291.JPG',
    details: {
      overview: 'Our ship modification services are designed to upgrade and enhance your vessels according to the latest industry standards and your specific requirements.',
      features: [
        'Hull modifications and extensions',
        'Superstructure modifications',
        'Machinery upgrades',
        'Emission control system installations',
        'Cargo handling system modifications',
        'Conversion of vessel types'
      ],
      process: 'We follow a systematic approach including initial assessment, detailed engineering, modification planning, execution, and final testing to ensure optimal results.'
    }
  },
  {
    id: 3,
    title: 'Dry-Dock Services',
    description: 'Comprehensive dry-docking and repair services with a proven track record of excellence.',
    icon: <GlobalOutlined />,
    link: '/services#drydock',
    image: '/images/gallery/IMG_0309.JPG',
    details: {
      overview: 'With extensive experience in dry-docking and repairs, we have successfully completed numerous projects including steel plate renewals, main shaft alignments, and major overhauls.',
      features: [
        'Steel plate renewal (3000+ MT completed)',
        'Main shaft alignments',
        'Windlass-Anchor chain alignments',
        'Engine overhauls',
        'Grit blasting & repainting',
        'Valve repairs & testing',
        'Propeller and shaft works'
      ],
      process: 'Our dry-docking process includes thorough inspection, detailed work planning, precise execution, and comprehensive testing to ensure vessel integrity and performance.'
    }
  },
  {
    id: 4,
    title: 'Port & Harbor Services',
    description: 'Comprehensive port operations and support services for efficient maritime operations.',
    icon: <RocketOutlined />,
    link: '/services#port-services',
    image: '/images/gallery/IMG_4540.JPG',
    details: {
      overview: 'We provide a range of port and harbor services to ensure smooth and efficient maritime operations for our clients.',
      features: [
        'Berthing/Unberthing of vessels',
        'Utility Boat services',
        'Provision supplies from shore to anchorage',
        'Work boat for hydrographic surveys',
        'Crew transfers & Customs boarding',
        'Offshore garbage and sludge collection & disposal'
      ],
      process: 'Our experienced team follows strict protocols to ensure safe and efficient port operations, with 24/7 support available for all your maritime needs.'
    }
  },
  {
    id: 5,
    title: 'Towing & Marine Support',
    description: 'Reliable towing and marine support services with our modern fleet of tugs and support vessels.',
    icon: <ThunderboltOutlined />,
    link: '/services#towing',
    image: '/images/gallery/IMG_5732.JPG',
    details: {
      overview: 'Our fleet of tugs and support vessels is equipped to handle a wide range of marine operations with safety and efficiency.',
      features: [
        'Coastal and long-distance towing',
        'Vessel assistance',
        'Over dimensional cargo transport',
        'Barge towing services',
        'Emergency response',
        'Standby assistance'
      ],
      process: 'We provide professional towing services with well-maintained vessels and experienced crews, ensuring safe and timely completion of all operations.'
    }
  },
  {
    id: 6,
    title: 'Workshop & Fabrication',
    description: 'Specialized workshop services for marine components and equipment.',
    icon: <ToolOutlined />,
    link: '/services#workshop',
    image: '/images/gallery/IMG_5733.JPG',
    details: {
      overview: 'Our well-equipped workshop in Jamnagar provides comprehensive fabrication and repair services for marine components.',
      features: [
        'Propeller repairing',
        'Shaft works and alignments',
        'Manhole and watertight door fabrication',
        'Grab repairing and manufacturing',
        'Allied engineering services',
        'Mobile repair teams for on-site services'
      ],
      process: 'We combine traditional craftsmanship with modern technology to deliver high-quality fabrication and repair services, with the flexibility of on-site support when needed.'
    }
  }
];

export default servicesData;