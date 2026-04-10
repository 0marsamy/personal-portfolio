// Type definition for project details
export type ProjectDetail = {
  id: number                // Unique identifier for the project
  title: string            // Project title
  company: string          // Company name
  overview: string         // Brief project overview
  mainImage: string        // Main project image path
  link: string            // Live project URL
  github?: string         // Optional GitHub repository URL
  features: {             // List of project features
    title: string         // Feature title
    description: string   // Feature description  
    image: string | string[] // Feature image(s) path
  }[]
  techStack: {            // Technical stack groupings
    category: string      // Tech category name
    items: string[]       // List of technologies
  }[]
  achievements: {         // Quantifiable achievements
    metric: string        // Achievement metric name
    value: string         // Achievement value
    change: number        // Numerical change/improvement
  }[]
}

// Project data mapping object
export const PROJECT_DATA: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "Physiotherapy Clinic Management System (Samy Clinic)",
    company: "Samy Clinic",
    overview: "Project Overview",
    mainImage: "/project_1_overview.png",
    link: "https://samyclinic.site/",
    features: [
      {
        title: "Interactive Patient Portal",
        description: "A dedicated dashboard empowering patients to track their treatment progress and view completed sessions. It allows patients to receive personalized home exercise programs directly from their doctors and rate their sessions, ensuring continuous engagement and high-quality care.",
        image: "/feature_1_1.png"
      },
      {
        title: "Clinical Workspace for Doctors",
        description: "Provides doctors with a comprehensive toolset to design customized treatment plans, assign remote home exercises, and monitor patient progress. It also features a transparent financial dashboard for doctors to track their daily appointments, cases handled, and automated commissions.",
        image: "/feature_2_1.png",
      },
      {
        title: "Interactive Patient Portal",
        description: "Streamlines front-desk operations with a highly efficient queue management system to organize patient flow. Features lightning-fast invoicing with an AI-like 'Auto-Fetch' logic that instantly retrieves a patient's previous treatment plans, saving time and eliminating human billing errors.",
        image: "/feature_3_1.png"
      },
      {
        title: "Advanced Admin & Financial Core",
        description: "A robust backend engine featuring hierarchical billing logic (Basic vs. Sub-services), flexible payment tracking (partial and full), and automated doctor commission calculations. Fully secured with Role-Based Access Control (RBAC) to ensure sensitive clinic data is strictly protected.",
        image: "/feature_4_1.png",
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Blade", "JavaScript", "jQuery", "Bootstrap", "AJAX"]
      },
      {
        category: "Backend",
        items: ["PHP", "Laravel", "MySQL"]
      }
    ],
    achievements: [
      {
        metric: "Billing Speed Improvement",
        value: "80%",
        change: 80
      },
      {
        metric: "Billing Error Reduction",
        value: "100%",
        change: -100
      },
      {
        metric: "Front-desk Efficiency",
        value: "50%",
        change: 50
      }
    ]
  },
  2: {
    id: 2,
    title: "Magazine Management System",
    company: "NTI",
    overview: "Project Overview",
    mainImage: "/project_2.png",
    link: "https://example2.com",
    features: [
      {
        title: "Dynamic Content Management System (CMS)",
        description: "A robust administrative backend equipped with a resource-based interface, allowing authors to seamlessly publish, edit, and manage long-form articles, featured images, and topics.",
        image: "/feature_1_2.png"
      },
      {
        title: "Engaging Reader Experience & Filtering",
        description: "A responsive public-facing portal designed for optimal reading. Visitors can explore the latest publications, read detailed articles, and intuitively filter content based on dynamic categories.",
        image: "/feature_2_2.png"
      },
      {
        title: "Secure Authentication & Author Attribution",
        description: "Implemented secure login systems with protected administrative routes. The system automatically tracks and attributes published content to specific authors, ensuring transparency and accountability.",
        image: "/feature_3_2.png"
      },
      {
        title: "Optimized Media & Asset Management",
        description: "Features an efficient media handling engine that dynamically manages image uploads and storage paths, ensuring fast loading times and organized server architecture for article thumbnails.",
        image: "/feature_4_2.png"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Blade", "Bootstrap", "JavaScript", "HTML5", "CSS3"]
      },
      {
        category: "Backend",
        items: ["PHP", "Laravel", "MySQL"]
      }
    ],
    achievements: [
      {
        metric: "Publishing Efficiency", // كفاءة وسرعة نشر المقالات
        value: "70%",
        change: 70
      },
      {
        metric: "Content Organization", // كفاءة فلترة البيانات وعرضها للقارئ
        value: "100%",
        change: 100
      },
      {
        metric: "Admin Route Security", // نسبة حماية لوحة التحكم
        value: "100%",
        change: 100
      }
    ]
  }
}

// Helper function: Get project by ID
export const getProjectById = (id: number): ProjectDetail | undefined => {
  if (!Object.keys(PROJECT_DATA).length) {
    console.warn('PROJECT_DATA is empty');
    return undefined;
  }
  return PROJECT_DATA[id] || Object.values(PROJECT_DATA)[0];
}