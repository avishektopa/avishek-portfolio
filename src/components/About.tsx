import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto" />
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Avishek Devkota</h3>
                  <p className="text-cyan-400">Statistics Graduate</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate statistics graduate with a strong foundation in data analysis and statistical modeling. 
                My journey through academia has equipped me with both theoretical knowledge and practical skills in 
                statistical computation and research methodology.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <Heart className="w-6 h-6 text-red-400 mb-2" />
                  <h4 className="font-semibold text-white">Passion</h4>
                  <p className="text-gray-400 text-sm">Cricket & Statistics</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <TrendingUp className="w-6 h-6 text-green-400 mb-2" />
                  <h4 className="font-semibold text-white">Focus</h4>
                  <p className="text-gray-400 text-sm">Data Analysis</p>
                </div>
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
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full p-2">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    <User className="w-32 h-32 text-white" />
                  </div>
                </div>
              </div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-purple-500/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;