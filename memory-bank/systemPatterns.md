# System Patterns

## Architecture
- Frontend: React (with TypeScript), Vite, Tailwind CSS
- State management: React hooks and context
- File uploads: Local storage (public/lovable-uploads/), with potential for cloud integration

## Key Technical Decisions
- Modular component structure (src/components)
- Separation of UI, hooks, and utility logic
- Use of Tailwind CSS for rapid UI development
- Emphasis on maintainability and scalability

## Design Patterns
- Container/presentational component split
- Custom hooks for data fetching and state logic
- Context for global state (e.g., user, theme)

## Component Relationships
- Pages composed of reusable UI components
- Hooks provide data and actions to components
- Lib utilities shared across features 