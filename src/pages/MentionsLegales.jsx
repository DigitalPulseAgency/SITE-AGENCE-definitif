import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function MentionsLegales() {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#6B3FE8', fontWeight: 600, marginBottom: '2rem' }}>
          <ArrowLeft size={18} /> Retour à l'accueil
        </Link>

        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1.5rem' }}>Mentions légales</h1>

        <div style={{ color: '#4B5563', lineHeight: 1.7, fontSize: '1.0625rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: '#1F1B2E' }}>Éditeur du site</h2>
          <p>DigitalPulse Agency<br/>Fondateur : Louis Humbert<br/>Email : <a href="mailto:contact@digitalpulse-agency.fr" style={{ color: '#6B3FE8' }}>contact@digitalpulse-agency.fr</a><br/>Téléphone : <a href="tel:+33615940883" style={{ color: '#6B3FE8' }}>06 15 94 08 83</a></p>

          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: '#1F1B2E' }}>Hébergement</h2>
          <p>Site hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>

          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: '#1F1B2E' }}>Propriété intellectuelle</h2>
          <p>L'ensemble des contenus présents sur ce site (textes, images, logos, vidéos) est la propriété exclusive de DigitalPulse Agency, sauf mention contraire. Toute reproduction sans autorisation est interdite.</p>

          <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#9CA3AF', fontStyle: 'italic' }}>Mentions en cours de finalisation. Pour toute question : <a href="mailto:contact@digitalpulse-agency.fr" style={{ color: '#6B3FE8' }}>contact@digitalpulse-agency.fr</a></p>
        </div>
      </div>
    </div>
  );
}
