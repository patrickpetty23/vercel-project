"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shuffle, MapPin, Star, Heart } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border">
            <Star className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">
              Discover Your Next Favorite Meal
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
              Spin the
            </span>
            <br />
            <span className="text-gray-900">Food Wheel</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Never wonder &quot;where should we eat?&quot; again. RestaurantRoulette
            randomly discovers amazing local restaurants based on your
            preferences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/preferences">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 rounded-xl"
              >
                Set Preferences
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/roulette">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-orange-300 text-gray-700 hover:text-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm"
              >
                <Shuffle className="w-5 h-5 mr-2" />
                Spin Now
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-8 pt-12 max-w-md mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">8+</div>
            <div className="text-sm text-gray-600">Restaurants</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">8+</div>
            <div className="text-sm text-gray-600">Cuisines</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">24/7</div>
            <div className="text-sm text-gray-600">Discovery</div>
          </div>
        </motion.div>
      </div>

      {/* Features Preview */}
      <div className="px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600">
            Simple steps to discover your next meal
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="text-center h-full">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Set Preferences</h3>
                <p className="text-gray-600">
                  Choose distance, cuisine type, and budget
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="text-center h-full">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Spin & Discover</h3>
                <p className="text-gray-600">
                  Let RestaurantRoulette surprise you
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="text-center h-full">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Navigate & Enjoy</h3>
                <p className="text-gray-600">
                  Get directions and enjoy your meal
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <Link href="/favorites">
            <Card className="restaurant-card cursor-pointer">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h3 className="font-semibold">Favorites</h3>
                <p className="text-sm text-gray-600">Saved restaurants</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/settings">
            <Card className="restaurant-card cursor-pointer">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold">Settings</h3>
                <p className="text-sm text-gray-600">App preferences</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
