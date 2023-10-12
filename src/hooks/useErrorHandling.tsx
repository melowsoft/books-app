// useErrorHandling.ts
import { useState } from "react";

export function useErrorHandling() {
  const [titleErrors, setTitleErrors] = useState<string>("");
  const [otherErrors, setOtherErrors] = useState<string>("");

  return { titleErrors, setTitleErrors, otherErrors, setOtherErrors };
}
