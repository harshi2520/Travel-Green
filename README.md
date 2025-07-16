# 🌱 Travel Green: Carbon Credit Tracking & Trading System

> A sustainable commuting and carbon credit trading platform powered by Next.js, Flutter, Firebase, and Google Maps SDK.

---

## 🚀 Project Overview

Travel Green is a full-stack sustainability platform that encourages eco-friendly commuting by tracking low-carbon travel and converting it into carbon credits. These credits can be traded in a bank-regulated marketplace, offering financial incentives for individuals and organizations to reduce emissions. This project integrates real-time GPS tracking, role-based access, and secure credit trading, all built on a scalable serverless architecture.

✅ Web (Next.js + Vercel)

✅ Mobile (Flutter + Google Maps SDK)

✅ Backend (Firebase Auth + Firestore + Functions)


---
## 🎯 Key Features

🔐 Multi-role platform: Employee, Employer, Bank, and Admin dashboards

📍 GPS-based trip tracking: Walking, cycling, and public transport via mobile

🌱 Carbon credit accumulation: Configurable formulas based on distance

💹 Marketplace for credit trading: Employer-to-employer trades regulated by a Bank entity

🔄 Real-time updates: Firestore-backed trip logs and leaderboards

📊 Analytics dashboards: CO₂ saved, credits earned, transport breakdown

🧠 Gamification & Social sharing: Leaderboards, badges, and shareable achievements

💬 Push notifications: Registration approvals, trade updates, and milestone alerts

---
## 🧑‍💼 Use Cases

| Role                | Capabilities |
|-------------------------|------------------|
| **Employee**      | Logs trips, views credits, competes on leaderboards. |
| **Employer** | Approves employees, posts/accepts trades, monitors org credits. |
| **Bank**  | Approves employers and trades, oversees compliance. |
| **System Admin**       | Full access for troubleshooting, audits, and configuration. |

---
## 🧱 Tech Stack
| Layer               | Technology |
|-------------------------|------------------|
| **Frontend (Web)**      | Next.js, Tailwind CSS, React, Recharts |
| **Frontend (Mobile)** | 	Flutter, Dart, Google Maps SDK, Share+ |
| **Backend**  | Firebase Firestore, Firebase Authentication, Firebase Cloud Functions |
| **Deployment**       | Vercel, Firebase Hosting, CI/CD via GitHub |
| **Design & Dev Tools**       | Figma, VS Code, ESLint, Prettier, Jest, Flutter Test |


## 📱 Live Demo

🌐 Web App: https://carbon-credit-project.vercel.app

📲 Mobile App Repo: Travel Green Mobile

---
## 🔐 Demo Credentials

Role	                Email                   	Password
Employee      	  emp1@harshi.com                	123456
Employer	        admin@harshi.com	              123456
Bank	            bank@carbonbank.com	            BankPass123
System Admin	    admin@carboncredit.com	        AdminPass123

✅ Highlights:

- Daily trends in patient counts, wait times, and satisfaction.
- Admission and referral metrics.
- Demographics filtered for the selected month.
- Hourly heatmap for operational insights.

![Monthly View](https://github.com/harshi2520/Hospital-Management-Dashboard/blob/main/Monthly%20View.png)

---

### 📄 2. Holistic View

An overall, high-level summary of emergency department performance across all available data.

✅ Highlights:

- Monthly trends in patient volume, wait time, and satisfaction.
- Total counts of admitted and referred patients.
- Age group, gender, and race demographics.
- A heatmap of arrivals by day and hour.

![Consolidated View](https://github.com/harshi2520/Hospital-Management-Dashboard/blob/main/Holistic%20View.png)

---

### 📄 3. Patient Details

A tabular view of patient-level data:
- Shows detailed records with fields like Patient Name, Age, Gender, Admission Date, Race, Referral Department, and Admission Status
- Filterable by date and other attributes for deeper analysis
- Useful for audits and internal reviews.

![Patient Details](https://github.com/harshi2520/Hospital-Management-Dashboard/blob/main/Patient%20Details.png)

---

### 🧠 4. Summary

A narrative-based summary generated from insights:
- Highlights top trends in wait times, referrals, admission behavior, and demographics
- Written in natural language, useful for stakeholders who prefer summaries over visuals
- Supports strategic planning and performance reviews

![Summary](https://github.com/harshi2520/Hospital-Management-Dashboard/blob/main/Summary.png)

---

## 📘 Key DAX Insight: % of Patients Seen Within 30 Minutes

As part of building this dashboard, I created a DAX measure to track how effectively the ER meets its triage benchmark.

### 📌 DAX Formula


### 🖼️ Screenshot: % of Patients Seen Within 30 Minutes

![C](https://github.com/bhumikabharadwaj2205/Hospital-Management-Dashboard/blob/main/Formula.png))


### 🧮 What the Formula Does

- Numerator: Counts patients whose wait time was 30 minutes or less.
- Denominator: Counts all patients.
- DIVIDE: Returns the percentage safely, avoiding divide-by-zero errors.

📊 **For example**:  
If 4,500 out of 7,500 patients were seen within 30 minutes, the KPI would show 60%.








































This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
