import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Confidentialite() {
  return (
    <div style={{ paddingTop: '11rem', paddingBottom: '4rem', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#6B3FE8', fontWeight: 600, marginBottom: '2rem' }}>
          <ArrowLeft size={18} /> Retour à l'accueil
        </Link>

        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1.5rem' }}>Politique de confidentialité</h1>

        <div style={{ color: '#4B5563', lineHeight: 1.7, fontSize: '1.0625rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: '#1F1B2E' }}>Données collectées</h2>
          <p>DigitalPulse Agency collecte uniquement les données que vous fournissez volontairement via le diagnostic gratuit ou les formulaires de contact (nom, email, téléphone, informations sur votre activité).</p>

          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: '#1F1B2E' }}>Utilisation</h2>
          <p>Vos données sont utilisées exclusivement pour répondre à votre demande de diagnostic et vous proposer nos services. Aucune donnée n'est revendue à des tiers.</p>

          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: '#1F1B2E' }}>Vos droits (RGPD)</h2>
          <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits : <a href="mailto:contact@digitalpulse-agency.fr" style={{ color: '#6B3FE8' }}>contact@digitalpulse-agency.fr</a>.</p>

          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: '#1F1B2E' }}>Cookies</h2>
          <p>Ce site utilise des cookies techniques nécessaires au fonctionnement. Aucun cookie publicitaire n'est déposé sans votre consentement.</p>

          <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#9CA3AF', fontStyle: 'italic' }}>Politique en cours de finalisation. Pour toute question : <a href="mailto:contact@digitalpulse-agency.fr" style={{ color: '#6B3FE8' }}>contact@digitalpulse-agency.fr</a></p>
        </div>
      </div>
    </div>
  );
}
