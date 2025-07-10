import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Users, Zap } from 'lucide-react';

const Hobbies = () => {
  const cricketStats = [
    { icon: Trophy, label: "Passion", value: "Cricket", color: "text-yellow-400" },
    { icon: Target, label: "Focus", value: "Batting & Bowling", color: "text-green-400" },
    { icon: Users, label: "Team Spirit", value: "Always", color: "text-blue-400" },
    { icon: Zap, label: "Energy", value: "High", color: "text-red-400" }
  ];

  return (
    <section id="hobbies" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-900/20 via-transparent to-blue-900/20" />
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
            My Passion
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Beyond statistics and data, I find joy and energy in the game of cricket
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Trophy className="w-8 h-8 text-yellow-400" />
                Cricket Enthusiast
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-8">
                Cricket is more than just a sport to me - it's a passion that teaches discipline, 
                strategy, and teamwork. Whether I'm playing or watching, cricket brings out the 
                best analytical and strategic thinking in me, skills that complement my statistical background.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {cricketStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <Icon className={`w-6 h-6 ${stat.color} mb-2`} />
                      <h4 className="font-semibold text-white text-sm">{stat.label}</h4>
                      <p className="text-gray-400 text-xs">{stat.value}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Cricket ball animation */}
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-80 mx-auto bg-gradient-to-br from-red-600 to-red-800 rounded-full relative overflow-hidden shadow-2xl"
              >
                {/* Cricket ball seam */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-full bg-white/20 rounded-full" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center rotate-180">
                  <div className="w-2 h-full bg-white/20 rounded-full" />
                </div>
                
                {/* Cricket ball texture */}
                <div className="absolute inset-4 border-2 border-white/10 rounded-full" />
                <div className="absolute inset-8 border-2 border-white/5 rounded-full" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <Trophy className="w-16 h-16 text-white/30" />
                </div>
              </motion.div>

              {/* Orbiting elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-green-500/30 rounded-full"
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-2 border-dashed border-blue-500/30 rounded-full"
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;