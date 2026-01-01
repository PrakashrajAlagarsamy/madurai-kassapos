import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/pages/aboutus",
  },    
  {
    id: 3,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Retail Software",
        newTab: false,
        children: [
          {
            id: 311,
            title: "Super Market & Grocery Shop",
            newTab: false,
            path: "/pages/products/super-market-grocery-shop",
            slug: "super-market-grocery-shop"
          },          
          {
            id: 312,
            title: "Retail Shop",
            newTab: false,
            path: "/pages/products/retail-shop",
            slug: "retail-shop"
          },
          {
            id: 313,
            title: "Vegetable & Fruit Shop",
            newTab: false,
            path: "/pages/products/vegetable-fruit-shop",
            slug: "vegetable-fruit-shop"
          },
          {
            id: 314,
            title: "Garments & Textile Shop",
            newTab: false,
            path: "/pages/products/garments-textile-shop",
            slug: "garments-textile-shop"
          },
          {
            id: 315,
            title: "Wholesale & Agencies Shop",
            newTab: false,
            path: "/pages/products/wholesale-agencies-shop",
            slug: "wholesale-agencies-shop"
          },
        ]
      },
      {
        id: 32,
        title: "Restaurant Software",
        newTab: false,
        children: [
          {
            id: 321,
            title: "Restaurant & Cafe",
            newTab: false,
            path: "/pages/products/restaurant-cafe",
            slug: "restaurant-cafe"
          },
          {
            id: 322,
            title: "Bakery & Sweet Shop",
            newTab: false,
            path: "/pages/products/bakery-sweet-shop",
            slug: "bakery-sweet-shop"
          },
          {
            id: 323,
            title: "Liquor Shop & Bar",
            newTab: false,
            path: "/pages/products/liquor-shop-bar",
            slug: "liquor-shop-bar"
          },
        ]
      },
      {
        id: 35,
        title: "Cloud Billing Software",
        newTab: false,
        path: "/pages/products/cloud-billing-software",
        slug: "cloud-billing-software"
      },
      {
        id: 36,
        title: "Mobile Billing Software",
        newTab: false,
        path: "/pages/products/mobile-billing-software",
        slug: "mobile-billing-software"
      },
      {
        id: 37,
        title: "Chicken & Meat Shop Software",
        newTab: false,
        path: "/pages/products/chicken-meat-shop-software",
        slug: "chicken-meat-shop-software"
      },
      {
        id: 38,
        title: "GST Invoicing Software",
        newTab: false,
        path: "/pages/products/gst-invoicing-software",
        slug: "gst-invoicing-software"
      },
    ],
  },

  {
    id: 4,
    title: "Services",
    newTab: false,
    path: "/pages/services",
  },
  {
    id: 5,
    title: "Sales Region",
    newTab: false,
    path: "/pages/salesregion",
  },
  {
    id: 6,
    title: "Blogs",
    newTab: false,
    path: "/blog",
  },
  {
    id: 7,
    title: "contact Us",
    newTab: false,
    path: "/contact-us",
  },  
];

export default menuData;
