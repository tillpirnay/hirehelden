import ContactSection from '../components/ContactSection';

export default function ErstgespraechPage() {
  return (
    <main className="bg-gradient-to-br from-primary to-primary-dark pt-2 sm:pt-4 md:pt-6 pb-8 sm:pb-10 md:pb-12">
      <div className="container mx-auto px-4 py-2 sm:py-3 md:py-4 relative">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <ContactSection />
        </div>
      </div>
    </main>
  );
} 