// Mock data for food delivery app

export const restaurants = [
  {
    id: 1,
    name: "Spice Junction",
    cuisine: "Indian",
    rating: 4.5,
    reviewCount: 523,
    deliveryTime: "25-35",
    minOrder: 150,
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc",
    featured: true,
    tags: ["Spicy", "Vegetarian Options", "Popular"],
    menu: [
      { id: 101, name: "Butter Chicken", price: 320, category: "Main Course", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398", veg: false, rating: 4.6 },
      { id: 102, name: "Paneer Tikka Masala", price: 280, category: "Main Course", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7", veg: true, rating: 4.5 },
      { id: 103, name: "Biryani", price: 250, category: "Rice", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8", veg: false, rating: 4.7 },
      { id: 104, name: "Naan", price: 40, category: "Breads", veg: true, rating: 4.3 },
      { id: 105, name: "Dal Makhani", price: 220, category: "Main Course", veg: true, rating: 4.4 },
      { id: 106, name: "Tandoori Chicken", price: 350, category: "Starters", veg: false, rating: 4.8 }
    ]
  },
  {
    id: 2,
    name: "Pizza Paradise",
    cuisine: "Italian",
    rating: 4.3,
    reviewCount: 412,
    deliveryTime: "30-40",
    minOrder: 200,
    image: "https://images.pexels.com/photos/35205506/pexels-photo-35205506.jpeg",
    featured: true,
    tags: ["Fast Delivery", "Bestseller"],
    menu: [
      { id: 201, name: "Margherita Pizza", price: 299, category: "Pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002", veg: true, rating: 4.5 },
      { id: 202, name: "Pepperoni Pizza", price: 399, category: "Pizza", veg: false, rating: 4.6 },
      { id: 203, name: "Pasta Alfredo", price: 280, category: "Pasta", veg: true, rating: 4.4 },
      { id: 204, name: "Garlic Bread", price: 120, category: "Sides", veg: true, rating: 4.2 },
      { id: 205, name: "Caesar Salad", price: 180, category: "Salads", veg: true, rating: 4.3 }
    ]
  },
  {
    id: 3,
    name: "Healthy Bites",
    cuisine: "Healthy",
    rating: 4.6,
    reviewCount: 289,
    deliveryTime: "20-30",
    minOrder: 150,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    featured: false,
    tags: ["Healthy", "Organic", "Gluten Free"],
    menu: [
      { id: 301, name: "Quinoa Bowl", price: 260, category: "Bowls", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", veg: true, rating: 4.7 },
      { id: 302, name: "Grilled Chicken Salad", price: 290, category: "Salads", veg: false, rating: 4.5 },
      { id: 303, name: "Smoothie Bowl", price: 220, category: "Bowls", veg: true, rating: 4.6 },
      { id: 304, name: "Protein Shake", price: 150, category: "Drinks", veg: true, rating: 4.4 },
      { id: 305, name: "Avocado Toast", price: 180, category: "Breakfast", veg: true, rating: 4.5 }
    ]
  },
  {
    id: 4,
    name: "Sweet Treats",
    cuisine: "Desserts",
    rating: 4.7,
    reviewCount: 634,
    deliveryTime: "15-25",
    minOrder: 100,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    featured: true,
    tags: ["Desserts", "Cakes", "Quick Delivery"],
    menu: [
      { id: 401, name: "Chocolate Cake", price: 450, category: "Cakes", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62", veg: true, rating: 4.8 },
      { id: 402, name: "Donuts (6 pcs)", price: 240, category: "Donuts", veg: true, rating: 4.6 },
      { id: 403, name: "Ice Cream Sundae", price: 180, category: "Ice Cream", veg: true, rating: 4.7 },
      { id: 404, name: "Brownies", price: 150, category: "Baked", veg: true, rating: 4.5 },
      { id: 405, name: "Cheesecake", price: 320, category: "Cakes", veg: true, rating: 4.9 }
    ]
  },
  {
    id: 5,
    name: "Dragon Wok",
    cuisine: "Chinese",
    rating: 4.4,
    reviewCount: 378,
    deliveryTime: "30-40",
    minOrder: 180,
    image: "https://images.unsplash.com/photo-1651440204227-a9a5b9d19712",
    featured: false,
    tags: ["Asian", "Spicy"],
    menu: [
      { id: 501, name: "Hakka Noodles", price: 220, category: "Noodles", veg: true, rating: 4.5 },
      { id: 502, name: "Manchurian", price: 240, category: "Starters", veg: true, rating: 4.4 },
      { id: 503, name: "Fried Rice", price: 200, category: "Rice", veg: false, rating: 4.3 },
      { id: 504, name: "Spring Rolls", price: 180, category: "Starters", veg: true, rating: 4.6 },
      { id: 505, name: "Hot & Sour Soup", price: 140, category: "Soups", veg: true, rating: 4.2 }
    ]
  },
  {
    id: 6,
    name: "Gourmet Kitchen",
    cuisine: "Continental",
    rating: 4.8,
    reviewCount: 456,
    deliveryTime: "35-45",
    minOrder: 300,
    image: "https://images.unsplash.com/photo-1694184191924-36eae728cd3c",
    featured: true,
    tags: ["Premium", "Fine Dining"],
    menu: [
      { id: 601, name: "Grilled Steak", price: 650, category: "Main Course", veg: false, rating: 4.9 },
      { id: 602, name: "Salmon Fillet", price: 580, category: "Seafood", veg: false, rating: 4.8 },
      { id: 603, name: "Mushroom Risotto", price: 420, category: "Main Course", veg: true, rating: 4.7 },
      { id: 604, name: "French Fries", price: 120, category: "Sides", veg: true, rating: 4.4 },
      { id: 605, name: "Soup of the Day", price: 180, category: "Soups", veg: true, rating: 4.5 }
    ]
  },
  {
    id: 7,
    name: "Burger Hub",
    cuisine: "Fast Food",
    rating: 4.2,
    reviewCount: 891,
    deliveryTime: "20-30",
    minOrder: 120,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    featured: false,
    tags: ["Fast Food", "Budget Friendly"],
    menu: [
      { id: 701, name: "Classic Burger", price: 180, category: "Burgers", veg: false, rating: 4.3 },
      { id: 702, name: "Veggie Burger", price: 160, category: "Burgers", veg: true, rating: 4.2 },
      { id: 703, name: "Chicken Wings", price: 220, category: "Sides", veg: false, rating: 4.4 },
      { id: 704, name: "French Fries", price: 90, category: "Sides", veg: true, rating: 4.1 },
      { id: 705, name: "Milkshake", price: 120, category: "Drinks", veg: true, rating: 4.5 }
    ]
  },
  {
    id: 8,
    name: "Sushi House",
    cuisine: "Japanese",
    rating: 4.6,
    reviewCount: 324,
    deliveryTime: "30-40",
    minOrder: 250,
    image: "https://images.unsplash.com/photo-1651440204227-a9a5b9d19712",
    featured: false,
    tags: ["Japanese", "Seafood", "Authentic"],
    menu: [
      { id: 801, name: "California Roll", price: 380, category: "Rolls", veg: false, rating: 4.7 },
      { id: 802, name: "Vegetable Sushi", price: 320, category: "Sushi", veg: true, rating: 4.5 },
      { id: 803, name: "Miso Soup", price: 160, category: "Soups", veg: true, rating: 4.4 },
      { id: 804, name: "Tempura", price: 290, category: "Starters", veg: false, rating: 4.6 },
      { id: 805, name: "Edamame", price: 140, category: "Starters", veg: true, rating: 4.3 }
    ]
  }
];

export const user = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+91 9876543210",
  addresses: [
    {
      id: 1,
      type: "Home",
      address: "123, Green Park, Sector 15",
      city: "Delhi",
      pincode: "110016",
      default: true
    },
    {
      id: 2,
      type: "Work",
      address: "456, Tech Tower, Cyber City",
      city: "Gurugram",
      pincode: "122002",
      default: false
    }
  ]
};

export const orders = [
  {
    id: "ORD001",
    restaurantName: "Spice Junction",
    items: [
      { name: "Butter Chicken", quantity: 1, price: 320 },
      { name: "Naan", quantity: 2, price: 80 }
    ],
    total: 400,
    status: "delivered",
    date: "2025-01-15",
    deliveryTime: "30 mins",
    address: "123, Green Park, Sector 15, Delhi"
  },
  {
    id: "ORD002",
    restaurantName: "Pizza Paradise",
    items: [
      { name: "Margherita Pizza", quantity: 1, price: 299 },
      { name: "Garlic Bread", quantity: 1, price: 120 }
    ],
    total: 419,
    status: "on_the_way",
    date: "2025-01-16",
    deliveryTime: "15 mins",
    address: "123, Green Park, Sector 15, Delhi"
  },
  {
    id: "ORD003",
    restaurantName: "Sweet Treats",
    items: [
      { name: "Chocolate Cake", quantity: 1, price: 450 }
    ],
    total: 450,
    status: "preparing",
    date: "2025-01-16",
    deliveryTime: "25 mins",
    address: "123, Green Park, Sector 15, Delhi"
  }
];
