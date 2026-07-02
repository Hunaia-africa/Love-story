"use client";

import { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import PageShell from "@/components/PageShell";
import { colors } from "@/theme/tokens";

const Script = styled.h1`
  font-family: var(--font-script);
  font-size: clamp(2.6rem, 9vw, 4.6rem);
  color: ${colors.bronze};
  text-align: center;
  margin: 0;
`;

const Intro = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1.25rem;
  text-align: center;
  color: ${colors.cocoa};
  max-width: 620px;
  margin: 1.5rem auto 3rem;
  line-height: 1.6;
`;

const Card = styled.div`
  background: ${colors.espresso};
  color: ${colors.ivory};
  border-radius: 14px;
  padding: 2.8rem 2.2rem;
  max-width: 480px;
  margin: 0 auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
`;

const CardTitle = styled.h2`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.6rem;
  margin: 0 0 1.8rem;
`;

const FieldLabel = styled.label`
  display: block;
  font-family: var(--font-display);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`;

const FieldWrap = styled.div`
  margin-bottom: 1.6rem;
`;

const OptionBtn = styled.button<{ $active?: boolean }>`
  width: 100%;
  text-align: left;
  padding: 1.1rem 1.2rem;
  border-radius: 8px;
  margin-bottom: 0.9rem;
  border: 1px solid
    ${(p) => (p.$active ? colors.gold : "rgba(255,255,255,0.18)")};
  background: ${(p) =>
    p.$active ? "rgba(201,161,95,0.25)" : "rgba(255,255,255,0.06)"};
  color: ${colors.ivory};
  font-family: var(--font-body);
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const inputSx = {
  "& .MuiOutlinedInput-root": {
    background: "rgba(255,255,255,0.06)",
    borderRadius: "8px",
    color: colors.ivory,
    "& fieldset": { borderColor: "rgba(255,255,255,0.25)" },
    "&:hover fieldset": { borderColor: colors.gold },
    "&.Mui-focused fieldset": { borderColor: colors.gold },
  },
  "& .MuiInputBase-input": { color: colors.ivory },
};

export default function RsvpPage() {
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageShell>
      <Script>Kindly RSVP</Script>
      <Intro>
        We would love it if you would join us to celebrate this occasion.
        Please respond by July 15th.
      </Intro>

      <Card>
        <CardTitle>You&rsquo;re Invited!</CardTitle>

        {submitted ? (
          <Alert
            severity="success"
            sx={{ background: "rgba(76,175,80,0.15)", color: colors.ivory }}
          >
            Thank you{name ? `, ${name}` : ""}! Your RSVP has been received.
          </Alert>
        ) : (
          <form onSubmit={handleSubmit}>
            <FieldWrap>
              <FieldLabel>Your name</FieldLabel>
              <TextField
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={inputSx}
              />
            </FieldWrap>

            <FieldWrap>
              <FieldLabel>Your email</FieldLabel>
              <TextField fullWidth required type="email" sx={inputSx} />
            </FieldWrap>

            <FieldWrap>
              <FieldLabel>Will you be attending our wedding?</FieldLabel>
              <OptionBtn
                type="button"
                $active={attending === "yes"}
                onClick={() => setAttending("yes")}
              >
                Joyfully accepts
              </OptionBtn>
              <OptionBtn
                type="button"
                $active={attending === "no"}
                onClick={() => setAttending("no")}
              >
                Regretfully declines
              </OptionBtn>
            </FieldWrap>

            <FieldWrap>
              <FieldLabel>Your message to the couple</FieldLabel>
              <TextField fullWidth multiline minRows={3} sx={inputSx} />
            </FieldWrap>

            <Button
              type="submit"
              fullWidth
              size="large"
              sx={{
                background: colors.gold,
                color: colors.espresso,
                borderRadius: "999px",
                py: 1.4,
                fontWeight: 700,
                "&:hover": { background: colors.goldLight },
              }}
            >
              RSVP
            </Button>
          </form>
        )}
      </Card>
    </PageShell>
  );
}
