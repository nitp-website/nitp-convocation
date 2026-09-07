// Official Data Extracted from NIT Patna 14th Convocation Souvenir 2025 (XIV CONVOCATION)

export interface Dignitary {
  name: string;
  designation: string;
  role: string;
  org: string;
  image: string;
  highlight: boolean;
  badge?: string;
}

export interface Medalist {
  name: string;
  dept: string;
  roll: string;
  award: string;
  category: 'UG' | 'PG' | 'SPECIAL';
  badge: string;
  image: string;
  gender: 'm' | 'f';
}

export interface Graduate {
  name: string;
  roll: string;
  prog: string;
  dept: string;
  honor?: string | null;
  image?: string | null;
}

export interface CommitteeMember {
  slNo?: number | string;
  name: string;
  designation: string;
  role: 'Convenor' | 'Co-Convenor' | 'Member' | 'Coordinator' | 'Chairman';
}

export interface Committee {
  id: string;
  name: string;
  duties?: string[];
  members: CommitteeMember[];
}

export const INSTITUTE_INFO = {
  nameHindi: 'राष्ट्रीय प्रौद्योगिकी संस्थान पटना',
  nameEnglish: 'National Institute of Technology Patna',
  edition: '14th Annual Convocation Ceremony',
  editionRoman: 'XIV CONVOCATION',
  date: 'Saturday, December 27, 2025',
  reportingTime: '08:00 AM Sharp',
  venue: 'Main Campus Auditorium, NIT Patna (Ashok Rajpath)',
  venueDetails: 'NIT Patna, Mahendru, Ashok Rajpath, Patna – 800 005 (Bihar)',
  bihtaCampus: 'Bihta Campus (125 Acres), Dedicated on 4th October 2025 by Hon’ble PM Narendra Modi',
  nirfRank: '53rd in India (Engineering - NIRF 2025)',
  patents: '371+ Patent Applications, 200+ Secured Patents',
  totalGraduates: '985',
  phdScholars: '136',
  pgGraduates: '111',
  ugGraduates: '738', 
  goldMedals: '14',
  departmentsCount: '11 Academic Departments',
};

export const DIGNITARIES: Dignitary[] = [
  {
    name: 'Shrimati Droupadi Murmu',
    designation: 'Hon’ble President of India',
    role: 'Visitor, NIT Patna',
    org: 'Government of India',
    image: '/images/souvenir/droupadi_murmu.png',
    highlight: true,
    badge: 'Visitor'
  },
  {
    name: 'Shri Narendra Modi',
    designation: 'Hon’ble Prime Minister of India',
    role: 'Dedicated Bihta Campus to the Nation (Oct 4, 2025)',
    org: 'Government of India',
    image: '/images/souvenir/narendra_modi.jpg',
    highlight: true,
    badge: 'Chief Patron'
  },
  {
    name: 'Shri Dharmendra Pradhan',
    designation: 'Hon’ble Minister of Education',
    role: 'Ministry of Education',
    org: 'Government of India',
    image: '/images/souvenir/dharmendra_pradhan.jpg',
    highlight: true,
    badge: 'Patron'
  },
  {
    name: 'Shri Nitish Kumar',
    designation: 'Hon’ble Chief Minister of Bihar',
    role: 'Chief Guest, XIV Convocation',
    org: 'Government of Bihar',
    image: '/images/souvenir/nitish_kumar.jpg',
    highlight: true,
    badge: 'Chief Guest'
  },
  {
    name: 'Shri Ashok Kumar Modi',
    designation: 'Chairperson, Board of Governors',
    role: 'Presiding Officer, NIT Patna',
    org: 'NIT Patna & Eden Group',
    image: '/images/souvenir/ashok_modi.jpg',
    highlight: false,
    badge: 'Chairperson, BOG'
  },
  {
    name: 'Prof. Pradip Kumar Jain',
    designation: 'Director, NIT Patna',
    role: 'Chief Academic Officer',
    org: 'NIT Patna',
    image: '/images/souvenir/pradip_jain.jpg',
    highlight: false,
    badge: 'Director'
  }
];

export const UG_GOLD_MEDALISTS: Medalist[] = [
  {
    name: 'Harsh Nandan Verma',
    dept: 'Computer Science & Engineering',
    roll: '2106216',
    award: 'President’s Gold Medal & Director’s Gold Medal (Overall UG Topper & Branch Topper)',
    category: 'UG',
    badge: 'President & Director Gold Medal',
    image: '/images/souvenir/ug_harsh_nandan_verma.png',
    gender: 'm',
  },
  {
    name: 'Ritika Kumari',
    dept: 'Civil Engineering',
    roll: '2103049',
    award: 'Director’s Gold Medal, K.N. Rohatgi Gold Medal & BCE-NITP Alumni Gold Medal (Triple Gold Medalist)',
    category: 'UG',
    badge: 'Triple Gold Medalist',
    image: '/images/souvenir/ug_ritika_kumari.png',
    gender: 'f',
  },
  {
    name: 'Himanshu Kumar Sahu',
    dept: 'Electrical Engineering',
    roll: '2102076',
    award: 'Director’s Gold Medal (Branch Topper)',
    category: 'UG',
    badge: 'Director Gold Medal',
    image: '/images/souvenir/ug_himanshu_sahu.png',
    gender: 'm',
  },
  {
    name: 'Asad Rahman',
    dept: 'Mechanical Engineering',
    roll: '2101043',
    award: 'Director’s Gold Medal (Branch Topper)',
    category: 'UG',
    badge: 'Director Gold Medal',
    image: '/images/souvenir/ug_asad_rahman.png',
    gender: 'm',
  },
  {
    name: 'Priya Mishra',
    dept: 'Architecture & Planning',
    roll: '2005028',
    award: 'Director’s Gold Medal (Branch Topper)',
    category: 'UG',
    badge: 'Director Gold Medal',
    image: '/images/souvenir/ug_priya_mishra.png',
    gender: 'f',
  },
  {
    name: 'Dwibhashyam Sai Buchi Surya Pawan',
    dept: 'Electronics & Communication Engineering',
    roll: '2104041',
    award: 'Director’s Gold Medal (Branch Topper)',
    category: 'UG',
    badge: 'Director Gold Medal',
    image: '/images/souvenir/ug_dwibhashyam_pawan.png',
    gender: 'm',
  }
];

export const PG_GOLD_MEDALISTS: Medalist[] = [
  {
    name: 'Dhiresh Kumar',
    dept: 'Civil Engineering',
    roll: '2323010',
    award: 'President’s Gold Medal & Director’s Gold Medal (Overall PG Topper & Branch Topper)',
    category: 'PG',
    badge: 'President & Director Gold Medal',
    image: '/images/souvenir/pg_dhiresh_kumar.png',
    gender: 'm',
  },
  {
    name: 'Amit Kumar',
    dept: 'Mechanical Engineering',
    roll: '2334008',
    award: 'Director’s Gold Medal (Branch Topper)',
    category: 'PG',
    badge: 'Director Gold Medal',
    image: '/images/souvenir/pg_amit_kumar.png',
    gender: 'm',
  },
  {
    name: 'Prachi Maurya',
    dept: 'Electronics & Communication Engineering',
    roll: '2340002',
    award: 'Director’s Gold Medal (Branch Topper)',
    category: 'PG',
    badge: 'Director Gold Medal',
    image: '/images/souvenir/pg_prachi_maurya.png',
    gender: 'f',
  },
  {
    name: 'Shipra Verma',
    dept: 'Architecture & Planning',
    roll: '2330003',
    award: 'Director’s Gold Medal (Branch Topper)',
    category: 'PG',
    badge: 'Director Gold Medal',
    image: '/images/souvenir/pg_shipra_verma.png',
    gender: 'f',
  },
  {
    name: 'Gautam Singh',
    dept: 'Electrical Engineering',
    roll: '2322002',
    award: 'Certificate of Excellence (Branch Topper)',
    category: 'PG',
    badge: 'Certificate of Excellence',
    image: '/images/souvenir/pg_gautam_singh.png',
    gender: 'm',
  },
  {
    name: 'Arunish Kumar',
    dept: 'Computer Science & Engineering',
    roll: '2354008',
    award: 'Certificate of Excellence (Branch Topper)',
    category: 'PG',
    badge: 'Certificate of Excellence',
    image: '/images/souvenir/pg_arunish_kumar.png',
    gender: 'm',
  }
];

export const BEST_GRADUATES = [
  {
    name: 'Thandava Purandeswar Reddy',
    dept: 'Computer Science & Engineering',
    roll: '2106064',
    title: 'Best Graduate (Boy)',
    cash: 'Rs. 10,001/- with Letter of Appreciation',
    image: '/images/souvenir/best_grad_boy_thandava.png',
    gender: 'm' as const,
  },
  {
    name: 'Anand Setu',
    dept: 'Architecture & Planning',
    roll: '2005021',
    title: 'Best Graduate (Girl)',
    cash: 'Rs. 10,001/- with Letter of Appreciation',
    image: '/images/souvenir/best_grad_girl_anand_setu.png',
    gender: 'f' as const,
  }
];

export const PROGRAMME_EVENTS = [
  {
    time: '08:00 AM',
    title: 'Arrival & Reporting at Venue',
    description: 'Graduating students and invited guests arrive at Main Campus for verification and robing.'
  },
  {
    time: '09:00 AM',
    title: 'Mandatory Full Dress Rehearsal',
    description: 'Full ceremonial rehearsal with Director, Deans, Senate members, and all degree recipients.'
  },
  {
    time: '12:00 PM',
    title: 'Robing & Lunch Reception',
    description: 'Collection of ceremonial convocation stoles and lunch in the guest dining enclosure.'
  },
  {
    time: '02:15 PM',
    title: 'Academic Procession Enters Hall',
    description: 'Formal academic procession of Senate Members, Board of Governors, Director, and Hon’ble Chief Guest.'
  },
  {
    time: '02:25 PM',
    title: 'Lighting of Lamp & Saraswati Vandana',
    description: 'Traditional lamp lighting ceremony by Dignitaries on Dais followed by Saraswati Vandana.'
  },
  {
    time: '02:35 PM',
    title: 'Declaration of Opening of Convocation',
    description: 'Convocation is officially declared “Open” by Shri Ashok Kumar Modi, Chairperson, BOG, NIT Patna.'
  },
  {
    time: '02:40 PM',
    title: 'Address by Chief Guest Shri Nitish Kumar',
    description: 'Keynote Convocation Address by Chief Guest, Hon’ble Chief Minister of Bihar Shri Nitish Kumar.'
  },
  {
    time: '03:00 PM',
    title: 'Award of Gold Medals & Certificates',
    description: 'Presentation of President’s Gold Medals, Director’s Gold Medals, Endowment Medals, and Certificates.'
  },
  {
    time: '03:30 PM',
    title: 'Welcome Address & Director’s Report',
    description: 'Presented by Prof. Pradip Kumar Jain, Director, NIT Patna, highlighting institutional growth and NIRF 53 rank.'
  },
  {
    time: '03:50 PM',
    title: 'Address by Chairperson, BOG',
    description: 'Address by Shri Ashok Kumar Modi, Chairperson, Board of Governors, NIT Patna.'
  },
  {
    time: '04:10 PM',
    title: 'Confirmation of Degrees & Solemn Pledge',
    description: 'Confirmation of Degrees and administration of the solemn Convocation Pledge (दीक्षान्त प्रतिज्ञा).'
  },
  {
    time: '04:30 PM',
    title: 'Award of Degrees by Director',
    description: 'Conferral of Ph.D, M.Tech, M.Arch, MURP, B.Tech, and B.Arch degrees.'
  },
  {
    time: '05:45 PM',
    title: 'National Anthem & Closing Declaration',
    description: 'National Anthem followed by formal declaration of closing of Convocation and departure of Academic Procession.'
  },
  {
    time: '06:15 PM',
    title: 'Group Photography & High-Tea',
    description: 'Departmental group photographs with Chief Guest and dignitaries, followed by celebratory high-tea.'
  }
];

export const CONVOCATION_COMMITTEES: Committee[] = [
  {
    id: 'media',
    name: 'Media & Publication Sub-Committee',
    duties: [
      'Posters and flex preparation',
      'Newspaper advertisements and press coverage',
      'Printing and drafting of Convocation Souvenir 2025',
      'Official photography and live stream documentation'
    ],
    members: [
      { name: 'Dr. Mukesh Kumar', designation: 'Asstt. Professor (CSE)', role: 'Convenor' },
      { name: 'Dr. Rajan Agrahari', designation: 'Asstt. Professor (ECE)', role: 'Co-Convenor' },
      { name: 'Dr. Abhishek Kumar Bittu', designation: 'Asstt. Professor (Arch. & Planning)', role: 'Co-Convenor' },
      { name: 'Prof. Prakash Chandra', designation: 'Professor (MED) & Dean (FW)', role: 'Member' },
      { name: 'Prof. Samrat Mukherjee', designation: 'Professor (APME)', role: 'Member' },
      { name: 'Dr. Sunil Singh Rana', designation: 'Asstt. Professor (MED)', role: 'Member' },
      { name: 'Dr. Lakshmi Kushwaha', designation: 'Asstt. Professor (CST)', role: 'Member' }
    ]
  },
  {
    id: 'degree_prep',
    name: 'Degree Preparation Sub-Committee',
    duties: [
      'Printing of Degrees, Certificates of merit & presenting them at the time of Award',
      'Arranging Overall Topper and Branch Topper Medals in sequence',
      'Arranging Best Boy & Best Girl prize (Rs. 10,001/-) in sequence',
      'Arranging Degree folders & Convocation dress distribution and management',
      'Organising the Pre-convocation rehearsal under guidance of Dean (Academic)'
    ],
    members: [
      { name: 'Dr. Bikash Chandra Sahana', designation: 'Assoc. Professor (ECE)', role: 'Convenor' },
      { name: 'Dr. Chetan Kumar Hirwani', designation: 'Asstt. Professor (MED)', role: 'Co-Convenor' },
      { name: 'Dr. Banavath Balaji Naik', designation: 'Asstt. Professor (CSE)', role: 'Co-Convenor' },
      { name: 'Dr. Shiv Shankar Kumar', designation: 'Asstt. Professor (CED)', role: 'Member' },
      { name: 'Prof. A.R. Quaff', designation: 'Professor (CED) & Assoc. Dean (Examinations)', role: 'Member' },
      { name: 'Prof. Anshuman Singh', designation: 'Professor (CED)', role: 'Member' },
      { name: 'Dr. Golak Bihari Mahanta', designation: 'Asstt. Professor (MAE)', role: 'Member' },
      { name: 'Mrs. Bobby', designation: 'Dy. Registrar (Exam.)', role: 'Member' },
      { name: 'Shri Abhay Kumar', designation: 'Asstt. Registrar (PG)', role: 'Coordinator' }
    ]
  },
  {
    id: 'registration',
    name: 'Registration & MIS Sub-Committee',
    duties: [
      'Management of degree recipients registration portal',
      'Generation of digital attendance QR entry passes',
      'Hall seating allocation and verification at entry gate'
    ],
    members: [
      { name: 'Dr. Banavath Balaji Naik', designation: 'Asstt. Professor (CSE) & WDC Lead', role: 'Convenor' },
      { name: 'Shri Akash Kumar', designation: 'Tech. Asstt. (MIS)', role: 'Member' },
      { name: 'Shri Praveen Kr Chourasiya', designation: 'Superintendent (Academic)', role: 'Member' },
      { name: 'Shri Aditya Abhinav', designation: 'Superintendent (Academic)', role: 'Member' }
    ]
  },
  {
    id: 'it_services',
    name: 'IT Services Management Committee',
    duties: [
      'Convocation web portal and mobile responsive directory',
      'Live streaming on YouTube and campus networks',
      'Network connectivity, WiFi, and digital signage'
    ],
    members: [
      { name: 'Prof. Prabhat Kumar', designation: 'Professor (CSE) & Head (CCIS)', role: 'Convenor' },
      { name: 'Dr. Santosh Kumar', designation: 'Scientific Officer', role: 'Co-Convenor' },
      { name: 'Mr. Ritesh Kumar', designation: 'Technical Assistant, CCIS', role: 'Member' },
      { name: 'Mr. Paritosh Bhushan', designation: 'Technical Assistant, CCIS', role: 'Member' },
      { name: 'Mr. Purushottam Kumar', designation: 'Technical Assistant, CCIS', role: 'Member' }
    ]
  },
  {
    id: 'venue',
    name: 'Venue & Seating Sub-Committee',
    duties: [
      'Finalisation & Decoration of Venue inside and outside',
      'Dais arrangement, backdrop, PA sound system, and Dais nameplates',
      'Campus lighting of Institute Main Building & Central Library',
      'Generator power backup and student seating coordination'
    ],
    members: [
      { name: 'Dr. Mazharul Haque', designation: 'Assoc. Professor (Arch. & Planning)', role: 'Convenor' },
      { name: 'Dr. Vimlesh Verma', designation: 'Assoc. Professor (EED)', role: 'Co-Convenor' },
      { name: 'Dr. Ambarish Maurya', designation: 'Asstt. Professor (MED)', role: 'Co-Convenor' },
      { name: 'Prof. Prakash Chandra', designation: 'Professor & HoD (MED)', role: 'Member' },
      { name: 'Prof. Baboo Rai', designation: 'Professor (CED) & EE (ESU)', role: 'Member' }
    ]
  },
  {
    id: 'transport',
    name: 'Reception & Transport Sub-Committee',
    duties: [
      'Reception of Hon’ble Guests and Dignitaries at Airport/Railway Station',
      'Arrangement of protocol vehicular transportation and campus reception'
    ],
    members: [
      { name: 'Dr. Bambam Kumar', designation: 'Asstt. Professor (ECE)', role: 'Convenor' },
      { name: 'Dr. Anil Kumar Sharma', designation: 'Asstt. Professor (CED)', role: 'Co-Convenor' },
      { name: 'Dr. Sonu Rajak', designation: 'Asstt. Professor (MED)', role: 'Member' },
      { name: 'Dr. Mukesh Choudhary', designation: 'Assoc. Professor (Chem.)', role: 'Member' },
      { name: 'Dr. Abhimanyu Kumar', designation: 'Asstt. Professor (CSE)', role: 'Member' }
    ]
  },
  {
    id: 'food',
    name: 'Food Arrangement Committee',
    duties: [
      'Arrangement of Convocation Lunch/Dinner and Refreshments on rehearsal and Convocation Day',
      'VIP lounge catering and student dining enclosure management'
    ],
    members: [
      { name: 'Prof. Amit Kumar', designation: 'Professor (MED)', role: 'Convenor' },
      { name: 'Dr. Omji Shukla', designation: 'Asstt. Professor (MED)', role: 'Co-Convenor' },
      { name: 'Dr. Deepak Kr. Behera', designation: 'Assoc. Professor (HSS)', role: 'Co-Convenor' },
      { name: 'Dr. Ajay Kumar Maurya', designation: 'Asstt. Professor (ECE)', role: 'Member' }
    ]
  }
];

export const STOLE_GUIDELINES = [
  {
    degree: 'Doctor of Philosophy (Ph.D)',
    color: 'Royal Maroon Stole with Golden NITP Crest & Embellished Tassels',
    dressCode: 'Male: White Kurta-Pyjama / Female: White Saree with Golden Border or White Salwar-Kurta',
    hex: '#800000'
  },
  {
    degree: 'Master of Technology (M.Tech) / M.Arch / MURP',
    color: 'Deep Navy Blue Stole with Silver NITP Crest',
    dressCode: 'Male: White Kurta-Pyjama / Female: White Saree or White Salwar-Kurta',
    hex: '#1E3A8A'
  },
  {
    degree: 'Bachelor of Technology (B.Tech) / B.Arch',
    color: 'Golden Yellow Stole with Maroon NITP Crest',
    dressCode: 'Male: White Kurta-Pyjama / Female: White Saree or White Salwar-Kurta',
    hex: '#D97706'
  },
  {
    degree: 'Gold Medalists & Special Awardees',
    color: 'Special Tri-color / Imperial Gold Stole with Gold Ribbon',
    dressCode: 'Prescribed Indian Formal Attire with Official Stole',
    hex: '#EAB308'
  }
];
