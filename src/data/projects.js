export const getProjects = (t) => [
  {
    title: t.projects.voluntRED?.title || 'VoluntRED',
    description: t.projects.voluntRED?.description || 'Description not available',
    image: "/projects/voluntred.png",
    projectLink: "https://voluntred.com",
    technologies: [
      { 
        name: "Next.js", 
        icon: "/technologies/nextjs.png" 
      },
  
      { 
        name: "Framer Motion", 
        icon: "/technologies/framer_motion.jpg"
      },

      { 
        name: "Shadcn/UI", 
        icon: "/technologies/shadcn.png"
      }
    ]
  },
  {
    title: t.projects.daskalos?.title || 'Proyecto Daskalos',
    description: t.projects.daskalos?.description || 'Description not available',
    image: "/projects/daskalos.png",
    projectLink: "https://proyectodaskalos.com",
    technologies: [
      { 
        name: "Next.js", 
        icon: "/technologies/nextjs.png" 
      },
    ]
  },
  {
    title: t.projects.chisteIA?.title || 'ChisteIA',
    description: t.projects.chisteIA?.description || 'Description not available',
    image: "/projects/chiste_ia.png",
    projectLink: "https://chisteia.vercel.app",
    technologies: [
      { 
        name: "Next.js", 
        icon: "/technologies/nextjs.png" 
      },
      { 
        name: "Framer Motion", 
        icon: "/technologies/framer_motion.jpg"
      },
      { 
        name: "OpenAI", 
        icon: "/technologies/open_ia.png"
      },
      { 
        name: "Shadcn/UI", 
        icon: "/technologies/shadcn.png"
      }
    ]
  },
  {
    title: t.projects.trescursivo?.title || 'Trescursivo',
    description: t.projects.trescursivo?.description || 'Description not available',
    image: "/projects/trescursivo.png",
    projectLink: "https://trescursivo.vercel.app",
    technologies: [
      { 
        name: "Next.js", 
        icon: "/technologies/nextjs.png" 
      },
   
      { 
        name: "Framer Motion", 
        icon: "/technologies/framer_motion.jpg"
      },
    
      { 
        name: "Shadcn/UI", 
        icon: "/technologies/shadcn.png"
      }]
  },
  {
    title: t.projects.vive?.title || 'Vive',
    description: t.projects.vive?.description || 'Description not available',
    image: "/projects/vive.png",
    projectLink: "https://vive.vercel.app",
    technologies: [
      { 
        name: "Next.js", 
        icon: "/technologies/nextjs.png" 
      },
   
      { 
        name: "Framer Motion", 
        icon: "/technologies/framer_motion.jpg"
      },
    
      { 
        name: "Shadcn/UI", 
        icon: "/technologies/shadcn.png"
      }
    ]
  },
  {
    title: t.projects.devTutoring?.title || 'DevTutoring',
    description: t.projects.devTutoring?.description || 'Description not available',
    image: "/projects/devtutoring.png",
    projectLink: "https://devtutoring.vercel.app",
    technologies: [
      { 
        name: "Next.js", 
        icon: "/technologies/nextjs.png" 
      },
      { 
        name: "Firebase", 
        icon: "/technologies/firebase.png"
      },
      { 
        name: "PayPal", 
        icon: "/technologies/paypal.png"
      },
      { 
        name: "Framer Motion", 
        icon: "/technologies/framer_motion.jpg"
      },
      { 
        name: "Shadcn/UI", 
        icon: "/technologies/shadcn.png"
      }

    ]
  }
];