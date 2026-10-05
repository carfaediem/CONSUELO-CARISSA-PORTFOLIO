import { useState, type FormEvent } from 'react'
import { PaperPlaneTilt, CheckCircle, WarningCircle, EnvelopeSimple, ArrowUpRight } from '@/components/slab'
import { SERVICES } from '@/data/portfolio'
import { profile } from '@/data/profile'
import { readLead, submitLead, SubmitError, MAX_NAME, MAX_EMAIL, MAX_MESSAGE, type SubmitResult } from '@/lib/contact'

/**
 * ContactGrid - the Contact view as a fixed viewport.
 *
 * One glass sheet, two columns: what I can help with on the left, on the
 * wine plate, and the form itself on the right. Sized to the panel, so
 * nothing here scrolls; the message box takes whatever height is left.
 *
 * Submission goes through lib/contact.ts, which is the one place a form
 * backend gets wired. Until it is, the same call opens the visitor's mail
 * client with the message laid out, and the success copy says so.
 */

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'error'; note: string } | { kind: 'sent'; via: SubmitResult['via'] }

/* The plane takes this long to leave the button. The sent state waits for it
   even when the submit itself is instant, so the send is something you see
   happen rather than a panel that blinks. */
const FLIGHT_MS = 650

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

export default function ContactGrid() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  // Bumped on every failed submit so the shake replays even if the same
  // error is already showing.
  const [shake, setShake] = useState(0)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const lead = readLead(new FormData(e.currentTarget))
    if (!lead) {
      setStatus({ kind: 'error', note: 'Add your name, a real email, and a short note.' })
      setShake((n) => n + 1)
      return
    }
    setStatus({ kind: 'sending' })
    try {
      const [result] = await Promise.all([submitLead(lead), wait(FLIGHT_MS)])
      setStatus({ kind: 'sent', via: result.via })
    } catch (err) {
      const note = err instanceof SubmitError ? err.message : 'That did not go through. Email me directly instead.'
      setStatus({ kind: 'error', note })
      setShake((n) => n + 1)
    }
  }

  const busy = status.kind === 'sending'

  return (
    <section className="pgrid cgrid" aria-labelledby="contact-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Contact</span>
        <h1 className="pgrid__title" id="contact-title">
          Let’s get <em>started</em>
        </h1>
        <p className="pgrid__lede">
          Have a story to tell, a page to run, or a draft that needs a second pair of eyes? Tell me about it.
        </p>
      </header>

      <div className="home__glass cgrid__glass">
        {/* Left: the dark plate. What happens after you press send. */}
        <aside className="cgrid__aside" aria-labelledby="contact-faq">
          <div className="cgrid__aside-head">
            <span className="cgrid__eyebrow">What I do</span>
            <h2 className="cgrid__aside-title" id="contact-faq">
              Four ways I can help.
              <br />
              <span>Pick one, or mix them.</span>
            </h2>
          </div>

          <ul className="cgrid__faqs" role="list">
            {SERVICES.map((sv) => (
              <li key={sv.index} className="cgrid__faq is-open">
                <div className="cgrid__faq-q">
                  <span className="cgrid__step-index" aria-hidden="true">{sv.index}</span>
                  <span className="cgrid__faq-text">{sv.title}</span>
                </div>
                <div className="cgrid__faq-a">
                  <p>{sv.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="cgrid__direct">
            <a className="cgrid__mail" href={`mailto:${profile.email}`}>
              <EnvelopeSimple size={16} weight="fill" aria-hidden="true" />
              <span>{profile.email}</span>
            </a>
            {profile.socials.length > 0 && (
            <ul className="cgrid__socials" role="list">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a className="cgrid__social" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <img src={s.iconPath} alt="" loading="lazy" decoding="async" />
                  </a>
                </li>
              ))}
            </ul>
            )}
          </div>
        </aside>

        {/* Right: the form. */}
        <div className="cgrid__panel">
          {status.kind === 'sent' ? (
            <div className="cgrid__done" role="status">
              <span className="cgrid__done-mark" aria-hidden="true">
                <CheckCircle size={30} weight="fill" />
              </span>
              <h2 className="cgrid__done-title">
                {status.via === 'webhook' ? 'Got it.' : 'Your mail app has it.'}
              </h2>
              <p className="cgrid__done-body">
                {status.via === 'webhook'
                  ? 'It is in my inbox. I will get back to you by email.'
                  : 'The message is laid out and addressed. Press send there and I will get back to you by email.'}
              </p>
              <button type="button" className="cgrid__again" onClick={() => setStatus({ kind: 'idle' })}>
                Write another
              </button>
            </div>
          ) : (
            <form className={`cgrid__form${busy ? ' is-sending' : ''}`} onSubmit={onSubmit} noValidate>
              {/* Honeypot. Hidden from people and assistive tech; a script that
                  fills every field trips it and the backend can drop the
                  post. autoComplete off so a browser never fills it either. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="cgrid__trap"
              />
              <div className="cgrid__row">
                <label className="cgrid__field">
                  <span className="cgrid__label">First name</span>
                  <input type="text" name="firstName" autoComplete="given-name" required maxLength={MAX_NAME} placeholder="First name" />
                </label>
                <label className="cgrid__field">
                  <span className="cgrid__label">Last name</span>
                  <input type="text" name="lastName" autoComplete="family-name" required maxLength={MAX_NAME} placeholder="Last name" />
                </label>
              </div>

              <label className="cgrid__field">
                <span className="cgrid__label">Email</span>
                <input type="email" name="email" autoComplete="email" required maxLength={MAX_EMAIL} placeholder="you@example.com" />
              </label>

              <label className="cgrid__field cgrid__field--grow">
                <span className="cgrid__label">Tell me about the project</span>
                <textarea
                  name="message"
                  required
                  maxLength={MAX_MESSAGE}
                  placeholder="A newsletter, a content calendar, a blog that needs to get found…"
                />
              </label>

              <div className="cgrid__actions">
                <button
                  key={shake}
                  type="submit"
                  className={`cgrid__submit${busy ? ' is-sending' : ''}${status.kind === 'error' ? ' is-shaking' : ''}`}
                  disabled={busy}
                >
                  <span className="cgrid__submit-plane" aria-hidden="true">
                    <PaperPlaneTilt size={17} weight="fill" />
                  </span>
                  <span className="cgrid__submit-label">{busy ? 'Sending' : 'Send message'}</span>
                  <ArrowUpRight className="cgrid__submit-arrow" size={15} weight="bold" aria-hidden="true" />
                </button>
                {status.kind === 'error' ? (
                  <span className="cgrid__status" role="alert">
                    <WarningCircle size={16} weight="fill" aria-hidden="true" />
                    {status.note}
                  </span>
                ) : (
                  <span className="cgrid__hint">Opens your email app with the message ready to send.</span>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
