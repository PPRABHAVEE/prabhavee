"use client";
import { useEffect, useRef, useState } from "react";
import { SITE, ENQUIRY, ENQUIRY_ALIASES } from "@/content/site";

// Delivery, in order of preference:
// 1. NEXT_PUBLIC_WEB3FORMS_KEY: Web3Forms emails the enquiry straight to the inbox the key was issued for (Reply-To is the visitor).
// 2. NEXT_PUBLIC_ENQUIRY_ENDPOINT: any other JSON form endpoint (for example Formspree).
// 3. Neither set: open a prepared email to the firm so no enquiry is lost.
const WEB3FORMS = "https://api.web3forms.com/submit";

const details = (d) => `Name: ${d.name}\nOrganisation: ${d.organisation || "not given"}\nWork email: ${d.email}\nPhone: ${d.phone || "not given"}\nType of enquiry: ${d.interest}\nEngagement type: ${d.engagement}`;

export default function EnquiryForm({ idPrefix = "enq" }) {
  const ref = useRef(null);
  const [status, setStatus] = useState("");
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState("");
  const [engage, setEngage] = useState("");

  useEffect(() => {
    const pre = new URLSearchParams(window.location.search).get("interest");
    const match = ENQUIRY.types.includes(pre) ? pre : ENQUIRY_ALIASES[pre];
    if (match) setInterest(match);
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const form = ref.current;
    if (!form.reportValidity()) return;
    const d = Object.fromEntries(new FormData(form));
    if (d.website) return;
    delete d.website;
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    const endpoint = key ? WEB3FORMS : process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;
    if (endpoint) {
      const payload = key
        ? { access_key: key, subject: `Website enquiry: ${d.interest}`, from_name: "P/ PRABHAVEE website", ...d, message: `${d.message}\n\n${details(d)}` }
        : d;
      setStatus("Sending…");
      try {
        const r = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
        const j = await r.json().catch(() => ({}));
        if (!r.ok || j.success === false) throw new Error("failed");
        form.reset(); setInterest(""); setEngage(""); setStatus("");
        setSent(true);
      } catch {
        setStatus(`Sorry, your enquiry could not be sent. Please email ${SITE.email}.`);
      }
      return;
    }
    const body = `${details(d)}\n\n${d.message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Website enquiry: " + d.interest)}&body=${encodeURIComponent(body)}`;
    setStatus(`Your email app has been opened with your enquiry. Review and send it there, or email ${SITE.email} directly.`);
  }

  if (sent) {
    return (
      <div className="sent" role="status">
        <h3>Thank you.</h3>
        <p>Your enquiry has been sent. We will reply to the email address you gave.</p>
        <button className="btn btn--ghost" type="button" onClick={() => setSent(false)}>Send another enquiry</button>
      </div>
    );
  }
  return (
    <form className="form" ref={ref} onSubmit={onSubmit} noValidate>
      <div className="row2">
        <div className="field"><label htmlFor={`${idPrefix}-name`}>Full name *</label><input id={`${idPrefix}-name`} name="name" autoComplete="name" required maxLength={120} /></div>
        <div className="field"><label htmlFor={`${idPrefix}-org`}>Organisation</label><input id={`${idPrefix}-org`} name="organisation" autoComplete="organization" maxLength={200} /></div>
      </div>
      <div className="row2">
        <div className="field"><label htmlFor={`${idPrefix}-email`}>Work email *</label><input id={`${idPrefix}-email`} type="email" name="email" autoComplete="email" required maxLength={200} /></div>
        <div className="field"><label htmlFor={`${idPrefix}-phone`}>Phone number (optional)</label><input id={`${idPrefix}-phone`} type="tel" name="phone" autoComplete="tel" maxLength={30} /></div>
      </div>
      <div className="field">
        <label htmlFor={`${idPrefix}-interest`}>Type of enquiry *</label>
        <select id={`${idPrefix}-interest`} name="interest" required value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option value="">Select the type of enquiry</option>
          {ENQUIRY.types.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor={`${idPrefix}-engage`}>How do you want to engage? *</label>
        <select id={`${idPrefix}-engage`} name="engagement" required value={engage} onChange={(e) => setEngage(e.target.value)}>
          <option value="">Select the engagement type</option>
          {ENQUIRY.engagements.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="field"><label htmlFor={`${idPrefix}-message`}>Brief description of the requirement *</label><textarea id={`${idPrefix}-message`} name="message" required maxLength={4000} placeholder="Tell us about your organisation and what you are looking for." /></div>
      <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div><button className="btn" type="submit">{ENQUIRY.submit}</button></div>
      <p className="form-status" role="status">{status}</p>
    </form>
  );
}
