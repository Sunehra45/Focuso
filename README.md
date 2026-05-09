(Note : Deployed app link & app code will be updated the following week)
## Live Demo

🔗 Coming Soon

## Focuso
Focuso helps users track focus sessions, analyze productivity trends, and build consistent study habits.

https://github.com/user-attachments/assets/ee3452c2-b63a-4e2f-971b-5bb272c72569

## Why I Built It
Focuso was inspired by my own struggle with maintaining consistent study routines and managing time effectively. I wanted to create a productivity platform that combines Pomodoro-based focus tracking with visual analytics to help users better understand and improve their learning habits.

## Features
- Customizable Pomodoro timer with focus, short break, and long break sessions
- Personalized user profile with overall productivity statistics and weekly activity tracking
- Interactive analytics dashboard for visualizing focus and break trends
- Real-time focus tracking to monitor daily productivity
- Productivity score system to measure consistency and study performance
- Session history tracking with completed Pomodoro records
- Dark mode inspired modern UI designed for distraction-free studying
- Responsive fullstack application optimized for desktop and mobile devices
- Secure authentication and protected routes
- REST API built with modular backend architecture

## Tech Stack

### Frontend
- ```React```
- ```Next.js```
- ```TypeScript```
- ```Tailwind CSS```
- ```Redux```

### Backend
- ```Node.js```
- ```Express```
- ``` MongoDB```

### Authentication
- ```JWT```

### Deployment
- ```Vercel```

 ## Project Structure

## Frontend Architecture
The frontend is built using a scalable App Router architecture with route-based organization, reusable type-safe components, and a clean separation of concerns to ensure maintainability and future scalability.

```bash
app/
├── analytics/
├── dashboard/
├── profile/
├── settings/
└── ...

components/
└── ui/
     └── reusable components 

utils/
└── helper functions and reusable utilities

types/
└── shared TypeScript interfaces and type definitions
```
## Backend Architecture
The backend follows a modular REST API architecture designed for scalability, maintainability, and clean separation of concerns.
```bash
src/
├── config/
│   └── Database and third-party service configuration
│
├── controllers/
│   └── Request handling and application business logic
│
├── models/
│   └── Scalable MongoDB schemas designed with Mongoose
│
├── routes/
│   └── API route definitions for authentication and user operations
│
├── services/
│   └── Reusable business logic and core application services
│
├── types/
│   └── Shared TypeScript interfaces and type definitions
│
└── utility/
    └── Reusable helper functions and utility modules
```

## Future Improvements
- Build a supporting chrome extension allowing users to work in pomdoros & syncing data with app. (In development)
- Make timer state persist across navigation.
- Add streaks feature.
- Add CI/CD pipeline.

