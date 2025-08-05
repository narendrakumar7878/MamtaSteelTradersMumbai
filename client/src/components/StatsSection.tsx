import { Factory, Users, Settings, Award } from "lucide-react";

const stats = [
  {
    icon: Factory,
    value: "15+",
    label: "Years Experience"
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients"
  },
  {
    icon: Settings,
    value: "1000+",
    label: "Products"
  },
  {
    icon: Award,
    value: "ISO",
    label: "Certified Quality"
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-blue-50" data-testid="stats-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-item-${index}`}>
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2" data-testid={`stat-value-${index}`}>
                {stat.value}
              </h3>
              <p className="text-gray-600" data-testid={`stat-label-${index}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
