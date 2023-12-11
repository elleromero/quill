import OnboardingForm from "@/components/forms/OnboardingForm";

export default function Page() {
  return (
    <section className="bg-black text-white h-screen">
      <div className="max-w-2xl mx-auto pt-12">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">Before you start</h1>
          <p className="text-sm">Please tell us about you</p>
        </header>
        <OnboardingForm />
      </div>
    </section>
  );
}
