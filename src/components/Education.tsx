import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      level: "Master's in Statistics",
      institution: "Central Department of Tribhuvan University",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      description: "Advanced statistical methods and research"
    },
    {
      level: "Bachelor's in Statistics",
      institution: "Trichandra Multiple Campus",
      icon: GraduationCap,
      color: "from-cyan-500 to-blue-500",
      description: "Statistical analysis and mathematical foundations"
    },
    {
      level: "Higher Secondary (+2)",
      institution: "Padmodaya Public Model Higher Secondary School",
      icon: BookOpen,
      color: "from-green-500 to-teal-500",
      description: "Science stream with mathematics focus"
    },
    {
      level: "School Leaving Certificate (SLC)",
      institution: "Deepshika Awashiya School",
      icon: Users,
      color: "from-orange-500 to-red-500",
      description: "Foundation education and academic excellence"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Educational Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My academic path through statistics and mathematical sciences
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 h-full rounded-full" />

          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.level}</h3>
                        <p className="text-gray-300 text-sm">{edu.institution}</p>
                      </div>
                    </div>
                    <p className="text-gray-400">{edu.description}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-cyan-500 shadow-lg z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;