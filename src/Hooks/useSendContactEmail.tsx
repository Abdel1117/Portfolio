"use client";

import { useCallback, useState } from "react";
import type { ContactEmailPayload } from "@/services/email/emailService";
import { sendContactEmail } from "@/services/email/emailService";

type Status = "idle" | "loading" | "success" | "error";

export function useSendContactEmail() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<unknown>(null);

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
  }, []);

  const send = useCallback(async (payload: ContactEmailPayload) => {
    setStatus("loading");
    setError(null);

    try {
      await sendContactEmail(payload);
      setStatus("success");
      return true;
    } catch (e) {
      setError(e);
      setStatus("error");
      return false;
    }
  }, []);

  return { send, status, error, reset };
}
