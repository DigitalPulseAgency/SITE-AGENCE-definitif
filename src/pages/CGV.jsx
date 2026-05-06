import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CGV() {
  return (
    <div className="text-white min-h-screen" style={{ paddingTop: '11rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#B59FFF', fontWeight: 600, marginBottom: '2rem', textDecoration: 'none' }}>
          <ArrowLeft size={18} /> Retour à l'accueil
        </Link>

        <h1 className="text-white" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1.5rem' }}>Conditions générales de vente</h1>

        <div style={{ color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.7, fontSize: '1.0625rem' }}>
          <h2 className="text-white" style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Prestations</h2>
          <p>DigitalPulse Agency propose des prestations de création de sites internet, gestion de réseaux sociaux, optimisation de fiches Google et automatisations sur-mesure. Le détail de chaque prestation est défini dans un devis individuel.</p>

          <h2 className="text-white" style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Tarifs et paiement</h2>
          <p>Les tarifs affichés sur le site sont indicatifs. Un devis personnalisé est établi avant tout démarrage de mission. Les paiements s'effectuent par virement bancaire selon les conditions précisées au devis.</p>

          <h2 className="text-white" style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Engagement</h2>
          <p>Les prestations mensuelles (réseaux sociaux, fiche Google, SEO) sont résiliables avec un préavis d'un mois calendaire, sauf mention contraire au devis.</p>

          <h2 className="text-white" style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Responsabilités</h2>
          <p>DigitalPulse Agency s'engage à fournir un service conforme aux règles de l'art. La responsabilité ne pourra être engagée pour des résultats commerciaux liés à des facteurs externes (saisonnalité, marché, etc.).</p>

          <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.45)', fontStyle: 'italic' }}>CGV en cours de finalisation. Conditions complètes communiquées sur devis. Contact : <a href="mailto:contact@digitalpulse-agency.fr" style={{ color: '#B59FFF' }}>contact@digitalpulse-agency.fr</a></p>
        </div>
      </div>
    </div>
  );
}
