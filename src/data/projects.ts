import { Monitor, Shield, TrendingUp, Globe, ShoppingBag, BookOpen, ChefHat, Truck, GraduationCap, Compass, AirVent } from 'lucide-react';

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    metrics: string;
    icon: any;
}

export const projects: Project[] = [
    {
        id: "12",
        title: "SkyCool",
        description: "Modern corporate website for HVAC and air conditioning systems and services",
        longDescription: "SkyCool is a corporate website developed for an HVAC and air conditioning business. The platform showcases specialized heating, cooling, and air ventilation services, equipment maintenance solutions, and seamless consultation requests for residential and commercial clients.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        tags: ["React", "TypeScript", "HVAC", "Air Conditioning", "Tailwind CSS"],
        githubUrl: "https://github.com/w-kibor/skycool",
        liveUrl: "https://skycool-d9za.onrender.com",
        metrics: "HVAC & Climate Control",
        icon: AirVent
    },
    {
        id: "11",
        title: "Kepa Mara Safaris",
        description: "Bespoke luxury safari and tour booking platform across Kenya's premier destinations",
        longDescription: "Kepa Mara Safaris is a luxury tour and travel platform dedicated to curating tailor-made Kenyan safari experiences. Featuring custom itineraries across the Maasai Mara, Amboseli, Samburu, and Diani Beach, the platform connects travelers with authentic wildlife adventures and elegant hospitality.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        tags: ["Tourism", "Travel", "Kenya Safaris", "Booking", "Web Development"],
        liveUrl: "https://kepamarasafaris.com",
        metrics: "Luxury Safari Tours",
        icon: Compass
    },
    {
        id: "10",
        title: "E-Flex",
        description: "Interactive e-learning and digital education platform for students and educators",
        longDescription: "E-Flex is a digital learning platform designed to streamline course delivery, academic stream management, assignments, and interactive quizzes. It connects students and teachers with real-time educational resources, progress tracking, and structured coursework.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        tags: ["React", "TypeScript", "E-Learning", "EdTech", "Tailwind CSS", "Vercel"],
        liveUrl: "https://e-flex-zeta.vercel.app/",
        metrics: "E-Learning Platform",
        icon: GraduationCap
    },
    {
        id: "9",
        title: "SwiftDrop",
        description: "Errands platform connecting users with trained runners for personal shopping and deliveries",
        longDescription: "SwiftDrop is an errands platform that connects individuals and businesses with trained runners. From personal shopping and parcel deliveries to business errands, SwiftDrop provides a fast, reliable solution to get everyday tasks done.",
        image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        tags: ["React", "TypeScript", "Errands", "Logistics", "Vercel"],
        liveUrl: "https://swiftdrop2-kx5p.vercel.app/",
        metrics: "Errands Platform",
        icon: Truck
    },
    {
        id: "8",
        title: "Claudia",
        description: "AI-powered cooking companion for recipes and kitchen management",
        longDescription: "Claudia is a personal AI-powered cooking companion designed to help users discover recipes, manage kitchen inventory, and get inspired with tailored meal ideas. The app combines a clean cooking workflow with AI-assisted inspiration to make everyday meal planning more practical and engaging.",
        image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        tags: ["React", "TypeScript", "AI", "Recipes", "Kitchen Management", "Vercel"],
        liveUrl: "https://claudia-sand.vercel.app/",
        metrics: "AI Cooking Companion",
        icon: ChefHat
    },
    {
        id: "1",
        title: "Power Outage Prediction Dashboard",
        description: "Predictive analytics dashboard for power outage forecasting",
        longDescription: "Built an intelligent dashboard that predicts power outages with 85% accuracy using advanced machine learning algorithms. The system processes historical power grid data, weather patterns, and infrastructure metrics to provide early warning alerts for potential outages.",
        image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU4MzQ4MDMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["Python", "scikit-learn", "Flask", "React", "Pandas", "Machine Learning"],
        githubUrl: "https://github.com/wilkister-kibor/power-outage-prediction",
        liveUrl: "https://power-outage-prediction-ab1ben5kd-wilkister-kibors-projects.vercel.app/",
        metrics: "≈85% Accuracy",
        icon: Monitor
    },
    {
        id: "2",
        title: "Cyber Security Threats Insights",
        description: "Comprehensive analysis of cybersecurity incident patterns",
        longDescription: "Conducted in-depth analysis of over 10,000 cyber security incidents to identify threat patterns, attack vectors, and vulnerability trends. The project provides actionable insights for improving organizational security posture and incident response strategies.",
        image: "https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NTgzNzk0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["Python", "pandas", "Matplotlib", "Data Analysis", "Cybersecurity"],
        githubUrl: "https://github.com/wilkister-kibor/cyber-threats-analysis",
        metrics: "10,000+ Incidents Analyzed",
        icon: Shield
    },
    {
        id: "3",
        title: "Cyber Impact Classifier",
        description: "ML model for predicting cybersecurity incident severity",
        longDescription: "Developed a machine learning classifier that predicts the impact level of cybersecurity incidents with an F1-score of 0.82. The model helps security teams prioritize incident response and allocate resources more effectively.",
        image: "https://images.unsplash.com/photo-1646583288948-24548aedffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjbGFzc2lmaWNhdGlvbnxlbnwxfHx8fDE3NTgzNzk0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["scikit-learn", "Python", "Machine Learning", "Classification", "Feature Engineering"],
        githubUrl: "https://github.com/wilkister-kibor/cyber-impact-classifier",
        metrics: "F1-score: 0.82",
        icon: TrendingUp
    },
    {
        id: "4",
        title: "Africa News Web Scraper",
        description: "Scalable web scraping system for African news content",
        longDescription: "Built a robust and scalable web scraping system that collects over 5,000 African news articles weekly from multiple sources. The system includes data cleaning, deduplication, and automated categorization to provide comprehensive news coverage across the continent.",
        image: "https://images.unsplash.com/photo-1583932334951-9a74f88ea6aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBzY3JhcGluZyUyMG5ld3N8ZW58MXx8fHwxNzU4Mzc5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["Python", "BeautifulSoup", "pandas", "Web Scraping", "Data Processing"],
        githubUrl: "https://github.com/wilkister-kibor/africa-news-scraper",
        metrics: "5,000+ Articles/Week",
        icon: Globe
    },
    {
        id: "5",
        title: "The Artisan Haven",
        description: "Cozy e-commerce website for handcrafted mats and luxury carpets",
        longDescription: "The Artisan Haven is a cozy and elegant e-commerce website for discovering and purchasing handcrafted mats, luxury carpets, and timeless antique pieces. The platform combines warm aesthetics with modern functionality, offering users a seamless shopping experience that feels both homely and high-end.",
        image: "/images/artisan-haven.png",
        tags: ["React", "E-commerce", "TypeScript", "Tailwind CSS", "Responsive Design"],
        liveUrl: "https://the-artisan-haven.vercel.app/",
        metrics: "Full E-commerce Platform",
        icon: ShoppingBag
    },
    {
        id: "6",
        title: "Tutor Trove",
        description: "Comprehensive tutoring platform connecting students with educators",
        longDescription: "Tutor Trove is a comprehensive tutoring website designed to connect students with qualified educators. The platform provides an intuitive interface for browsing tutors, scheduling sessions, and managing educational progress. Features include real-time communication, session scheduling, progress tracking, and a robust review system to ensure quality education delivery.",
        image: "/images/projects/tutor-trove.png",
        tags: ["React", "Education Tech", "TypeScript", "Tailwind CSS", "Scheduling"],
        liveUrl: "https://tutoring-website-neon.vercel.app/",
        metrics: "Tutoring Platform",
        icon: BookOpen
    },
    {
        id: "7",
        title: "Own Kenya",
        description: "Redefining luxury real estate in East Africa.",
        longDescription: "Own Kenya is an AI powered real estate platform that connects sophisticated buyers with Kenya's most prestigious residences. The experience blends curated listings, smart discovery, and a refined visual presentation tailored for luxury property search.",
        image: "/images/Own%20Kenya.png",
        tags: ["React", "AI", "Real Estate", "TypeScript", "Vite"],
        liveUrl: "https://own-kenya.vercel.app/",
        metrics: "Luxury Real Estate",
        icon: Globe
    }
];
