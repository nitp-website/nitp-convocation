# 🎓 NIT Patna Convocation Platform

Welcome to the **Official Digital Management & Information Platform** for the Annual Convocation Ceremonies of the **National Institute of Technology Patna (NITP)**.

This platform serves as the digital front-door for graduating students, faculty, and honorable guests, providing a high-performance, dynamic experience to explore event proceedings, medalists, and digital archives.

## 🌟 Key Features

- **Awards & Honours Directory**: Showcases President's Gold Medalists, Director's Gold Medalists, and Institute Endowment Awardees.
- **Graduate Search Engine**: A highly optimized, searchable registry of all Ph.D, PG, and UG degree recipients across batches.
- **Event Information**: Real-time itinerary, Flash News updates, Help Desk contacts, and interactive Gallery.
- **Dignitaries & Committees**: Profiles of Chief Guests, National Patrons, Deans, and Senate members.
- **Responsive UI/UX**: Built with Next.js 16 App Router, Tailwind CSS v4, custom typography integration (Playfair Display), and modern web vitals optimizations.

## 💻 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Frontend**: React 19, TypeScript 5, Tailwind CSS v4
- **Data Source**: High-performance local JSON fetching via `data/` and `src/lib/dataFetcher.ts`

## 📁 Repository Structure

```text
convocation-nitp/
├── data/                     # Core JSON data driving the application
│   ├── 2024/                 # Legacy graduates (13th Convocation)
│   ├── 2025/                 # Current graduates (14th Convocation)
│   ├── committees.json
│   ├── dignitaries.json
│   ├── gallery.json
│   ├── info.json
│   └── medals.json
├── public/
│   └── images/
│       └── souvenir/         # High-res portraits neatly structured by year (2024/ and 2025/)
└── src/
    ├── app/                  # Next.js App Router endpoints
    ├── components/           # Reusable UI sections
    ├── lib/                  # Utilities (Data Fetcher)
    └── context/              # React Context for cross-component data distribution
```

## ⚖️ Acknowledgements

- **Developed for:** National Institute of Technology Patna (राष्ट्रीय प्रौद्योगिकी संस्थान पटना).
- All institutional insignia, heraldry, and dignitary likenesses are property of their respective administrative authorities.
