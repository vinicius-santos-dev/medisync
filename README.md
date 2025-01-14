# MediSync 🏥

A modern medical appointment scheduling system built with Next.js 15 and Appwrite. <br />
Features a user-friendly interface for patient registration and appointment management.

<img src="https://github.com/user-attachments/assets/1b4f110a-a6a2-4c5d-8ecd-194436b77150" alt="MediSync - Home" width="500">
<img src="https://github.com/user-attachments/assets/f725669c-63fd-4a40-bbf3-d680f4e3f29f" alt="MediSync - Admin" width="500">

## ✨ Key Features

- 📅 Appointment scheduling and management
- 🔐 Secure admin authentication
- 📊 Admin dashboard with statistics
- 👥 Patient registration system
- 📄 Patient documentation upload
- 📨 SMS notifications
- 🌐 Timezone support
- 📱 Responsive design

## 🛠️ Technical Stack

### Frontend
- Next.js 15
- TailwindCSS
- Shadcn/ui

### Backend & Services
- Appwrite
  - Database & Authentication
  - SMS Messaging Service
  - File Storage Bucket

### Monitoring & Error Tracking
- Sentry
  - Real-time error tracking
  - Performance monitoring
  - User session replay

### Infrastructure
- Vercel (Hosting)

## 🚀 Getting Started

1. Clone the repository:

```
git clone https://github.com/vinicius-santos-dev/medisync.git
```

2. Install dependencies:

```
npm install
```

3. Configure environment variables:

```
PROJECT_ID=your-project-id
API_KEY=your-api-key
DATABASE_ID=your-database-id
PATIENT_COLLECTION_ID=your-collection-id
APPOINTMENT_COLLECTION_ID=your-collection-id
NEXT_PUBLIC_BUCKET_ID=your-bucket-id
NEXT_PUBLIC_ENDPOINT=your-endpoint
NEXT_PUBLIC_ADMIN_PASSKEY=your-admin-key
```

4. Start the development server:

```
npm run dev
```

## 🎯 Project Structure
```
src/
├── app/             # Page components
├── components/      # Reusable components
├── constants/       # Application-wide constants and defaults
├── hooks/           # Custom hooks
├── lib/             # Utilities and configurations
│   ├── actions/     # Server actions
│   ├── appwrite     # Appwrite client configuration
│   ├── utils        # Helper functions
│   └── validation   # Form validations
└── public/          # Static assets 
└── types/           # TypeScript definitions
```

## 🔗 Live Demo

Check out the live demo: [MediSync](https://viniciusdev-medisync.vercel.app)

## 📫 Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vinicius-santos-dev)
[![Portfolio](https://img.shields.io/badge/Portfolio-470FA3?style=for-the-badge&logo=About.me&logoColor=white)](https://www.viniciussantos.dev)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send?phone=5511984375850)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:vinicius.ssantos.dev@gmail.com)