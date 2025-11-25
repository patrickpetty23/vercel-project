"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Settings as SettingsIcon,
  MapPin,
  Bell,
  Moon,
  Sun,
  ArrowLeft,
  Trash2,
} from "lucide-react";

interface AppSettings {
  notifications: boolean;
  darkMode: boolean;
  locationServices: boolean;
  defaultDistance: number;
  defaultCuisine: string;
  defaultPriceRange: string;
}

export default function SettingsPage() {
  const router = useRouter();
  const [settings, setSettings] = useState<AppSettings>({
    notifications: true,
    darkMode: false,
    locationServices: true,
    defaultDistance: 5,
    defaultCuisine: "All",
    defaultPriceRange: "$$",
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem("appSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const updateSetting = (key: keyof AppSettings, value: boolean | number | string) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem("appSettings", JSON.stringify(newSettings));
  };

  const clearAllData = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all app data? This cannot be undone."
      )
    ) {
      localStorage.removeItem("restaurantPreferences");
      localStorage.removeItem("favoriteRestaurants");
      localStorage.removeItem("appSettings");
      alert("All data has been cleared!");
      setSettings({
        notifications: true,
        darkMode: false,
        locationServices: true,
        defaultDistance: 5,
        defaultCuisine: "All",
        defaultPriceRange: "$$",
      });
    }
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
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">
              Customize your Restaurant Roulette experience
            </p>
          </div>
        </div>

        {/* App Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SettingsIcon className="w-5 h-5 text-gray-500" />
              App Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Notifications</h4>
                <p className="text-sm text-gray-600">
                  Get notified about new restaurants
                </p>
              </div>
              <Button
                variant={settings.notifications ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  updateSetting("notifications", !settings.notifications)
                }
              >
                <Bell className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Dark Mode</h4>
                <p className="text-sm text-gray-600">Switch to dark theme</p>
              </div>
              <Button
                variant={settings.darkMode ? "default" : "outline"}
                size="sm"
                onClick={() => updateSetting("darkMode", !settings.darkMode)}
              >
                {settings.darkMode ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Location Services</h4>
                <p className="text-sm text-gray-600">
                  Use your current location for distance calculations
                </p>
              </div>
              <Button
                variant={settings.locationServices ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  updateSetting("locationServices", !settings.locationServices)
                }
              >
                <MapPin className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Default Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Default Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Distance
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[3, 5, 10].map((distance) => (
                  <Button
                    key={distance}
                    variant={
                      settings.defaultDistance === distance
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => updateSetting("defaultDistance", distance)}
                  >
                    {distance} mi
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Cuisine
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["All", "American", "Italian", "Chinese"].map((cuisine) => (
                  <Button
                    key={cuisine}
                    variant={
                      settings.defaultCuisine === cuisine
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => updateSetting("defaultCuisine", cuisine)}
                  >
                    {cuisine}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Price Range
              </label>
              <div className="grid grid-cols-4 gap-2">
                {["$", "$$", "$$$", "$$$$"].map((price) => (
                  <Button
                    key={price}
                    variant={
                      settings.defaultPriceRange === price
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => updateSetting("defaultPriceRange", price)}
                  >
                    {price}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card>
          <CardHeader>
            <CardTitle>Data Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Clear App Data</h4>
              <p className="text-sm text-gray-600">
                This will remove all your preferences, favorites, and settings.
              </p>
              <Button
                variant="outline"
                className="text-red-500 hover:text-red-700"
                onClick={clearAllData}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All Data
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardHeader>
            <CardTitle>About Restaurant Roulette</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-gray-600">Version 1.0.0</p>
            <p className="text-sm text-gray-600">
              Discover amazing restaurants with the power of randomness!
            </p>
            <div className="pt-4">
              <Button variant="outline" size="sm" onClick={() => router.push("/")}>
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

