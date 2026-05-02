import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CGV() {
  return (
    <div style={{ paddingTop: '11rem', paddingBottom: '4rem', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#6B3FE8', fontWeight: 600, marginBottom: '2rem' }}>
          <ArrowLeft size={18} /> Retour à l'accueil
        </Link>

        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1.5rem' }}>Conditions générales de vente</h1>

        <div style={{ color: '#4B5563', lineHeight: 1.7, fontSize: '1.0625rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: '#1F1B2E' }}>Prestations</h2>
          <p>DigitalPulse Agency propose des prestations de création de sites internet, gestion de réseaux sociaux, optimisation de fiches Google et automatisations sur-mesure. Le détail de chaque prestation est défini dans un devis individuel.</p>

          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: '#1F1B2E' }}>Tarifs et paiement</h2>
          <p>Les tarifs affichés sur le site sont indicatifs. Un devis personnalisé est établi avant tout démarrage de mission. Les paiements s'effectuent par virement bancaire selon les conditions précisées au devis.</p>

          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: '#1F1B2E' }}>Engagement</h2>
          <p>Les prestations mensuelles (réseaux sociaux, fiche Google, SEO) sont résiliables avec un préavis d'un mois calendaire, sauf mention contraire au devis.</p>

          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: '#1F1B2E' }}>Responsabilités</h2>
          <p>DigitalPulse Agency s'engage à fournir un service conforme aux règles de l'art. La responsabilité ne pourra être engagée pour des résultats commerciaux liés à des facteurs externes (saisonnalité, marché, etc.).</p>

          <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#9CA3AF', fontStyle: 'italic' }}>CGV en cours de finalisation. Conditions complètes communiquées sur devis. Contact : <a href="mailto:contact@digitalpulse-agency.fr" style={{ color: '#6B3FE8' }}>contact@digitalpulse-agency.fr</a></p>
        </div>
      </div>
    </div>
  );
}
