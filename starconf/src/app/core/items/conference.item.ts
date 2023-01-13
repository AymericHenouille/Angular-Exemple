import { Conference } from "../models/conference.model";

export const conferences: Conference[] = [
  {
    name: 'How to subscribe to a pod race',
    date: new Date(2023, 0, 26, 10, 0),
    duration: 30,
    location: 'Tatooine',
    description: 'In this conference, you learn how to subscribe to a pod race',
    speaker: 'Anakin Skywalker',
    coverUrl: 'assets/images/anakin.jpg',
    totalSeats: 100,
    reservedSeats: 35,
    price: 65
  },
  {
    name: 'Darth Vader\'s secrets',
    date: new Date(2023, 1, 1, 16, 30),
    duration: 60,
    location: 'Death Star',
    description: 'In this conference, Darth Vader will reveal his secrets',
    speaker: 'Darth Vader',
    coverUrl: 'assets/images/darth_vader.jpg',
    totalSeats: 100,
    reservedSeats: 100,
    price: 42.69
  },
  {
    name: 'How to talk to a wookie',
    date: new Date(2023, 0, 11, 14, 0),
    duration: 120,
    location: 'Kashyyyk',
    description: 'In this conference, you will learn how to talk to a wookie',
    speaker: 'Chewbacca',
    coverUrl: 'assets/images/wookie.jpg',
    totalSeats: 50,
    reservedSeats: 46,
    price: 10.99
  },
];
