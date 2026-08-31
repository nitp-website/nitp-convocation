// Official Data Extracted from NIT Patna 14th Convocation Souvenir 2025

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
  honor?: string;
  image?: string;
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
  bihtaCampus: 'Bihta Campus (125 Acres), Patna, Bihar – 801 106',
  nirfRank: '53rd in India (Engineering - NIRF 2025)',
  patents: '371+ Applications, 200+ Secured Patents',
  totalGraduates: '1,200+',
  phdScholars: '51+',
  goldMedals: '12+',
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
    role: 'Leader of the Nation (Dedicated Bihta Campus)',
    org: 'Government of India',
    image: '/images/souvenir/narendra_modi.png',
    highlight: true,
    badge: 'Chief Patron'
  },
  {
    name: 'Shri Dharmendra Pradhan',
    designation: 'Hon’ble Minister of Education',
    role: 'Ministry of Education',
    org: 'Government of India',
    image: '/images/souvenir/dharmendra_pradhan.png',
    highlight: true,
    badge: 'Patron'
  },
  {
    name: 'Shri Nitish Kumar',
    designation: 'Hon’ble Chief Minister of Bihar',
    role: 'Chief Guest, XIV Convocation',
    org: 'Government of Bihar',
    image: '/images/souvenir/nitish_kumar.png',
    highlight: true,
    badge: 'Chief Guest'
  },
  {
    name: 'Shri Ashok Kumar Modi',
    designation: 'Chairperson, Board of Governors',
    role: 'Presiding Officer',
    org: 'NIT Patna & Eden Group',
    image: '/images/souvenir/ashok_modi.png',
    highlight: false,
    badge: 'Chairperson, BOG'
  },
  {
    name: 'Prof. Pradip Kumar Jain',
    designation: 'Director, NIT Patna',
    role: 'Chief Academic Officer',
    org: 'NIT Patna',
    image: '/images/souvenir/pradip_jain.png',
    highlight: false,
    badge: 'Director'
  }
];

export const UG_GOLD_MEDALISTS: Medalist[] = [
  {
    name: 'Harsh Nandan Verma',
    dept: 'Computer Science & Engineering',
    roll: '2106216',
    award: 'President’s Gold Medal & Director’s Gold Medal (Overall UG Topper)',
    category: 'UG',
    badge: 'President & Director Gold Medal',
    image: '/images/souvenir/ug_harsh_nandan_verma.png',
    gender: 'm',
  },
  {
    name: 'Ritika Kumari',
    dept: 'Civil Engineering',
    roll: '2103049',
    award: 'Director’s Gold Medal, K.N. Rohatgi Gold Medal & BCE-NITP Alumni Gold Medal',
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
    award: 'President’s Gold Medal & Director’s Gold Medal (Overall PG Topper)',
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
    description: 'Graduating students and invited guests arrive at Main Campus for security check and identity verification.'
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
    description: 'Traditional lamp lighting ceremony and Saraswati Vandana rendered by student choir.'
  },
  {
    time: '02:35 PM',
    title: 'Declaration of Opening of Convocation',
    description: 'Convocation is officially declared “Open” by Shri Ashok Kumar Modi, Chairperson, BOG, NIT Patna.'
  },
  {
    time: '02:40 PM',
    title: 'Welcome Address & Director’s Report',
    description: 'Presented by Prof. Pradip Kumar Jain, Director, highlighting institutional progress, NIRF 53 rank, and Bihta campus.'
  },
  {
    time: '03:00 PM',
    title: 'Address by Chairperson, BOG',
    description: 'Convocation address delivered by Shri Ashok Kumar Modi, Chairperson, Board of Governors.'
  },
  {
    time: '03:15 PM',
    title: 'Address by Chief Guest, Hon’ble CM of Bihar',
    description: 'Keynote Convocation Address by Chief Guest Shri Nitish Kumar, Hon’ble Chief Minister of Bihar.'
  },
  {
    time: '03:45 PM',
    title: 'Award of Gold Medals & Certificates',
    description: 'Presentation of President’s Gold Medal, Director’s Gold Medals, and Institute Medals to toppers.'
  },
  {
    time: '04:30 PM',
    title: 'Confirmation of Degrees & Solemn Pledge',
    description: 'Administering the solemn Convocation Pledge (दीक्षान्त प्रतिज्ञा) to all graduating candidates.'
  },
  {
    time: '04:45 PM',
    title: 'Award of Degrees by Director',
    description: 'Conferral of Ph.D, M.Tech, M.Arch, MURP, B.Tech, and B.Arch degrees.'
  },
  {
    time: '06:00 PM',
    title: 'National Anthem & Closing Declaration',
    description: 'Assembly stands for the National Anthem, followed by closing declaration and procession departure.'
  },
  {
    time: '06:30 PM',
    title: 'Group Photography & High-Tea',
    description: 'Departmental group photographs with Chief Guest and dignitaries, followed by celebratory reception.'
  }
];
