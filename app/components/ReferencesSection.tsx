import Image from 'next/image';
import Link from 'next/link';

export default function ReferencesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Unsere Referenzen</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Erfahren Sie, wie wir unseren Kunden helfen, die besten Fachkräfte zu finden
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl text-center">
            <h3 className="text-xl font-bold mb-4">Neue Referenzen in Kürze</h3>
            <p className="text-gray-600 mb-6">
              Wir arbeiten derzeit mit ausgewählten Kunden zusammen und werden in Kürze detaillierte Erfolgsgeschichten veröffentlichen.
            </p>
            <p className="text-gray-600">
              Wenn Sie mehr über unsere Arbeit erfahren möchten, kontaktieren Sie uns gerne für ein persönliches Gespräch.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/kontakt"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
} 