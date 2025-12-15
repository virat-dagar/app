import { useState } from "react";
import { useParams } from "react-router-dom";
import { restaurants } from "../mock";
import MenuItemCard from "../components/MenuItemCard";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Star, Clock, MapPin, Heart } from "lucide-react";
import { toast } from "sonner";

const RestaurantDetail = ({ addToCart, favorites, toggleFavorite }) => {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === parseInt(id));
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Restaurant not found</p>
      </div>
    );
  }

  const categories = ["all", ...new Set(restaurant.menu.map(item => item.category))];
  const filteredMenu = selectedCategory === "all"
    ? restaurant.menu
    : restaurant.menu.filter(item => item.category === selectedCategory);

  const isFavorite = favorites.includes(restaurant.id);

  const handleAddToCart = (item) => {
    addToCart(item, restaurant.id, restaurant.name);
    toast.success(`${item.name} added to cart!`, {
      description: `₹${item.price}`,
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite(restaurant.id);
    toast.success(
      isFavorite
        ? `${restaurant.name} removed from favorites`
        : `${restaurant.name} added to favorites`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Restaurant Header */}
      <div className="relative">
        <div
          className="h-72 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${restaurant.image})`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 h-full flex items-end pb-8">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-2">{restaurant.name}</h1>
              <p className="text-xl text-gray-200 mb-4">{restaurant.cuisine} Cuisine</p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{restaurant.rating}</span>
                  <span className="text-sm">({restaurant.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Clock className="h-5 w-5" />
                  <span>{restaurant.deliveryTime} mins</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span>Min Order: ₹{restaurant.minOrder}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Favorite Button */}
        <Button
          onClick={handleToggleFavorite}
          className="absolute top-4 right-4 rounded-full w-12 h-12 bg-white hover:bg-gray-100 text-red-500"
          variant="ghost"
        >
          <Heart className={`h-6 w-6 ${isFavorite ? 'fill-red-500' : ''}`} />
        </Button>
      </div>

      {/* Tags */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2">
          {restaurant.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="bg-orange-100 text-orange-700">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Menu</h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`${
                selectedCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  : "hover:bg-orange-50"
              }`}
            >
              {category === "all" ? "All Items" : category}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMenu.map(item => (
            <MenuItemCard
              key={item.id}
              item={item}
              onAddToCart={() => handleAddToCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
