import { rest } from "msw";
import { Book, Review, Post } from "../types/cart_type";

export const handlers = [
  rest.get("https://my.backend/book", (_req, res, ctx) => {
    return res(
      ctx.json<Book>({
        title: "Lord of the Rings",
        imageUrl: "",
        description:
          "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
      })
    );
  }),
  rest.get("https://my.backend/posts", (_req, res, ctx) => {
    return res(
      ctx.json<Post>({
        id: "2323",
        text: "posts content",
      })
    );
  }),
  rest.get("/reviews", (_req, res, ctx) => {
    return res(
      ctx.json<Review[]>([
        {
          id: "60333292-7ca1-4361-bf38-b6b43b90cb16",
          author: "John Maverick",
          text: "Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The trilogy is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!",
        },
      ])
    );
  }),
];
