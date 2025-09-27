# Angular 19 Dashboard & Tasks App

This project is an Angular 19 application with a dashboard and task management interface, using **PrimeNG** components for UI. It demonstrates modern Angular practices, including standalone components, lazy loading, interfaces, enums, and SCSS 7-1 architecture.

---

## Table of Contents

* [Setup Instructions](#setup-instructions)
* [Libraries Used](#libraries-used)
* [Folder Structure](#folder-structure)
* [Explanation of Decisions](#explanation-of-decisions)
* [Project Timeline and Scope](#project-timeline-and-scope)

---

## Setup Instructions

1. **Clone the repository**:

```
git clone <your-repo-url>
cd <project-folder>
```

2. **Install dependencies**:

```
npm install
```

3. **Run the application**:

```
ng serve
```

Open your browser at `http://localhost:4200`.

---

## Libraries Used

* **Angular 19** – Frontend framework.
* **PrimeNG** – UI component library.
* **Faker.js** – For generating mock data.
* **RxJS** – Reactive programming, used for tasks stream.
* **SCSS (7-1 Architecture)** – For modular and maintainable styling.

---

## Folder Structure

```
├── features/
│   ├── auth/
│   │   └── login/
│   ├── dashboard/
│   │   ├── dashboard.component.ts
│   │   └── dashboard.routes.ts
│   └── tasks/
│       ├── tasks.component.ts
│       └── tasks.routes.ts
├── services/
│   └── faker.service.ts
├── styles/
│   └── pages/
├── app.component.ts
├── app.module.ts
└── main.ts
```

* **features/** – Contains standalone components and route files.
* **services/** – Shared service for generating fake data and managing state.
* **styles/** – SCSS 7-1 folder structure for modular styling.

---

## Explanation of Decisions

1. **PrimeNG for UI**:
   Used PrimeNG components exclusively for UI elements to simplify styling, ensure consistency, and speed up development.

2. **Standalone Components**:
   Components were made standalone where possible for modularity and lazy loading.

3. **BehaviorSubject in Service**:
   Tasks are managed via a `BehaviorSubject` in the `FakerService` so multiple components (dashboard and tasks) share the same task stream.

4. **Enums and Interfaces**:

   * `TaskStatus` enum ensures type safety for task statuses.
   * Interfaces (`Task`, `LoginUser`, etc.) provide type safety across components and services.

5. **SCSS 7-1 Architecture**:
   Enables modular, maintainable, and reusable styles. Page-specific SCSS files are imported globally to avoid duplication issues in component styles.

---

## Project Timeline and Scope

Due to time constraints, not all requirements could be fully implemented.
Development priorities were set to focus on the core features and deliver a functional MVP.

**Development Duration:** The project was completed over three days, rather than the initially planned five days because of previously mentioned time constraints.
With additional time, a more comprehensive and refined implementation could have been delivered.
