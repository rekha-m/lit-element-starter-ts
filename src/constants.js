import { DeliveryStatus, Payment } from "./DataTypes.js";
export const forMeImages = ['../src/images/dark_haired_man_in_brown_leather_jacket.jpg', '../src/images/modern_businessman_in_india.jpg', '../src/images/urban_mens_fashion.jpg'];
export const sampleProducts = [
    {
        id: 1,
        image: new URL("../src/images/pile_of_denim_jeans.jpg", import.meta.url).href,
        name: "Printed Polo T-Shirt",
        price: "1499.00",
    },
    {
        id: 2,
        image: new URL("../src/images/urban_mens_fashion.jpg", import.meta.url).href,
        name: "Printed Polo T-Shirt",
        price: "1499.00",
    },
    {
        id: 3,
        image: new URL("../src/images/pile_of_denim_jeans.jpg", import.meta.url).href,
        name: "Printed Polo T-Shirt",
        price: "1499.00",
    },
    {
        id: 4,
        image: new URL("../src/images/urban_mens_fashion.jpg", import.meta.url).href,
        name: "Printed Polo T-Shirt",
        price: "1499.00",
    },
    {
        id: 5,
        image: new URL("../src/images/pile_of_denim_jeans.jpg", import.meta.url).href,
        name: "Printed Polo T-Shirt",
        price: "1499.00",
    },
    {
        id: 6,
        image: new URL("../src/images/urban_mens_fashion.jpg", import.meta.url).href,
        name: "Printed Polo T-Shirt",
        price: "1499.00",
    },
];
export const testimonial = [
    {
        name: "Vikas",
        profile: new URL("../src/images/boy_image.jpg", import.meta.url).href,
        stars: 5,
        content: "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price."
    },
    {
        name: "Vikas",
        profile: new URL("../src/images/boy_image.jpg", import.meta.url).href,
        stars: 5,
        content: "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price."
    },
    {
        name: "Vikas",
        profile: new URL("../src/images/boy_image.jpg", import.meta.url).href,
        stars: 5,
        content: "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price."
    }
];
export const sampleOrders = [
    {
        id: "#12345678",
        name: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
        img: "../src/images/orders.png",
        price: "1,899",
        delivery: "Sat, Aug 30",
        deliveryStatus: DeliveryStatus.pending,
        paymentMethod: Payment.creditCard,
    },
    {
        id: "#12345678",
        name: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
        img: "../src/images/orders.png",
        price: "1,899",
        delivery: "Sun, Aug 31",
        deliveryStatus: DeliveryStatus.pending,
        paymentMethod: Payment.creditCard,
    },
    {
        id: "#12345678",
        name: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
        img: "../src/images/orders.png",
        price: "1,899",
        delivery: "Sun, Aug 16",
        deliveryStatus: DeliveryStatus.delivered,
        paymentMethod: Payment.creditCard,
    },
    {
        id: "#12345678",
        name: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
        img: "../src/images/orders.png",
        price: "1,899",
        delivery: "Sat, Aug 15",
        deliveryStatus: DeliveryStatus.delivered,
        paymentMethod: Payment.creditCard,
    }
];
//# sourceMappingURL=constants.js.map