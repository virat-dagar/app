import { useState } from "react";
import { restaurants } from "../mock";
import RestaurantCard from "../components/RestaurantCard";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const Home = ({ favorites, toggleFavorite }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const cuisines = ["all", ...new Set(restaurants.map(r => r.cuisine))];

  const filteredRestaurants = restaurants
    .filter(restaurant => {
      const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCuisine = cuisineFilter === "all" || restaurant.cuisine === cuisineFilter;
      return matchesSearch && matchesCuisine;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "deliveryTime") return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      return 0;
    });

  const featuredRestaurants = restaurants.filter(r => r.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Delicious Food,
            <br />
            <span className="text-yellow-200">Delivered Fast</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Order from your favorite restaurants and get it delivered to your doorstep
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for restaurants or cuisines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg bg-white border-0 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-orange-600" />
            <span className="font-semibold text-gray-700">Filters:</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Select value={cuisineFilter} onValueChange={setCuisineFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Cuisines" />
              </SelectTrigger>
              <SelectContent>
                {cuisines.map(cuisine => (
                  <SelectItem key={cuisine} value={cuisine}>
                    {cuisine === "all" ? "All Cuisines" : cuisine}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Top Rated</SelectItem>
                <SelectItem value="deliveryTime">Fastest Delivery</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Featured Restaurants */}
        {searchQuery === "" && cuisineFilter === "all" && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-orange-500">⭐</span>
              Featured Restaurants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRestaurants.map(restaurant => (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                  isFavorite={favorites.includes(restaurant.id)}
                  toggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        )}

        {/* All Restaurants */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {searchQuery || cuisineFilter !== "all" ? "Search Results" : "All Restaurants"}
            <span className="text-lg font-normal text-gray-500 ml-2">({filteredRestaurants.length})</span>
          </h2>
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRestaurants.map(restaurant => (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                  isFavorite={favorites.includes(restaurant.id)}
                  toggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No restaurants found. Try different filters!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
