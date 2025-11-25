"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, DollarSign, Utensils, Sliders } from "lucide-react";
import { cuisineTypes, priceRanges, distanceRanges } from "@/data/restaurants";

export default function PreferencesPage() {
  const router = useRouter();
  const [preferences, setPreferences] = useState({
    cuisine: "All",
    priceRange: "$$",
    distance: 5,
    location: "Current Location",
  });

  const handleCuisineChange = (cuisine: string) => {
    setPreferences((prev) => ({ ...prev, cuisine }));
  };

  const handlePriceChange = (priceRange: string) => {
    setPreferences((prev) => ({ ...prev, priceRange }));
  };

  const handleDistanceChange = (distance: number) => {
    setPreferences((prev) => ({ ...prev, distance }));
  };

  const handleSavePreferences = () => {
    // Save preferences to localStorage
    localStorage.setItem("restaurantPreferences", JSON.stringify(preferences));
    router.push("/roulette");
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
            Set Your Preferences
          </h1>
          <p className="text-gray-600">
            Tell us what you&apos;re craving and we&apos;ll find the perfect restaurant
          </p>
        </div>

        {/* Cuisine Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Utensils className="w-5 h-5 text-orange-500" />
              Cuisine Type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cuisineTypes.map((cuisine) => (
                <Button
                  key={cuisine}
                  variant={
                    preferences.cuisine === cuisine ? "default" : "outline"
                  }
                  className={`${
                    preferences.cuisine === cuisine
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                      : "hover:border-orange-300"
                  }`}
                  onClick={() => handleCuisineChange(cuisine)}
                >
                  {cuisine}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Price Range */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-500" />
              Price Range
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {priceRanges.map((range) => (
                <Button
                  key={range.value}
                  variant={
                    preferences.priceRange === range.value
                      ? "default"
                      : "outline"
                  }
                  className={`${
                    preferences.priceRange === range.value
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                      : "hover:border-orange-300"
                  }`}
                  onClick={() => handlePriceChange(range.value)}
                >
                  {range.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Distance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              Distance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Search Radius</span>
                <span className="text-sm text-gray-600">
                  {preferences.distance} miles
                </span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {distanceRanges.map((range) => (
                  <Button
                    key={range.value}
                    variant={
                      preferences.distance === range.value
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    className={`${
                      preferences.distance === range.value
                        ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                        : "hover:border-orange-300"
                    }`}
                    onClick={() => handleDistanceChange(range.value)}
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-500" />
              Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Currently using:{" "}
                <span className="font-medium">{preferences.location}</span>
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  // In a real app, this would get the user's current location
                  alert("Location services would be enabled here");
                }}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Use Current Location
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-lg">Your Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Cuisine:</span>
                <span className="font-medium">{preferences.cuisine}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price Range:</span>
                <span className="font-medium">{preferences.priceRange}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Distance:</span>
                <span className="font-medium">
                  {preferences.distance} miles
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium">{preferences.location}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => router.push("/")}
          >
            Back to Home
          </Button>
          <Button
            className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
            onClick={handleSavePreferences}
          >
            <Sliders className="w-4 h-4 mr-2" />
            Spin the Wheel!
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

