import React from 'react';
import { INSTAGRAM_LINK, TIKTOK_LINK, LINKEDIN_LINK } from '../config/links';
import InstagramLogo from './icons/InstagramLogo';
import TikTokLogo from './icons/TikTokLogo';
import LinkedInLogo from './icons/LinkedInLogo';

const SOCIALS = [
  {
    name: 'Instagram',
    handle: '@digitalpulse',
    href: INSTAGRAM_LINK,
    Logo: InstagramLogo,
  },
  {
    name: 'TikTok',
    handle: '@louis.dev',
    href: TIKTOK_LINK,
    Logo: TikTokLogo,
  },
  {
    name: 'LinkedIn',
    handle: 'Louis Humbert',
    href: LINKEDIN_LINK,
    Logo: LinkedInLogo,
  },
];

export default function SocialBanner() {
  return (
    <section className="py-12 md:py-20 px-6 border-y border-violet-500/10 bg-gradient-to-br from-violet-950/30 via-zinc-900/50 to-violet-950/30">
      <div className="max-w-5xl mx-auto">

        {/* Titre */}
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center">
          Reste connecté avec nous
        </h2>

        {/* Sous-titre */}
        <p className="text-zinc-400 text-base md:text-lg text-center mt-4 max-w-2xl mx-auto leading-relaxed">
          On partage régulièrement les coulisses de nos projets en lives TikTok et Instagram. Tu vois comment on bosse, comment on met en place les automatisations IA, et tu peux poser tes questions en direct.
        </p>

        {/* Row d'icônes */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6">
          {SOCIALS.map(({ name, handle, href, Logo }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} — ${handle}`}
              className="group w-36 md:w-44 p-6 rounded-2xl border border-violet-500/20 bg-zinc-900/60 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20 flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Logo size={32} />
              </div>
              <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">
                {name}
              </span>
              <span className="text-zinc-500 text-xs text-center whitespace-nowrap">
                {handle}
              </span>
            </a>
          ))}
        </div>

        {/* Phrase de clôture */}
        <p className="text-zinc-500 text-sm text-center italic mt-8">
          🎥 Prochains lives annoncés sur Instagram en story
        </p>

      </div>
    </section>
  );
}
