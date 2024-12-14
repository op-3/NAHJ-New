import { motion } from "framer-motion";

interface StatItem {
  number: string;
  label: string;
  icon: string;
}

const stats: StatItem[] = [
  { number: "10+", label: "Years Experience", icon: "📈" },
  { number: "50+", label: "Projects Completed", icon: "🎯" },
  { number: "30+", label: "Happy Clients", icon: "😊" },
  { number: "99%", label: "Success Rate", icon: "⭐" },
];

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glassmorphism p-8 rounded-[1.5rem] hover:-translate-y-2 transition-all duration-500"
        >
          <div className="text-4xl mb-4">{stat.icon}</div>
          <div className="text-5xl font-bold bg-gradient-to-r from-nahj-copper to-nahj-copper/70 bg-clip-text text-transparent mb-3">
            {stat.number}
          </div>
          <div className="text-lg text-gray-700 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
