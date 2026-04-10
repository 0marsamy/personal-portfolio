'use client'

import { useState } from 'react'
import AnimatedText from "../common/AnimatedText"
import { motion } from "framer-motion"

interface CourseItem {
  date: string
  title: string
  description: string
}

// Example course data - Replace with your own education experience
const courses: CourseItem[] = [
  {
    date: "2021 - Present",
    title: "Benha University, Faculty of Engineering at Shoubra",
    description: "B.S. in Computer Science | GPA: 3.00"
  },
  {
    date: "Winter 2021",
    title: "CPE101: Computer Programming",
    description: "Variables | Control Flow | Functions"
  },
  {
    date: "Fall 2022",
    title: "CCE203: Structured Programming",
    description: "Pointers | Memory Management | Structs"
  },
  {
    date: "Winter 2023",
    title: "CCE206: Object-Oriented Programming",
    description: "Classes | Inheritance | Polymorphism"
  },
  {
    date: "Fall 2023",
    title: "CCE301: Logic Circuits",
    description: "Boolean Algebra | Combinational Logic | Sequential Logic"
  },
  {
    date: "Fall 2023",
    title: "CCE303: Algorithms and Data Structure",
    description: "Trees | Graphs | Sorting | Algorithm Analysis"
  },
  {
    date: "Winter 2024",
    title: "CCE307: Computer Organization",
    description: "CPU Design | Memory Hierarchy | Assembly"
  }
  ,
  {
    date: "Fall 2024",
    title: "CCE406: Computer Architecture",
    description: "Pipelining | Parallelism | Multicore Processors"
  },
  {
    date: "Winter 2025",
    title: "CCE412: Mobile Computing",
    description: "Cross-Platform Dev | Wireless Networks"
  },
  {
    date: "Winter 2025",
    title: "CCE413: Database systems",
    description: "Relational Models | SQL | Query Optimization"
  },
  {
    date: "Winter 2025",
    title: "CCE414: Artificial Intelligence",
    description: "Search Algorithms | Machine Learning Basics"
  },
  {
    date: "Fall 2025",
    title: "CCE504: Software Engineering",
    description: "Agile | System Design | Testing"
  },
  {
    date: "Fall 2025",
    title: "CCE534: Neural Networks",
    description: "Deep Learning | Convolutional Neural Networks | Recurrent Neural Networks | Transfer Learning"
  },
  {
    date: "Winter 2026",
    title: "CCE531: Compilers",
    description: "Lexical Analysis | Syntax Parsing | Abstract Syntax Trees | Code Generation"
  },
  {
    date: "Winter 2026",
    title: "CCE510: Digital image processing",
    description: "Image Enhancement | Spatial Filtering | Feature Extraction | Image Segmentation"
  }
]

// Usage Instructions:
// 1. Add your course information in the courses array above
// 2. Each course item contains:
//    - date: Course time
//    - title: Course name
//    - description: Course description (keywords recommended)
// 3. Timeline will automatically display based on array length
// 4. "Show More" button appears when more than 5 courses

export default function CourseTimeline() {
  const [showAll, setShowAll] = useState(false)
  const displayedCourses = showAll ? courses : courses.slice(0, 5)

  const handleCollapse = () => {
    setShowAll(false)
    const educationSection = document.getElementById('education')
    if (educationSection) {
      const yOffset = -60;
      const y = educationSection.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full">
      {/* Timeline container */}
      <div className="relative">
        {/* Timeline background line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-neutral-200 dark:bg-neutral-800 z-0" />

        {/* Timeline items */}
        {displayedCourses.map((course, index) => (
          <AnimatedText key={index}>
            <div className={`
              flex items-center gap-4 sm:gap-6 md:gap-8 mb-12 
              ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
              relative z-10
            `}>
              <div className="flex-1 text-center">
                <h3 className="
                  text-base                              /* Mobile: 16px */
                  sm:text-lg md:text-xl                 /* sm: 18px, md: 20px */
                  font-bold 
                  mb-2
                ">
                  {course.title}
                </h3>
                <p className="
                  text-xs                               /* Mobile: 12px */
                  sm:text-sm md:text-base              /* sm: 14px, md: 16px */
                  text-foreground/60 
                  mb-1
                ">
                  {course.date}
                </p>
                <p className="
                  text-xs                               /* Mobile: 12px */
                  sm:text-sm md:text-base              /* sm: 14px, md: 16px */
                  text-foreground/80
                ">
                  {course.description}
                </p>
              </div>

              <div className="relative z-20">
                <motion.div
                  className="w-3 h-3 sm:w-4 sm:h-4 bg-black dark:bg-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.2
                  }}
                />
              </div>

              <div className="flex-1" />
            </div>
          </AnimatedText>
        ))}
      </div>

      {/* Buttons outside timeline container */}
      {!showAll && courses.length > 5 && (
        <AnimatedText>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="
                text-lg
                text-neutral-600 dark:text-neutral-400
                p-4
                transition-transform duration-300
                hover:scale-110
                z-0
                flex items-center gap-2
              "
            >
              Show More
              <svg
                className="w-5 h-5 stroke-black dark:stroke-white"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </AnimatedText>
      )}

      {showAll && (
        <AnimatedText>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleCollapse}
              className="
                text-lg
                text-neutral-600 dark:text-neutral-400
                p-4
                transition-transform duration-300
                hover:scale-110
                z-0
                flex items-center gap-2
              "
            >
              Show Less
              <svg
                className="w-5 h-5 stroke-black dark:stroke-white"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <path d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </AnimatedText>
      )}
    </div>
  )
}