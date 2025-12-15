import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, Clock, Heart } from "lucide-react";

const RestaurantCard = ({ restaurant, isFavorite, toggleFavorite }) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
      <Link to={`/restaurant/${restaurant.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <span className="font-semibold text-sm">{restaurant.rating}</span>
            </div>
            {restaurant.featured && (
              <Badge className="bg-orange-500 hover:bg-orange-600">Featured</Badge>
            )}
          </div>
        </div>
      </Link>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <Link to={`/restaurant/${restaurant.id}`} className="flex-1">
            <h3 className="font-bold text-xl text-gray-800 hover:text-orange-600 transition-colors">
              {restaurant.name}
            </h3>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(restaurant.id);
            }}
            className="hover:bg-transparent p-1"
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-500"
              }`}
            />
          </Button>
        </div>
        
        <Link to={`/restaurant/${restaurant.id}`}>
          <p className="text-gray-600 mb-3">{restaurant.cuisine}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime} mins</span>
            </div>
            <span>Min ₹{restaurant.minOrder}</span>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-1">
            {restaurant.tags.slice(0, 2).map(tag => (
              <Badge key={tag} variant="outline" className="text-xs border-orange-300 text-orange-700">
                {tag}
              </Badge>
            ))}
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
