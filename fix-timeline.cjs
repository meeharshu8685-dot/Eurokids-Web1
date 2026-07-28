const fs = require('fs');
const filePath = 'src/pages/AdmissionsPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const oldTimeline = `              <div className="space-y-12">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-6 lg:gap-8"
                  >
                    <div className="text-4xl font-serif text-[#F4B400] font-light">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl text-[#1F3A5F] mb-3">{step.title}</h3>
                      <p className="text-[#6E6E6E] font-sans font-light text-lg leading-relaxed max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>`;

const newTimeline = `              <div className="relative border-l-2 border-[#ECE6DE] ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[3.1rem] md:-left-[3.6rem] w-12 h-12 bg-white border-2 border-[#ECE6DE] rounded-full flex items-center justify-center font-serif text-xl text-[#F4B400] z-10 shadow-sm">
                      {index + 1}
                    </div>
                    <div className="bg-white p-6 md:p-8 rounded-[24px] border border-[#ECE6DE] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <h3 className="text-2xl text-[#1F3A5F] mb-3">{step.title}</h3>
                      <p className="text-[#6E6E6E] font-sans font-light text-lg leading-relaxed max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>`;

content = content.replace(oldTimeline, newTimeline);

fs.writeFileSync(filePath, content);
