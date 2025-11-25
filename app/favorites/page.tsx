"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin, Star, Trash2, ArrowLeft } from "lucide-react";
import { Restaurant } from "@/data/restaurants";

export default function FavoritesPage() {
  const router = useRouter();
  const [favorites, setFavorites] = useState<Restaurant[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favoriteRestaurants") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  const removeFromFavorites = (restaurantId: number) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== restaurantId);
    setFavorites(updatedFavorites);
    localStorage.setItem(
      "favoriteRestaurants",
      JSON.stringify(updatedFavorites)
    );
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
        className="max-w-2xl mx-auto space-y-6"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" size="sm" onClick={() => router.push("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Favorites</h1>
            <p className="text-gray-600">
              {favorites.length} saved restaurants
            </p>
          </div>
        </div>

        {/* Favorites List */}
        <AnimatePresence>
          {favorites.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Favorites Yet
              </h3>
              <p className="text-gray-600 mb-6">
                Start spinning the wheel and add restaurants you love to your
                favorites!
              </p>
              <Button
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                onClick={() => router.push("/roulette")}
              >
                Start Spinning
              </Button>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {favorites.map((restaurant) => (
                <motion.div
                  key={restaurant.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  layout
                >
                  <Card className="restaurant-card">
                    <div className="flex">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-24 h-24 object-cover rounded-l-lg"
                      />
                      <CardContent className="flex-1 p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1">
                              {restaurant.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {restaurant.cuisine} • {restaurant.priceRange}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                <span>{restaurant.rating}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{restaurant.distance} mi</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                router.push(`/restaurant/${restaurant.id}`)
                              }
                            >
                              View
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => openNavigation(restaurant)}
                            >
                              <MapPin className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => removeFromFavorites(restaurant.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Quick Actions */}
        {favorites.length > 0 && (
          <div className="flex gap-4">
            <Button
              className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
              onClick={() => router.push("/roulette")}
            >
              Spin Again
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                localStorage.removeItem("favoriteRestaurants");
                setFavorites([]);
              }}
            >
              Clear All
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

