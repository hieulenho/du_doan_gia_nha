import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  GitCompareArrows,
  Home,
  ScanSearch,
} from "lucide-react";

const steps = [
  {
    index: "01",
    title: "Thông tin tài sản đi vào hệ thống",
    detail: "90 m² · Cầu Giấy · giá chào 6,5 tỷ",
    icon: Home,
  },
  {
    index: "02",
    title: "AI ước tính giá trị hợp lý",
    detail: "Stacking ensemble · 20,32 tỷ VNĐ",
    icon: BrainCircuit,
  },
  {
    index: "03",
    title: "Ghép các listing tương đồng",
    detail: "222 listing phù hợp được đối chiếu",
    icon: GitCompareArrows,
  },
  {
    index: "04",
    title: "Tính điểm chất lượng giao dịch",
    detail: "Chênh lệch giá + vị trí trên thị trường",
    icon: BarChart3,
  },
  {
    index: "05",
    title: "Trả về nhận định cuối cùng",
    detail: "Mức giá đáng chú ý · 98/100",
    icon: CheckCircle2,
  },
];

export function ValuationDemo() {
  return (
    <section className="valuation-demo section-shell" id="live-demo">
      <motion.div
        className="section-intro"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <span className="section-kicker">MỘT QUY TRÌNH DỄ HIỂU</span>
        <h2>Biến thông tin bất động sản thành phân tích giá trị có cơ sở dữ liệu.</h2>
        <p>
          Một luồng phân tích thống nhất kết nối mô hình định giá, dữ liệu khu vực và
          listing tương đồng.
        </p>
      </motion.div>

      <div className="demo-layout">
        <div className="demo-timeline">
          <span className="timeline-line" aria-hidden="true" />
          {steps.map(({ index, title, detail, icon: Icon }) => (
            <article
              className="demo-step"
              key={index}
            >
              <div className="step-node">
                <Icon size={18} />
              </div>
              <div>
                <small>{index}</small>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>

        <motion.div
          className="demo-terminal"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65 }}
        >
          <div className="terminal-head">
            <span>
              <ScanSearch size={16} /> HANOINEST · BẢN PHÂN TÍCH MẪU
            </span>
            <b>LIVE</b>
          </div>
          <div className="terminal-property">
            <span>Nhà phố · Cầu Giấy</span>
            <strong>90 m²</strong>
          </div>
          <div className="terminal-value">
            <small>GIÁ TRỊ DỰ ĐOÁN</small>
            <strong>20,32 tỷ VNĐ</strong>
            <span>Khoảng ước tính từ mô hình</span>
          </div>
          <div className="terminal-grid">
            <div>
              <small>GIÁ ĐANG CHÀO</small>
              <strong>6,5 tỷ</strong>
            </div>
            <div>
              <small>TIN ĐỐI CHIẾU</small>
              <strong>222</strong>
            </div>
            <div className="terminal-score">
              <small>ĐIỂM GIAO DỊCH</small>
              <strong>98</strong>
              <span>/100</span>
            </div>
          </div>
          <div className="terminal-insight">
            <CheckCircle2 size={18} />
            <div>
              <strong>Mức giá đáng chú ý</strong>
              <span>Giá chào thấp hơn đáng kể so với ước tính của mô hình.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
