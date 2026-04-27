# Hotel Search Integration

This document describes the complete hotel search integration implemented for the Triponik travel app.

## Overview

The hotel search system provides a comprehensive solution for searching and booking hotels through the Hotelbeds API. It includes:

- **Shared search logic** between home page SearchBar and hotels page HotelSearch components
- **Real-time destination suggestions** with debounced API calls
- **URL-based state management** for search parameters
- **Comprehensive error handling** with retry logic
- **Responsive UI components** for displaying search results
- **Type-safe API integration** with Zod validation

## Architecture

### Core Components

1. **Types & Validation** (`lib/hotels/types.ts`)
   - Complete TypeScript types for all API requests/responses
   - Zod schemas for runtime validation
   - Error classes for API and parsing errors

2. **API Client** (`lib/hotels/client.ts`)
   - HTTP client with retry logic and timeout handling
   - Request/response validation using Zod
   - Currency and date formatting utilities
   - AbortController support for request cancellation

3. **Search Hook** (`hooks/useHotelSearch.ts`)
   - Shared state management for search forms
   - URL parameter synchronization
   - Debounced suggestion fetching
   - Form validation and error handling

4. **UI Components**
   - `SearchBar` - Hero section search form
   - `HotelsSearchBar` - Compact search form for hotels page
   - `HotelCard` - Individual hotel display with room rates
   - `RoomRates` - Detailed rate selection interface
   - Common components: `SkeletonCard`, `ErrorState`, `EmptyState`

### Data Flow

```
User Input → useHotelSearch Hook → API Client → Hotelbeds API
     ↓
URL Parameters → Hotels Page → Results Page → Hotel Cards
```

## API Integration

### Endpoints

- `POST /hotels/search` - Search for hotels
- `GET /hotels/suggest?query=...` - Get destination suggestions
- `GET /hotels/{code}` - Get hotel details

### Request/Response Models

All API models are fully typed and validated:

```typescript
// Search Request
type HotelSearchRequest = {
  stay: { checkIn: string; checkOut: string };
  occupancies: Array<{ rooms: number; adults: number; children: number }>;
  filter: { destination?: { code: string } | { keyword: string } };
  // ... additional fields
};

// Search Response
type HotelSearchResponse = {
  hotels: Array<{
    code: string;
    name: string;
    stars?: number;
    rooms: Array<{
      code: string;
      name: string;
      rates: Array<{
        rateKey: string;
        price: { net: number; currency: string };
        refundable: boolean;
        // ... additional fields
      }>;
    }>;
  }>;
  // ... metadata
};
```

## Features

### Search Functionality

- **Destination autocomplete** with real-time suggestions
- **Date range selection** with validation
- **Guest occupancy** configuration (adults, children, rooms)
- **Form validation** with user-friendly error messages
- **URL state persistence** for bookmarkable searches

### Results Display

- **Grid layout** with responsive design
- **Hotel cards** showing key information and photos
- **Rate selection** with detailed room options
- **Sorting and filtering** options
- **Loading states** with skeleton placeholders
- **Error handling** with retry functionality

### User Experience

- **Debounced search** to reduce API calls
- **Keyboard navigation** for accessibility
- **Loading indicators** during API calls
- **Empty states** with helpful messaging
- **Error recovery** with retry options

## Configuration

### Environment Variables

```bash
# Client-side (browser) configuration
NEXT_PUBLIC_API_BASE_URL=/api

# Server-side credentials for Triponik Hotelbeds proxy
HOTEL_API_BASE_URL=https://api.triponik.uz
HOTEL_API_USERNAME=your-basic-auth-username
HOTEL_API_PASSWORD=your-basic-auth-password

# Optional: fallback to mock data during development
NEXT_PUBLIC_USE_HOTEL_MOCKS=false
```

### API Proxy Behaviour

- The frontend now talks to `/api/hotels/*` routes, which run on the Next.js server.
- The proxy attaches HTTP Basic Auth credentials (from `HOTEL_API_USERNAME/PASSWORD`) when calling Triponik’s upstream endpoints like `/hotel/hotel/availability/` and `/amadeus/cities`.
- If the upstream call fails and `NEXT_PUBLIC_USE_HOTEL_MOCKS=true`, the proxy falls back to the local mock implementations so the UI remains usable offline.
- Without valid credentials the search endpoint returns a 500 error, making the misconfiguration visible during development.

## Usage Examples

### Basic Search

```typescript
const { formData, handleSearch, searchResults } = useHotelSearch();

// Set search parameters
updateFormData({
  destination: 'Paris',
  checkIn: '2025-05-05',
  checkOut: '2025-05-10',
  adults: 2,
  children: 0,
  rooms: 1
});

// Trigger search
handleSearch();
```

### API Calls

```typescript
// Search hotels
const results = await searchHotels({
  stay: { checkIn: '2025-05-05', checkOut: '2025-05-10' },
  occupancies: [{ rooms: 1, adults: 2, children: 0 }],
  filter: { destination: { keyword: 'Paris' } }
});

// Get suggestions
const suggestions = await getSuggestions('Paris');

// Get hotel details
const details = await getHotelDetails('12345');
```

## Error Handling

The system includes comprehensive error handling:

- **Network errors** with automatic retry
- **API errors** with status code handling
- **Validation errors** with user-friendly messages
- **Timeout handling** with configurable limits
- **Graceful degradation** for missing data

## Performance Optimizations

- **Request debouncing** for search suggestions
- **Query caching** with React Query
- **Lazy loading** for hotel details
- **Image optimization** with fallbacks
- **Request cancellation** for outdated searches

## Accessibility

- **Keyboard navigation** support
- **Screen reader** compatibility
- **ARIA labels** for form inputs
- **Focus management** for modals and dropdowns
- **Color contrast** compliance

## Testing

The integration includes:

- **Type safety** with TypeScript
- **Runtime validation** with Zod
- **Error boundary** handling
- **Mock data** for development
- **Storybook** integration ready

## Future Enhancements

- **Advanced filtering** (price range, amenities, ratings)
- **Map integration** for location-based search
- **Booking flow** integration
- **Favorites** and wishlist functionality
- **Multi-language** support
- **Offline** search capabilities

## Dependencies

- `@tanstack/react-query` - Data fetching and caching
- `zod` - Runtime validation
- `react-hook-form` - Form management
- `use-debounce` - Debounced input handling
- `dayjs` - Date manipulation
- `antd` - UI components

## File Structure

```
lib/
├── hotels/
│   ├── types.ts          # TypeScript types and Zod schemas
│   └── client.ts         # API client with HTTP logic
├── config.ts             # Configuration constants
└── providers/
    └── QueryProvider.tsx # React Query provider

hooks/
└── useHotelSearch.ts     # Shared search state management

components/
├── SearchBar.tsx         # Hero section search form
├── HotelsSearchBar/      # Compact search form
├── hotels/
│   ├── HotelCard.tsx    # Individual hotel display
│   └── RoomRates.tsx    # Rate selection interface
└── common/               # Reusable UI components
    ├── SkeletonCard.tsx
    ├── ErrorState.tsx
    └── EmptyState.tsx

app/
├── hotels/
│   ├── page.tsx         # Hotels search page
│   └── results/
│       └── page.tsx     # Search results page
└── layout.tsx           # Root layout with providers
```

This integration provides a complete, production-ready hotel search system that can be easily extended and maintained.
