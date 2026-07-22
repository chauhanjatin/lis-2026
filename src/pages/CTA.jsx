import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const rotatingWords = ["Websites", "Ui-UX"];

export default function CTA({
  title,
  buttonText = "Let's work together!",
  to = "/contact",
  className = "mt-[40px] md:mt-[60px] mb-[80px] md:mb-[120px] lg:mb-[140px]",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (title) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setVisible(true);
      }, 280);
    }, 2600);

    return () => clearInterval(interval);
  }, [title]);

  return (
    <section className={className}>
      <div className="containerX mx-auto">
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[24px] border border-white/10 bg-[#181818] min-h-[280px] md:min-h-[280px] lg:min-h-[300px] flex items-center justify-center px-6 py-14 md:px-12 md:py-16">
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-[55%] w-[95%] md:w-[85%] aspect-square rounded-full opacity-95"
            style={{
              background:
                "radial-gradient(circle at center, transparent 48%, #1db0be1c  62%, rgba(37,74,140,0.35) 74%, transparent 82%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col items-center text-center max-w-[900px]">
            <h2 className="text-white text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.25] tracking-[-0.02em]">
              {title ? (
                title
              ) : (
                <>
                  We design and build high-performing{" "}
                  <span className="inline-grid align-bottom text-left">
                    {/* Reserve width for longest word */}
                    <span className="invisible col-start-1 row-start-1 whitespace-nowrap w-[200px] text-[#1db0be]">
                      Websites
                    </span>
                    <span
                      className={`col-start-1 row-start-1 w-[180px] text-center whitespace-nowrap transition-all duration-300 ease-out text-[#1db0be] ${
                        visible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2"
                      }`}
                    >
                      {rotatingWords[wordIndex]}
                    </span>
                  </span>{" "}
                  that grow your business
                </>
              )}
            </h2>
            <Link
              to={to}
              className="mt-7 md:mt-9 inline-flex items-center gap-2 bg-white text-[#0a0a0a] text-[14px] md:text-[15px] font-medium px-5 py-2.5 md:px-6 md:py-3 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:bg-white/90 transition">
              {buttonText}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}