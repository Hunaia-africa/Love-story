"use client";

import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PageShell from "@/components/PageShell";
import { colors } from "@/theme/tokens";

const TitleWrap = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Eyebrow = styled.p`
  font-family: var(--font-display);
  font-style: italic;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 1.1rem;
  color: ${colors.espresso};
  margin: 0;
`;

const Script = styled.h1`
  font-family: var(--font-script);
  font-size: clamp(2.4rem, 7vw, 3.6rem);
  color: ${colors.bronze};
  margin: 0.2rem 0 0;
`;

const faqs = [
  {
    q: "What time should I arrive?",
    a: "We kindly request guests to arrive by 11:00am to allow the celebrations to begin on time.",
  },
  {
    q: "Is there parking available at the venue?",
    a: "Yes, parking will be available for guests at the venue. Our team will be available to guide you upon arrival.",
  },
  {
    q: "What should I wear?",
    a: "We invite you to come dressed in elegant traditional/formal attire as we celebrate this special occasion.",
  },
  {
    q: "Can I bring a plus one?",
    a: "Kindly note that we have prepared seating based on the number of guests invited. Please confirm your attendance accordingly.",
  },
  {
    q: "Are children invited?",
    a: "Please reach out to the couple directly for guidance on this.",
  },
  {
    q: "Will food be provided?",
    a: "Yes, guests will be hosted with meals and refreshments during the celebration.",
  },
  {
    q: "Are gifts appreciated?",
    a: "Your presence is the greatest gift. Should you wish to bless the couple further, monetary gifts towards their new journey will be warmly appreciated.",
  },
  {
    q: "Where can guests stay?",
    a: "We have shared a few accommodation options nearby for guests travelling from out of town.",
  },
  {
    q: "How do I RSVP?",
    a: "Kindly confirm your attendance through the RSVP section before July 15th.",
  },
  {
    q: "Can I take photos/videos during the wedding?",
    a: "We would love for you to capture beautiful memories with us. Kindly be mindful during key moments and allow our photographers to capture the best moments.",
  },
  {
    q: "Who can I contact if I have questions?",
    a: "For any questions or assistance, please reach out via the contact details shared with your invitation.",
  },
];

export default function FaqPage() {
  return (
    <PageShell>
      <TitleWrap>
        <Eyebrow>Frequently Asked</Eyebrow>
        <Script>Questions</Script>
      </TitleWrap>

      {faqs.map((f, i) => (
        <Accordion
          key={f.q}
          defaultExpanded={i === 0}
          sx={{
            background: "transparent",
            boxShadow: "none",
            "&:before": { display: "none" },
            borderBottom: "1px solid rgba(43,33,28,0.15)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: colors.bronze }} />}
          >
            <Typography
              sx={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "1.15rem",
                color: colors.espresso,
              }}
            >
              {i + 1}. {f.q}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                color: colors.bark,
                fontSize: "1.05rem",
                lineHeight: 1.7,
              }}
            >
              {f.a}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </PageShell>
  );
}
