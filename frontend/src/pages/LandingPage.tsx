import { motion } from "framer-motion";
import { ArrowUpRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { FeatureGrid } from "../components/landing/FeatureGrid";
import { HeroSection } from "../components/landing/HeroSection";
import { ValuationDemo } from "../components/landing/ValuationDemo";

export function LandingPage() {
  return (
    <motion.div
      className="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <header className="landing-nav">
        <Link className="landing-brand" to="/" aria-label="HanoiNest">
          <span>
            <Building2 size={18} />
          </span>
          <b>HanoiNest</b>
        </Link>
        <nav aria-label="Điều hướng chính">
          <a href="#live-demo">Demo</a>
          <a href="#technology">Phương pháp</a>
          <Link className="nav-launch" to="/dashboard">
            Bắt đầu định giá <ArrowUpRight size={16} />
          </Link>
        </nav>
      </header>

      <main>
        <HeroSection />
        <ValuationDemo />
        <div id="technology">
          <FeatureGrid />
        </div>
        <section className="landing-cta section-shell">
          <div>
            <span className="section-kicker">BẮT ĐẦU PHÂN TÍCH</span>
            <h2>Biến thông tin bất động sản thành phân tích giá trị có cơ sở dữ liệu.</h2>
          </div>
          <Link className="button-primary" to="/dashboard">
            Bắt đầu định giá <ArrowUpRight size={18} />
          </Link>
        </section>
      </main>

      <footer className="landing-footer">
        <span>HanoiNest · PHÂN TÍCH BẤT ĐỘNG SẢN HÀ NỘI</span>
        <span>Dữ liệu listing Hà Nội · Snapshot 06/2025</span>
      </footer>
    </motion.div>
  );
}
