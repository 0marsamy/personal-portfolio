'use client'

import AnimatedText from "../common/AnimatedText"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-12">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
        </AnimatedText>

        <div className="space-y-8">
          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Hi, I'm Omar, a Computer Engineering student and a Full-Stack Developer passionate about building high-impact, production-ready software. I enjoy turning complex requirements into scalable systems—from clean, dynamic interfaces and cross-platform mobile apps to robust backend services.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I have actively contributed to healthcare-focused digital solutions, including developing "Samy Clinic," a comprehensive management system for physical therapy clinics, and building an AI-driven web application for chest disease detection as my graduation project.
              </p>

            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Interests</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Beyond my work in technology, I am a competitive chess player with an official international rating from FIDE, having participated in and achieved results in various tournaments. This experience has enhanced my analytical thinking, strategic planning, and decision-making under pressure.
                In addition, I actively play football, which has strengthened my teamwork, discipline, and ability to collaborate effectively toward shared goals.              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Career Goals</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm actively seeking full-time Software Engineering opportunities (open to internships as well), where I can contribute to building scalable products, collaborate with strong teams, and push forward both engineering excellence and AI-driven innovation.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}