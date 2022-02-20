import { rest } from "msw";

const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "G-MOD",
          speed: 8,
        },
        {
          id: 2,
          name: "Alarm-O-Bot",
          speed: 2,
        },
      ])
    )
  ),
];

export default handlers;
