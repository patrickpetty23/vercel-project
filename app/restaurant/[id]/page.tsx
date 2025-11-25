"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Star, Clock, Phone, Heart, ArrowLeft } from "lucide-react";
import { restaurants } from "@/data/restaurants";

export default function RestaurantDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  if (!restaurant) {
    return (
      <div className="min-h-screen pb-20 px-6 py-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Restaurant Not Found
          </h1>
          <Button onClick={() => router.push("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const addToFavorites = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favoriteRestaurants") || "[]"
    );
    if (!favorites.find((fav: { id: number }) => fav.id === restaurant.id)) {
      favorites.push(restaurant);
      localStorage.setItem("favoriteRestaurants", JSON.stringify(favorites));
      alert("Added to favorites!");
    } else {
      alert("Already in favorites!");
    }
  };

  const openNavigation = () => {
    const address = encodeURIComponent(restaurant.address);
    const mapsUrl = `https://maps.google.com/maps?q=${address}`;
    window.open(mapsUrl, "_blank");
  };

  const callRestaurant = () => {
    window.open(`tel:${restaurant.phone}`);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header Image */}
      <div className="relative h-64">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-4 left-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.back()}
            className="bg-white/90 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold">{restaurant.rating}</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          {/* Restaurant Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{restaurant.name}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{restaurant.cuisine}</span>
                <span>•</span>
                <span>{restaurant.priceRange}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{restaurant.distance} miles</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{restaurant.description}</p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{restaurant.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span>{restaurant.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>{restaurant.hours}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Menu */}
          <Card>
            <CardHeader>
              <CardTitle>Popular Menu Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {restaurant.menu.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-lg font-bold text-orange-600 ml-4">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
              onClick={openNavigation}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
            <Button variant="outline" onClick={callRestaurant}>
              <Phone className="w-4 h-4 mr-2" />
              Call Restaurant
            </Button>
          </div>

          <Button variant="outline" className="w-full" onClick={addToFavorites}>
            <Heart className="w-4 h-4 mr-2" />
            Add to Favorites
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

