// src/hooks/vanillaAuthHookTestComponent.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import VanillaAuthHookTestComponent from "./vanillaAuthHookTestComponent";
import { fireAuth } from "../fireInit";

test("displays uid with logged in", () => {
    const testUid = "hello2024uid";
    fireAuth.currentUser = { uid: testUid };
    render(<VanillaAuthHookTestComponent />);
    expect(screen.getByText(testUid))
      .toBeInTheDocument();
});

test("displays \"No User\" with logged out", () => {
    fireAuth.currentUser = null;
    render(<VanillaAuthHookTestComponent />);
    expect(screen.queryByText("No User"))
      .toBeInTheDocument();
})