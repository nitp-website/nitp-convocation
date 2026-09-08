# 🎓 NIT Patna Convocation Platform

Welcome to the **Official Digital Management & Information Platform** for the Annual Convocation Ceremonies of the **National Institute of Technology Patna (NITP)**.

This platform serves as the digital front-door for graduating students, faculty, and honorable guests, providing a high-performance, dynamic experience to explore the event proceedings, medalists, and digital archives.

## 🌟 Key Features

- **Multi-Edition Support**: Dynamically serves both the **13th (2024)** and **14th (2025)** Convocation ceremonies through a unified JSON data pipeline.
- **Dynamic Routing**: Instant contextual switching via `/[year]/*` architecture.
- **Awardees & Honours**: Showcases President's Gold Medalists, Director's Gold Medalists, and Institute Endowment Awardees.
- **Graduate Directory**: A searchable registry of all Ph.D, PG, and UG degree recipients.
- **Digital Infrastructure**: Includes locked-down endpoints for Student Registrations, Digital Pass Generation, and an Admin Dashboard (currently preserved for future use).
- **Responsive UI/UX**: Built with Next.js App Router, Tailwind CSS v4, and modern web vitals optimizations (including `<Image />` LCP enforcement).

## 💻 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Frontend**: React 19, TypeScript 5, Tailwind CSS v4
- **Icons**: Lucide React
- **Data Source**: Statically built via `data/[year]/*.json` 

## 📁 Repository Structure

```text
convocation-nitp/
├── data/
│   ├── 2024/                 # Data for the 13th Convocation (2024)
│   └── 2025/                 # Data for the 14th Convocation (2025)
│       ├── committees.json
│       ├── dignitaries.json
│       ├── graduates.json
│       ├── info.json
│       └── medals.json
├── public/
│   └── images/               # Institutional logos and high-res souvenir portraits
├── scripts/                  # Data extraction utilities
└── src/
    ├── app/                  # Next.js App Router endpoints & layouts
    ├── components/           # Reusable UI sections (Hero, Navbar, Footer, etc.)
    └── context/              # React Context for cross-component data distribution
```

## ⚖️ Acknowledgements

- **Developed for:** National Institute of Technology Patna (राष्ट्रीय प्रौद्योगिकी संस्थान पटना).
- All institutional insignia, heraldry, and dignitary likenesses are property of their respective administrative authorities.
