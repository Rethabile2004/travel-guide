# **Travel Guide Platform**

A modern, full-stack travel guide platform built with **Next.js App Router**, designed to showcase clean architecture, real-world product thinking, and junior-to-mid level full-stack engineering skills.

🔗 **Live Demo:**
[https://travel-guide-git-main-rethabile2004s-projects.vercel.app/](https://travel-guide-git-main-rethabile2004s-projects.vercel.app/)

---

## **Overview**

The **Travel Guide Platform** enables users to explore destinations, read curated travel guides, plan trips, save favorites, and purchase premium content.
The application is built to mirror professional internal product documentation and engineering standards, focusing on scalability, maintainability, and UX quality.

This project demonstrates:

* End-to-end full-stack development
* Authentication and authorization
* Database modeling and access patterns
* Secure payments
* Component-driven UI architecture
* Production-ready routing and error handling

---

## **Tech Stack**

### **Core Technologies**

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" width="40" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="40" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="40" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" width="40" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg" width="40" />
</p>

### **Platform & Services**

<p align="left">
  <img src="https://avatars.githubusercontent.com/u/54469796?s=200&v=4" width="40" title="Supabase" />
  <img src="https://avatars.githubusercontent.com/u/7802525?s=200&v=4" width="40" title="Clerk" />
  <img src="https://avatars.githubusercontent.com/u/856813?s=200&v=4" width="40" title="Stripe" />
  <img src="https://avatars.githubusercontent.com/u/75042455?s=200&v=4" width="40" title="Radix UI" />
</p>

---

## **Key Features**

### **Authentication & User Management**

* Secure authentication using **Clerk**
* Protected routes with auth guards
* User profiles and preferences
* Purchased content access control

### **Destinations**

* Browse all destinations
* Filter by region, country, and budget
* Sort by popularity and rating
* Detailed destination pages with:

  * Image galleries
  * Attractions and tips
  * User reviews
  * Favorites (authenticated users)

### **Travel Guides**

* Free and premium travel guides
* Locked premium previews
* Full guide access after purchase
* Stripe-powered checkout flow

### **Trip Planning**

* Create and manage trips
* Add destinations to trips
* Store travel dates and notes
* Editable itineraries

### **Favorites**

* Save destinations and guides
* Remove saved items
* Centralized favorites view

### **Payments**

* Secure Stripe checkout sessions
* Post-payment confirmation
* Automatic access to purchased guides

---

## **Application Routes**

### **Public Pages**

| Route                  | Description         |
| ---------------------- | ------------------- |
| `/`                    | Home & discovery    |
| `/destinations`        | Destination listing |
| `/destinations/[slug]` | Destination details |
| `/guides`              | Travel guides       |
| `/guides/[slug]`       | Guide details       |

### **Authentication**

| Route      | Description       |
| ---------- | ----------------- |
| `/sign-in` | User login        |
| `/sign-up` | User registration |

### **User Pages**

| Route        | Description        |
| ------------ | ------------------ |
| `/dashboard` | User dashboard     |
| `/favorites` | Saved items        |
| `/trips`     | Trip planning      |
| `/profile`   | Profile & settings |

### **Commerce**

| Route               | Description          |
| ------------------- | -------------------- |
| `/checkout`         | Stripe checkout      |
| `/checkout/success` | Payment confirmation |

### **Utility & Legal**

| Route      | Description        |
| ---------- | ------------------ |
| `/about`   | About the platform |
| `/contact` | Contact form       |
| `/privacy` | Privacy policy     |
| `/terms`   | Terms & conditions |

### **Error Handling**

* `/not-found` – Custom 404 page
* `/error` – Global error boundary

---

## **Architecture & Code Quality**

* **Next.js App Router** with server components
* **Feature-based folder structure**
* Fully typed with **TypeScript**
* **Prisma ORM** for database access
* **Zod** validation for forms and inputs
* Reusable UI components
* Loading, empty, and error states
* Responsive design (mobile-first)
* Clean separation of concerns

---

## **Screenshots**

<p align="center"> 
  <img width="900" alt="overview page" src="https://github.com/user-attachments/assets/73e4ae4a-905c-4735-8676-ed0ad93912a4" />
</p> 
<p align="center"> 
 <img width="900"alt="user list images" src="https://github.com/user-attachments/assets/70df1e82-1f58-4bf9-b06c-56078cbe47a2" />
</p> 
<p align="center"> 
  <img width="900" alt="destinations page" src="https://github.com/user-attachments/assets/b4976441-7eec-4ddd-ba74-451d0cca0641" />
</p> 
<p align="center"> 
  <img width="900" alt="add guide page" src="https://github.com/user-attachments/assets/479eacc2-0ab0-467c-b741-ccdbc8b94ac7" />
</p> 
<p align="center"> 
  <img width="900" alt="list guides page" src="https://github.com/user-attachments/assets/7389d06b-6b82-46b2-8b78-2fe779b9007f" />
</p> 

---

## **Getting Started**

### **Prerequisites**

* Node.js 18+
* npm / pnpm / yarn
* Environment variables for:

  * Clerk
  * Supabase
  * Stripe
  * Database connection

### **Installation**

```bash
git clone https://github.com/rethabile2004/travel-guide-platform.git
cd travel-guide-platform
npm install
```

### **Run Locally**

```bash
npm run dev
```

---

## **Project Status**

This project implements **all required functionality** defined in the specification.
Optional future enhancements (admin dashboard, maps, AI features, offline support) are **intentionally excluded**.

---

## **Author**

**Rethabile Eric Siase**
IT student
Focused on full-stack web development with production-level standards
