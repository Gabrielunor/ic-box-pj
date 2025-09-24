/* eslint-disable @typescript-eslint/no-var-requires */
import { useICBoxPJStore } from "@/lib/store";
import { Result } from "@/lib/store/types";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ActionButtons from "..";

describe("ActionButtons test suit", () => {
  test("Should render the component without any errors", async () => {
    useICBoxPJStore.setState({
      result: {
        summary: {
          document: "",
        },
      } as Result,
    });

    const compoment = render(<ActionButtons />);
    expect(compoment).toBeDefined();
  });
});
