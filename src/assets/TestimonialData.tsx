export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  review: string;
  rating: number;
}

export const testimonialData: TestimonialType[] = [
  {
    id: 1,
    name: "Nicole Rodrigues",
    role: "CEO & CO Founder",
    review:
      "Lorem Ipsum is simply dummy text of the printing typese industry. Lorem Ipsum hasIt is a long est fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    role: "Marketing Director",
    review:
      "Working with Design Dynasty has been an incredible experience. Their attention to detail and creative approach exceeded our expectations. The team delivered exceptional results on time and within budget.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Product Manager",
    review:
      "The design team at Design Dynasty transformed our vision into reality. Their professional approach and innovative solutions helped us achieve our business goals. Highly recommended for any design project.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Startup Founder",
    review:
      "Design Dynasty provided outstanding service from start to finish. Their expertise in modern design trends and user experience made our product stand out in the market. Excellent communication throughout the project.",
    rating: 4,
  },
];
