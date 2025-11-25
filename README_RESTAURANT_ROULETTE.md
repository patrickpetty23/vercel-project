# Restaurant Roulette - Next.js Version

This is a Next.js version of the Restaurant Roulette application, optimized for deployment on Vercel.

## Features

- 🎰 **Roulette Wheel**: Spin to discover random restaurants based on your preferences
- ⚙️ **Preferences**: Set cuisine type, price range, and distance preferences
- ❤️ **Favorites**: Save your favorite restaurants for quick access
- 🔍 **Restaurant Details**: View detailed information including menu items, hours, and location
- ⚙️ **Settings**: Customize app preferences and manage data
- 📱 **Responsive Design**: Beautiful mobile-first design with smooth animations

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components built with Radix UI primitives

## Pages

1. **Home (`/`)**: Landing page with app introduction and quick actions
2. **Preferences (`/preferences`)**: Set your dining preferences
3. **Roulette (`/roulette`)**: Spin the wheel to discover restaurants
4. **Favorites (`/favorites`)**: View and manage saved restaurants
5. **Settings (`/settings`)**: Customize app settings
6. **Restaurant Details (`/restaurant/[id]`)**: Detailed view of a specific restaurant

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to view the application.

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

Alternatively, use the Vercel CLI:

```bash
vercel deploy
```

## Data Storage

The app uses browser localStorage to store:
- User preferences (cuisine, price range, distance)
- Favorite restaurants
- App settings

## Project Structure

```
vercel-project/
├── app/
│   ├── layout.tsx           # Root layout with header and navigation
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── favorites/           # Favorites page
│   ├── preferences/         # Preferences page
│   ├── roulette/            # Roulette page
│   ├── settings/            # Settings page
│   └── restaurant/[id]/     # Dynamic restaurant details
├── components/
│   ├── Navigation.tsx       # Bottom navigation bar
│   └── ui/                  # Reusable UI components
│       ├── button.tsx
│       └── card.tsx
├── data/
│   └── restaurants.ts       # Restaurant data and types
└── lib/
    └── utils.ts             # Utility functions

## Features Comparison with Original

This Next.js version includes all features from the original React app:
- ✅ Restaurant roulette with filtering
- ✅ Preference management
- ✅ Favorites system
- ✅ Settings management
- ✅ Restaurant details with menu
- ✅ Google Maps integration
- ✅ Responsive design
- ✅ Smooth animations

## Future Enhancements

- [ ] Integration with real restaurant APIs (Yelp, Google Places)
- [ ] User authentication with Supabase
- [ ] Restaurant reviews and ratings
- [ ] Share favorite restaurants
- [ ] Advanced filtering options
- [ ] Dark mode support

## License

Created for educational purposes.

