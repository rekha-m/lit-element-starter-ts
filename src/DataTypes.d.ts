export interface Product {
    id: number;
    image: string;
    name: string;
    price: string;
}
export interface Testimonial {
    name: string;
    stars: number;
    profile: string;
    content: string;
}
export interface Order {
    id: string;
    name: string;
    img: string;
    price: string;
    delivery: string;
    deliveryStatus: DeliveryStatus;
    paymentMethod: Payment;
}
export interface Address {
    name: string;
    line1: string;
    line2: string;
}
export declare enum Payment {
    creditCard = "credit-card",
    cash = "cash",
    upi = "upi"
}
export declare enum DeliveryStatus {
    delivered = "delivered",
    pending = "pending",
    cancelled = "cancelled"
}
export interface UserProfile {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: Address[];
    orders: Order[];
}
//# sourceMappingURL=DataTypes.d.ts.map