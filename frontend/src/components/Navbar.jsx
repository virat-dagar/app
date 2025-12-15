import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingCart, User, Package, Home } from "lucide-react";
import { Badge } from "./ui/badge";

const Navbar = ({ cartCount }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              FoodExpress
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className={isActive("/") ? "bg-gradient-to-r from-orange-500 to-red-500" : "hover:bg-orange-50"}
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            
            <Link to="/orders">
              <Button
                variant={isActive("/orders") ? "default" : "ghost"}
                className={isActive("/orders") ? "bg-gradient-to-r from-orange-500 to-red-500" : "hover:bg-orange-50"}
              >
                <Package className="h-4 w-4 mr-2" />
                Orders
              </Button>
            </Link>
            
            <Link to="/profile">
              <Button
                variant={isActive("/profile") ? "default" : "ghost"}
                className={isActive("/profile") ? "bg-gradient-to-r from-orange-500 to-red-500" : "hover:bg-orange-50"}
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button
                variant={isActive("/cart") ? "default" : "ghost"}
                className={`relative ${isActive("/cart") ? "bg-gradient-to-r from-orange-500 to-red-500" : "hover:bg-orange-50"}`}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white px-2 py-0 h-5 min-w-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
