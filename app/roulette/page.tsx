"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shuffle, RefreshCw, MapPin, Star, Heart } from "lucide-react";
import { restaurants, Restaurant } from "@/data/restaurants";

interface Preferences {
  cuisine: string;
  priceRange: string;
  distance: number;
  location: string;
}

export default function RoulettePage() {
  const router = useRouter();
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [rotation, setRotation] = useState(0);
  const [preferences, setPreferences] = useState<Preferences | null>(null);

  useEffect(() => {
    // Load preferences from localStorage
    const savedPreferences = localStorage.getItem("restaurantPreferences");
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const getFilteredRestaurants = () => {
    if (!preferences) return restaurants;

    return restaurants.filter((restaurant) => {
      const cuisineMatch =
        preferences.cuisine === "All" ||
        restaurant.cuisine === preferences.cuisine;
      const priceMatch = restaurant.priceRange === preferences.priceRange;
      const distanceMatch = restaurant.distance <= preferences.distance;

      return cuisineMatch && priceMatch && distanceMatch;
    });
  };

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedRestaurant(null);

    const filteredRestaurants = getFilteredRestaurants();

    if (filteredRestaurants.length === 0) {
      alert(
        "No restaurants match your preferences. Please adjust your settings."
      );
      setIsSpinning(false);
      return;
    }

    // Random rotation (multiple full rotations + random angle)
    const randomRotation = 360 * (5 + Math.random() * 5) + Math.random() * 360;
    setRotation((prev) => prev + randomRotation);

    // Select random restaurant
    const randomIndex = Math.floor(Math.random() * filteredRestaurants.length);
    const selected = filteredRestaurants[randomIndex];

    // Show result after spinning animation
    setTimeout(() => {
      setSelectedRestaurant(selected);
      setIsSpinning(false);
    }, 3000);
  };

  const addToFavorites = (restaurant: Restaurant) => {
    const favorites = JSON.parse(
      localStorage.getItem("favoriteRestaurants") || "[]"
    );
    if (!favorites.find((fav: Restaurant) => fav.id === restaurant.id)) {
      favorites.push(restaurant);
      localStorage.setItem("favoriteRestaurants", JSON.stringify(favorites));
      alert("Added to favorites!");
    } else {
      alert("Already in favorites!");
    }
  };

  const openNavigation = (restaurant: Restaurant) => {
    const address = encodeURIComponent(restaurant.address);
    const mapsUrl = `https://maps.google.com/maps?q=${address}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="min-h-screen pb-20 px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Restaurant Roulette
          </h1>
          <p className="text-gray-600">
            {preferences
              ? `Finding restaurants matching your preferences...`
              : "Set your preferences first!"}
          </p>
        </div>

        {/* Preferences Summary */}
        {preferences && (
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Cuisine:</span>
                  <div className="font-medium">{preferences.cuisine}</div>
                </div>
                <div>
                  <span className="text-gray-600">Price:</span>
                  <div className="font-medium">{preferences.priceRange}</div>
                </div>
                <div>
                  <span className="text-gray-600">Distance:</span>
                  <div className="font-medium">{preferences.distance} mi</div>
                </div>
                <div>
                  <span className="text-gray-600">Matches:</span>
                  <div className="font-medium">
                    {getFilteredRestaurants().length}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Roulette Wheel */}
        <div className="flex justify-center">
          <div className="relative">
            <motion.div
              className="w-64 h-64 rounded-full roulette-wheel border-8 border-white shadow-2xl"
              animate={{ rotate: rotation }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              {/* Center circle */}
              <div className="absolute inset-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <Shuffle className="w-8 h-8 text-orange-500 mx-auto mb-1" />
                  <div className="text-xs font-bold text-gray-700">SPIN</div>
                </div>
              </div>

              {/* Pointer */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-red-500" />
            </motion.div>
          </div>
        </div>

        {/* Spin Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-12 py-4 rounded-xl"
            onClick={spinWheel}
            disabled={isSpinning || !preferences}
          >
            {isSpinning ? (
              <>
                <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                Spinning...
              </>
            ) : (
              <>
                <Shuffle className="w-5 h-5 mr-2" />
                Spin the Wheel!
              </>
            )}
          </Button>
        </div>

        {/* Selected Restaurant */}
        <AnimatePresence>
          {selectedRestaurant && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="space-y-4"
            >
              <Card className="restaurant-card">
                <div className="relative">
                  <img
                    src={selectedRestaurant.image}
                    alt={selectedRestaurant.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">
                        {selectedRestaurant.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {selectedRestaurant.name}
                      </h3>
                      <p className="text-gray-600">
                        {selectedRestaurant.cuisine} •{" "}
                        {selectedRestaurant.priceRange}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedRestaurant.distance} miles away</span>
                    </div>

                    <p className="text-gray-700">
                      {selectedRestaurant.description}
                    </p>

                    <div className="flex gap-3">
                      <Button
                        className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                        onClick={() =>
                          router.push(`/restaurant/${selectedRestaurant.id}`)
                        }
                      >
                        View Details
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => openNavigation(selectedRestaurant)}
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Navigate
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => addToFavorites(selectedRestaurant)}
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => router.push("/preferences")}
          >
            Change Preferences
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => router.push("/favorites")}
          >
            View Favorites
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

