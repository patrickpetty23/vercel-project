// Mock restaurant data for the application
export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  priceRange: string;
  rating: number;
  distance: number;
  address: string;
  phone: string;
  image: string;
  description: string;
  hours: string;
  menu: MenuItem[];
}

export interface MenuItem {
  name: string;
  price: string;
  description: string;
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "The Golden Dragon",
    cuisine: "Chinese",
    priceRange: "$$",
    rating: 4.5,
    distance: 2.3,
    address: "123 Main St, Downtown",
    phone: "(555) 123-4567",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&crop=center",
    description:
      "Authentic Chinese cuisine with modern presentation. Known for our signature Peking duck and hand-pulled noodles.",
    hours: "11:00 AM - 10:00 PM",
    menu: [
      {
        name: "Peking Duck",
        price: "$28",
        description: "Traditional roasted duck with pancakes",
      },
      {
        name: "Kung Pao Chicken",
        price: "$16",
        description: "Spicy stir-fried chicken with peanuts",
      },
      {
        name: "Beef Lo Mein",
        price: "$14",
        description: "Fresh noodles with tender beef",
      },
    ],
  },
  {
    id: 2,
    name: "Mario's Italian Bistro",
    cuisine: "Italian",
    priceRange: "$$$",
    rating: 4.8,
    distance: 1.7,
    address: "456 Oak Ave, Midtown",
    phone: "(555) 234-5678",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
    description:
      "Family-owned Italian restaurant serving traditional recipes passed down through generations.",
    hours: "5:00 PM - 11:00 PM",
    menu: [
      {
        name: "Margherita Pizza",
        price: "$18",
        description: "Fresh mozzarella, tomato, basil",
      },
      {
        name: "Spaghetti Carbonara",
        price: "$22",
        description: "Classic Roman pasta with eggs and pancetta",
      },
      {
        name: "Osso Buco",
        price: "$32",
        description: "Braised veal shanks with risotto",
      },
    ],
  },
  {
    id: 3,
    name: "Sushi Zen",
    cuisine: "Japanese",
    priceRange: "$$$",
    rating: 4.7,
    distance: 3.1,
    address: "789 Pine St, Uptown",
    phone: "(555) 345-6789",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop&crop=center",
    description:
      "Fresh sushi and sashimi prepared by master chefs. Omakase experience available.",
    hours: "12:00 PM - 2:00 PM, 6:00 PM - 10:00 PM",
    menu: [
      {
        name: "Omakase",
        price: "$85",
        description: "Chef's choice of 12 pieces",
      },
      {
        name: "Salmon Roll",
        price: "$12",
        description: "Fresh salmon with avocado",
      },
      {
        name: "Chirashi Bowl",
        price: "$24",
        description: "Assorted sashimi over sushi rice",
      },
    ],
  },
  {
    id: 4,
    name: "Burger Palace",
    cuisine: "American",
    priceRange: "$",
    rating: 4.2,
    distance: 0.8,
    address: "321 Elm St, Downtown",
    phone: "(555) 456-7890",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop&crop=center",
    description:
      "Gourmet burgers made with locally sourced beef and fresh ingredients.",
    hours: "11:00 AM - 9:00 PM",
    menu: [
      {
        name: "Classic Burger",
        price: "$12",
        description: "Beef patty with lettuce, tomato, onion",
      },
      {
        name: "BBQ Bacon Burger",
        price: "$15",
        description: "Beef patty with BBQ sauce and crispy bacon",
      },
      {
        name: "Veggie Burger",
        price: "$11",
        description: "Plant-based patty with all the fixings",
      },
    ],
  },
  {
    id: 5,
    name: "Café Parisien",
    cuisine: "French",
    priceRange: "$$$",
    rating: 4.9,
    distance: 4.2,
    address: "654 Maple Dr, Historic District",
    phone: "(555) 567-8901",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&crop=center",
    description:
      "Elegant French bistro offering classic dishes in an intimate setting.",
    hours: "6:00 PM - 11:00 PM",
    menu: [
      {
        name: "Coq au Vin",
        price: "$28",
        description: "Chicken braised in red wine",
      },
      {
        name: "Bouillabaisse",
        price: "$32",
        description: "Traditional fish stew from Marseille",
      },
      {
        name: "Crème Brûlée",
        price: "$9",
        description: "Classic vanilla custard dessert",
      },
    ],
  },
  {
    id: 6,
    name: "Taco Libre",
    cuisine: "Mexican",
    priceRange: "$",
    rating: 4.3,
    distance: 1.2,
    address: "987 Cedar Ln, Arts District",
    phone: "(555) 678-9012",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center",
    description:
      "Authentic Mexican street food with fresh ingredients and bold flavors.",
    hours: "10:00 AM - 10:00 PM",
    menu: [
      {
        name: "Carnitas Tacos",
        price: "$8",
        description: "Slow-cooked pork with onions and cilantro",
      },
      {
        name: "Chicken Burrito",
        price: "$10",
        description: "Grilled chicken with rice, beans, and salsa",
      },
      {
        name: "Guacamole",
        price: "$6",
        description: "Fresh avocado with lime and spices",
      },
    ],
  },
  {
    id: 7,
    name: "Spice Garden",
    cuisine: "Indian",
    priceRange: "$$",
    rating: 4.6,
    distance: 2.8,
    address: "147 Birch St, University Area",
    phone: "(555) 789-0123",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center",
    description:
      "Traditional Indian cuisine with aromatic spices and vegetarian options.",
    hours: "11:30 AM - 10:00 PM",
    menu: [
      {
        name: "Chicken Tikka Masala",
        price: "$18",
        description: "Tender chicken in creamy tomato sauce",
      },
      {
        name: "Vegetable Biryani",
        price: "$16",
        description: "Fragrant basmati rice with mixed vegetables",
      },
      { name: "Naan Bread", price: "$4", description: "Fresh baked flatbread" },
    ],
  },
  {
    id: 8,
    name: "Mediterranean Delight",
    cuisine: "Mediterranean",
    priceRange: "$$",
    rating: 4.4,
    distance: 3.5,
    address: "258 Willow Way, Suburbs",
    phone: "(555) 890-1234",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
    description:
      "Fresh Mediterranean cuisine with olive oil, herbs, and seasonal ingredients.",
    hours: "11:00 AM - 9:30 PM",
    menu: [
      {
        name: "Greek Salad",
        price: "$14",
        description: "Fresh vegetables with feta and olives",
      },
      {
        name: "Lamb Gyro",
        price: "$16",
        description: "Slow-roasted lamb with tzatziki",
      },
      {
        name: "Hummus Plate",
        price: "$12",
        description: "Creamy chickpea dip with pita",
      },
    ],
  },
];

export const cuisineTypes = [
  "All",
  "American",
  "Chinese",
  "Italian",
  "Japanese",
  "Mexican",
  "Indian",
  "French",
  "Mediterranean",
  "Thai",
  "Korean",
  "Vietnamese",
];

export interface PriceRange {
  value: string;
  label: string;
}

export const priceRanges: PriceRange[] = [
  { value: "$", label: "Budget ($)" },
  { value: "$$", label: "Moderate ($$)" },
  { value: "$$$", label: "Expensive ($$$)" },
  { value: "$$$$", label: "Very Expensive ($$$$)" },
];

export interface DistanceRange {
  value: number;
  label: string;
}

export const distanceRanges: DistanceRange[] = [
  { value: 1, label: "1 mile" },
  { value: 3, label: "3 miles" },
  { value: 5, label: "5 miles" },
  { value: 10, label: "10 miles" },
  { value: 25, label: "25 miles" },
  { value: 50, label: "50 miles" },
];

