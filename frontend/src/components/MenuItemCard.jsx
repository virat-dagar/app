import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Plus, Star } from "lucide-react";

const MenuItemCard = ({ item, onAddToCart }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {item.image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {item.veg !== undefined && (
            <Badge
              className={`absolute top-2 right-2 ${
                item.veg
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {item.veg ? "Veg" : "Non-Veg"}
            </Badge>
          )}
        </div>
      )}
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
            {item.category && (
              <p className="text-sm text-gray-500">{item.category}</p>
            )}
          </div>
          {!item.image && item.veg !== undefined && (
            <div
              className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center ${
                item.veg ? "border-green-600" : "border-red-600"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  item.veg ? "bg-green-600" : "bg-red-600"
                }`}
              />
            </div>
          )}
        </div>
        
        {item.rating && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="text-sm font-semibold">{item.rating}</span>
          </div>
        )}
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-800">₹{item.price}</span>
          <Button
            onClick={onAddToCart}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
