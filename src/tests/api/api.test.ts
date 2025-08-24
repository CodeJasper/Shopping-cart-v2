import { setupApiStore } from "../utils/setupApiStore";
import { api } from "../../app/api/api";
import { test, expect } from "vitest";
import type { AppDispatch } from "@app/store/store";

test("fetches and transforms products correctly", async () => {
  const store = setupApiStore();
  const dispatch = store.dispatch as AppDispatch
  const result = await dispatch(api.endpoints.getProducts.initiate());

  expect(result.status).toBe("fulfilled");
  expect(result.data).toHaveLength(5);
  expect(result.data?.[0].displayName).toBe("Silla ergonómica de oficina");
  expect(result.data?.[1].displayName).toBe("Banco alto de cocina");
  expect(result.data?.[2].displayName).toBe("Escalera de aluminio 6 peldaños");
  expect(result.data?.[3].displayName).toBe("Silla plegable ligera");
  expect(result.data?.[4].displayName).toBe("Banco bajo de madera");
});
