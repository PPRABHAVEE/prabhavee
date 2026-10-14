"use client";
import { useEffect, useRef, useState } from "react";
import { SITE, SERVICES, NONPROFIT_SERVICES } from "@/content/site";

const OPTIONS = [...SERVICES.map((s) => s.title), ...NONPROFIT_SERVICES.map((s) => s.title), "Academic collaboration", "Internship", "Partner with us", "Other enquiry"];

// Sends to NEXT_PUBLIC_ENQUIRY_ENDPOINT (a form service such as Formspree) when set;
// otherwise opens a prepared email to the firm so no enquiry is lost.
export default function EnquiryForm({ idPrefix = "enq" }) {
  const ref = useRef(null);
  const [status, setStatus] = useState("");
  const [interest, setInterest] = useState("");

  useEffect(() => {
    const pre = new URLSearchParams(window.location.search).get("interest");
    if (pre && OPTIONS.includes(pre)) setInterest(pre);
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const form = ref.current;
    if (!form.reportValidity()) return;
    const d = Object.fromEntries(new FormData(form));
    if (d.website) return;
    delete d.website;
    const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;
    if (endpoint) {
      try {
        const r = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
        if (!r.ok) throw new Error("failed");
        form.reset(); setInterest("");
        setStatus("Thank you. Your enquiry has been sent.");
      } catch {
        setStatus(`Sorry, your enquiry could not be sent. Please email ${SITE.email}.`);
      }
      return;
    }
    const body = `Name: ${d.name}\nOrganisation: ${d.organisation || ""}\nEmail: ${d.email}\nInterest: ${d.interest}\n\n${d.message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Website enquiry: " + d.interest)}&body=${encodeURIComponent(body)}`;
    setStatus(`Your email app has been opened with your enquiry. Review and send it there, or email ${SITE.email} directly.`);
  }

  return (
    <form className="form" ref={ref} onSubmit={onSubmit} noValidate>
      <div className="row2">
        <div className="field"><label htmlFor={`${idPrefix}-name`}>Your name *</label><input id={`${idPrefix}-name`} name="name" autoComplete="name" required maxLength={120} /></div>
        <div className="field"><label htmlFor={`${idPrefix}-email`}>Email *</label><input id={`${idPrefix}-email`} type="email" name="email" autoComplete="email" required maxLength={200} /></div>
      </div>
      <div className="field"><label htmlFor={`${idPrefix}-org`}>Organisation</label><input id={`${idPrefix}-org`} name="organisation" autoComplete="organization" maxLength={200} /></div>
      <div className="field">
        <label htmlFor={`${idPrefix}-interest`}>What would you like to discuss? *</label>
        <select id={`${idPrefix}-interest`} name="interest" required value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option value="">Select an area</option>
          {OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="field"><label htmlFor={`${idPrefix}-message`}>Your message *</label><textarea id={`${idPrefix}-message`} name="message" required maxLength={4000} placeholder="Tell us about your organisation and what you are looking for." /></div>
      <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div><button className="btn" type="submit">Send enquiry</button></div>
      <p className="form-status" role="status">{status}</p>
    </form>
  );
}
