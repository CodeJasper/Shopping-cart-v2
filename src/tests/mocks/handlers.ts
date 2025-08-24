import { http, HttpResponse } from "msw";
import { mockProducts } from "@tests/mocks/products";

export const handlers = [
  http.get("https://apim-dev-proxy.sodhc.co/test-jasson/api/category", () => {
    return HttpResponse.json({
      data: {
        results: mockProducts
      }
    });
  })
];
