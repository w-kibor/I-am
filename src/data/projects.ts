import { Monitor, Shield, TrendingUp, Globe } from 'lucide-react';

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
        id: "1",
        title: "Power Outage Prediction Dashboard",
        description: "Predictive analytics dashboard for power outage forecasting",
        longDescription: "Built an intelligent dashboard that predicts power outages with 85% accuracy using advanced machine learning algorithms. The system processes historical power grid data, weather patterns, and infrastructure metrics to provide early warning alerts for potential outages.",
        image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU4MzQ4MDMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["Python", "scikit-learn", "Flask", "React", "Pandas", "Machine Learning"],
        githubUrl: "https://github.com/wilkister-kibor/power-outage-prediction",
        liveUrl: "https://power-outage-dashboard.example.com",
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
    }
];
