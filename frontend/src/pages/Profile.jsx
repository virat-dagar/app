import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { User, Mail, Phone, MapPin, Heart } from "lucide-react";
import { user as mockUser, restaurants } from "../mock";
import { Link } from "react-router-dom";

const Profile = ({ favorites }) => {
  const favoriteRestaurants = restaurants.filter(r => favorites.includes(r.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">My Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center pb-4">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className="text-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    {mockUser.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">{mockUser.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">{mockUser.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">{mockUser.phone}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Addresses and Favorites */}
          <div className="lg:col-span-2 space-y-6">
            {/* Saved Addresses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  Saved Addresses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockUser.addresses.map((address, index) => (
                  <div key={address.id}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-800">{address.type}</span>
                          {address.default && (
                            <Badge className="bg-orange-100 text-orange-700">Default</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {address.address}
                        </p>
                        <p className="text-sm text-gray-600">
                          {address.city} - {address.pincode}
                        </p>
                      </div>
                    </div>
                    {index < mockUser.addresses.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Favorite Restaurants */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                  Favorite Restaurants
                </CardTitle>
              </CardHeader>
              <CardContent>
                {favoriteRestaurants.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {favoriteRestaurants.map((restaurant) => (
                      <Link
                        key={restaurant.id}
                        to={`/restaurant/${restaurant.id}`}
                        className="group"
                      >
                        <Card className="overflow-hidden hover:shadow-md transition-shadow">
                          <div className="relative h-32">
                            <img
                              src={restaurant.image}
                              alt={restaurant.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-2 left-2 right-2">
                              <h3 className="font-semibold text-white">{restaurant.name}</h3>
                              <p className="text-xs text-gray-200">{restaurant.cuisine}</p>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Heart className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                    <p className="text-gray-500">No favorite restaurants yet</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Click the heart icon on any restaurant to add it to favorites
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
