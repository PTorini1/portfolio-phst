import { ExternalLink } from "../components/ExternalLink";
import { Section } from "../components/Section";
import { contactContent } from "../data/contact";
import { useLocale } from "../i18n/locale";

export function ContactPage() {
  const { locale } = useLocale();
  const content = contactContent[locale];

  return (
    <Section eyebrow={content.eyebrow} title={content.title}>
      <div className="stack">
        <p className="lead-text">{content.message}</p>
        <div className="contact-channels" aria-label={content.title}>
          {content.channels.map((channel) =>
            channel.external ? (
              <ExternalLink
                key={channel.id}
                href={channel.href}
                label={channel.label}
                className="contact-channel"
                hideArrow
              >
                <span className="contact-channel-label">{channel.label}</span>
                <span className="contact-channel-details">
                  <span className="contact-channel-value">{channel.value}</span>
                  <span className="contact-channel-arrow" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </ExternalLink>
            ) : (
              <a
                key={channel.id}
                href={channel.href}
                className="contact-channel"
                aria-label={`${channel.label} - ${channel.value}`}
              >
                <span className="contact-channel-label">{channel.label}</span>
                <span className="contact-channel-details">
                  <span className="contact-channel-value">{channel.value}</span>
                  <span className="contact-channel-arrow" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </a>
            )
          )}
        </div>
      </div>
    </Section>
  );
}
