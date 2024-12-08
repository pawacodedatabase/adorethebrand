export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[];
    category: "male" | "female";
    sizes: string[];
  }
  

  import malslli_1 from './images/mensl_1.jpg'
  import malslli_2 from './images/mensl_2.jpg'
  import malslli_3 from './images/mensl_3.jpg'
  import malslli_4 from './images/mensl_4.jpg'
  import malslli_5 from './images/mensl_5.jpg'


  export const products: Product[] = [
    // Male Products
    {
      id: 1,
      name: "Men's Formal Leather Slide",
      price: 11000,
      description: "Elegant leather slides for formal occasions.",
      images: [
        malslli_1, malslli_2, malslli_3, malslli_4, malslli_5
      ],
      category: "male",
      sizes: ["40", "39", "44", "42", "45"],
    },
    {
      id: 2,
      name: "Men's Sports Sneakers",
      price: 95.0,
      description: "Durable sneakers for all-day comfort.",
      images: [
        "/assets/images/mens-sneakers1.jpg",
        "/assets/images/mens-sneakers2.jpg",
      ],
      category: "male",
      sizes: ["8", "9", "10", "11", "12"],
    },
    {
      id: 3,
      name: "Men's Loafers",
      price: 75.0,
      description: "Stylish loafers, perfect for casual outings.",
      images: [
        "/assets/images/mens-loafers1.jpg",
        "/assets/images/mens-loafers2.jpg",
      ],
      category: "male",
      sizes: ["7", "8", "9", "10"],
    },
    {
      id: 4,
      name: "Men's Hiking Boots",
      price: 150.0,
      description: "Sturdy boots for outdoor adventures.",
      images: [
        "/assets/images/mens-hiking1.jpg",
        "/assets/images/mens-hiking2.jpg",
      ],
      category: "male",
      sizes: ["8", "9", "10", "11"],
    },
    {
      id: 5,
      name: "Men's Running Shoes",
      price: 110.0,
      description: "Lightweight running shoes for optimal performance.",
      images: [
        "/assets/images/mens-running1.jpg",
        "/assets/images/mens-running2.jpg",
      ],
      category: "male",
      sizes: ["9", "10", "11", "12"],
    },
    {
      id: 6,
      name: "Men's Sandals",
      price: 60.0,
      description: "Comfortable sandals for everyday wear.",
      images: [
        "/assets/images/mens-sandals1.jpg",
        "/assets/images/mens-sandals2.jpg",
      ],
      category: "male",
      sizes: ["7", "8", "9", "10"],
    },
    {
      id: 7,
      name: "Men's Chelsea Boots",
      price: 145.0,
      description: "Classic Chelsea boots with a modern touch.",
      images: [
        "/assets/images/mens-chelsea1.jpg",
        "/assets/images/mens-chelsea2.jpg",
      ],
      category: "male",
      sizes: ["8", "9", "10", "11"],
    },
    {
      id: 8,
      name: "Men's Oxford Shoes",
      price: 130.0,
      description: "Timeless Oxford shoes for formal occasions.",
      images: [
        "/assets/images/mens-oxford1.jpg",
        "/assets/images/mens-oxford2.jpg",
      ],
      category: "male",
      sizes: ["7", "8", "9", "10", "11"],
    },
    {
      id: 9,
      name: "Men's Slip-on Sneakers",
      price: 80.0,
      description: "Convenient slip-on sneakers for quick errands.",
      images: [
        "/assets/images/mens-slipon1.jpg",
        "/assets/images/mens-slipon2.jpg",
      ],
      category: "male",
      sizes: ["8", "9", "10"],
    },
    {
      id: 10,
      name: "Men's Winter Boots",
      price: 160.0,
      description: "Warm and durable boots for cold weather.",
      images: [
        "/assets/images/mens-winter1.jpg",
        "/assets/images/mens-winter2.jpg",
      ],
      category: "male",
      sizes: ["9", "10", "11"],
    },
  
    // Female Products
    {
      id: 11,
      name: "Women's High Heels",
      price: 90.0,
      description: "Elegant high heels for evening events.",
      images: [
        "/assets/images/womens-heels1.jpg",
        "/assets/images/womens-heels2.jpg",
      ],
      category: "female",
      sizes: ["5", "6", "7", "8", "9"],
    },
    {
      id: 12,
      name: "Women's Running Shoes",
      price: 85.0,
      description: "Comfortable running shoes for active women.",
      images: [
        "/assets/images/womens-running1.jpg",
        "/assets/images/womens-running2.jpg",
      ],
      category: "female",
      sizes: ["6", "7", "8", "9"],
    },
    {
      id: 13,
      name: "Women's Flats",
      price: 55.0,
      description: "Lightweight and stylish flats for casual wear.",
      images: [
        "/assets/images/womens-flats1.jpg",
        "/assets/images/womens-flats2.jpg",
      ],
      category: "female",
      sizes: ["5", "6", "7", "8"],
    },
    {
      id: 14,
      name: "Women's Ankle Boots",
      price: 120.0,
      description: "Trendy ankle boots for modern looks.",
      images: [
        "/assets/images/womens-ankle1.jpg",
        "/assets/images/womens-ankle2.jpg",
      ],
      category: "female",
      sizes: ["6", "7", "8", "9"],
    },
    {
      id: 15,
      name: "Women's Platform Sandals",
      price: 75.0,
      description: "Comfortable platform sandals for summer.",
      images: [
        "/assets/images/womens-platform1.jpg",
        "/assets/images/womens-platform2.jpg",
      ],
      category: "female",
      sizes: ["6", "7", "8"],
    },
    {
      id: 16,
      name: "Women's Ballerina Flats",
      price: 65.0,
      description: "Classic ballerina flats for everyday wear.",
      images: [
        "/assets/images/womens-ballerina1.jpg",
        "/assets/images/womens-ballerina2.jpg",
      ],
      category: "female",
      sizes: ["5", "6", "7", "8"],
    },
    {
      id: 17,
      name: "Women's Hiking Boots",
      price: 140.0,
      description: "Reliable boots for adventurous women.",
      images: [
        "/assets/images/womens-hiking1.jpg",
        "/assets/images/womens-hiking2.jpg",
      ],
      category: "female",
      sizes: ["6", "7", "8", "9"],
    },
    {
      id: 18,
      name: "Women's Slip-on Sneakers",
      price: 70.0,
      description: "Easy-to-wear sneakers for quick outings.",
      images: [
        "/assets/images/womens-slipon1.jpg",
        "/assets/images/womens-slipon2.jpg",
      ],
      category: "female",
      sizes: ["6", "7", "8"],
    },
    {
      id: 19,
      name: "Women's Winter Boots",
      price: 160.0,
      description: "Stylish boots to keep you warm in winter.",
      images: [
        "/assets/images/womens-winter1.jpg",
        "/assets/images/womens-winter2.jpg",
      ],
      category: "female",
      sizes: ["6", "7", "8"],
    },
    {
      id: 20,
      name: "Women's Loafers",
      price: 85.0,
      description: "Chic loafers for casual and formal settings.",
      images: [
        "/assets/images/womens-loafers1.jpg",
        "/assets/images/womens-loafers2.jpg",
      ],
      category: "female",
      sizes: ["6", "7", "8"],
    },
  
    // Add more male and female products similarly...
  ];
  