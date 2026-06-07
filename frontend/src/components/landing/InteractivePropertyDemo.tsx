import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  Check,
  MapPin,
  Ruler,
  ScanLine,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type DemoPhase = "idle" | "analyzing" | "result";

const facts = [
  { label: "Khu vực", value: "Cầu Giấy", icon: MapPin },
  { label: "Diện tích", value: "90 m²", icon: Ruler },
  { label: "Tin đối chiếu", value: "222", icon: BarChart3 },
];

export function InteractivePropertyDemo() {
  const reducedMotion = useReducedMotion() ?? false;
  const timerRef = useRef<number | null>(null);
  const [phase, setPhase] = useState<DemoPhase>("idle");

  useEffect(
    () => () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const runDemo = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setPhase("analyzing");
    timerRef.current = window.setTimeout(
      () => setPhase("result"),
      reducedMotion ? 180 : 1250,
    );
  };

  return (
    <motion.div
      className={`editorial-demo editorial-demo-${phase}`}
      data-phase={phase}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0.01 : 0.6, delay: 0.16 }}
    >
      <div className="editorial-image" aria-hidden="true">
        <span className="image-caption">Hà Nội · Góc nhìn từ dữ liệu</span>
      </div>

      <button
        className="editorial-analysis-card"
        type="button"
        onClick={runDemo}
        aria-label={phase === "result" ? "Chạy lại bản định giá mẫu" : "Phân tích bất động sản mẫu"}
      >
        <div className="analysis-card-head">
          <span className="analysis-mark">
            <Building2 size={17} />
          </span>
          <div>
            <small>HỒ SƠ BẤT ĐỘNG SẢN</small>
            <strong>Nhà phố tại Cầu Giấy</strong>
          </div>
          <ArrowUpRight size={17} />
        </div>

        <div className="analysis-facts">
          {facts.map(({ label, value, icon: Icon }) => (
            <span key={label}>
              <Icon size={14} />
              <small>{label}</small>
              <b>{value}</b>
            </span>
          ))}
        </div>

        <div className="analysis-divider" />

        <AnimatePresence mode="wait">
          {phase === "idle" && (
            <motion.div
              key="idle"
              className="analysis-prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <span>
                <ScanLine size={17} /> Chạm để xem phân tích mẫu
              </span>
              <small>Mô hình, thị trường và dữ liệu đối chiếu</small>
            </motion.div>
          )}

          {phase === "analyzing" && (
            <motion.div
              key="analyzing"
              className="analysis-progress"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <span>
                <ScanLine size={17} /> Đang phân tích dữ liệu khu vực...
              </span>
              <i>
                <b />
              </i>
            </motion.div>
          )}

          {phase === "result" && (
            <motion.div
              key="result"
              className="analysis-result"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <span>
                <Check size={14} /> Giá trị dự đoán
              </span>
              <strong>20,32 tỷ VNĐ</strong>
              <small>Khoảng ước tính 18,9 – 21,7 tỷ · Chạm để chạy lại</small>
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <div className="editorial-note note-market">
        <small>Vị trí thị trường</small>
        <strong>Trong dải tham chiếu</strong>
      </div>
      <div className="editorial-note note-confidence">
        <small>Độ tin cậy</small>
        <strong>Cao</strong>
      </div>
    </motion.div>
  );
}
