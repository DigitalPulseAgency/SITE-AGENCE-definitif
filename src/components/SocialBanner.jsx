import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { INSTAGRAM_LINK, TIKTOK_LINK, LINKEDIN_LINK } from '../config/links';
import TikTokIcon from './icons/TikTokIcon';

const SOCIALS = [
  {
    name: 'Instagram',
    handle: '@digitalpulse.agency',
    href: INSTAGRAM_LINK,
    Icon: ({ className }) => <Instagram className={className} />,
  },
  {
    name: 'TikTok',
    handle: '@louis.dev',
    href: TIKTOK_LINK,
    Icon: ({ className }) => <TikTokIcon className={className} size={32} />,
  },
  {
    name: 'LinkedIn',
    handle: 'Louis Humbert',
    href: LINKEDIN_LINK,
    Icon: ({ className }) => <Linkedin className={className} />,
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
          {SOCIALS.map(({ name, handle, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} — ${handle}`}
              className="group w-28 md:w-40 p-6 rounded-2xl border border-violet-500/20 bg-zinc-900/60 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20 flex flex-col items-center gap-3"
            >
              <Icon className="w-8 h-8 text-violet-400 transition-colors group-hover:text-violet-300" />
              <span className="text-white font-semibold text-sm md:text-base">
                {name}
              </span>
              <span className="text-zinc-500 text-xs text-center break-all">
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
