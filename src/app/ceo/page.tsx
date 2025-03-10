import { Metadata } from "next";
import Header from "../../components/Header";
import AnimatedCEOContent from "../../components/ui/AnimatedCEOContent";

export const metadata: Metadata = {
  title: "CEO - NAHJ Technology Solutions",
  description:
    "Meet the CEO of NAHJ Technology Solutions, a visionary leader in technology innovation and excellence.",
};

export default function CEOPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Header />

      <section className="relative py-20 overflow-hidden min-h-[calc(100vh-80px)]">
        {/* Background decorative elements */}
        <div className="absolute inset-0 w-full h-full">
          {/* Gradient Blobs */}
          <div className="absolute top-0 right-0 w-[45%] h-[45%] rounded-full bg-gradient-to-l from-nahj-copper/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[45%] h-[45%] rounded-full bg-gradient-to-r from-nahj-copper/10 to-transparent blur-3xl" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(193, 127, 89, 0.1) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Floating Elements */}
          <div className="absolute top-40 left-[15%] w-20 h-20 bg-nahj-copper/5 rounded-lg -rotate-12 animate-float-slow" />
          <div className="absolute top-60 right-[20%] w-24 h-24 bg-nahj-copper/10 rounded-full animate-float-medium" />
          <div className="absolute bottom-40 left-[25%] w-16 h-16 bg-nahj-copper/5 rounded-lg rotate-12 animate-float-fast" />

          {/* Additional decorative elements */}
          <div className="absolute top-1/4 right-[10%] w-32 h-32 bg-gradient-to-br from-nahj-copper/5 to-amber-200/5 rounded-full blur-xl" />
          <div className="absolute bottom-1/4 left-[10%] w-40 h-40 bg-gradient-to-tr from-nahj-copper/5 to-amber-200/5 rounded-full blur-xl" />
        </div>

        <AnimatedCEOContent />
      </section>
    </main>
  );
}
