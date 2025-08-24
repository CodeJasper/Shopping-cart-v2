import { server } from "./tests/mocks/server";
import "@testing-library/jest-dom";
import { beforeAll, afterAll, afterEach } from "vitest";


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());