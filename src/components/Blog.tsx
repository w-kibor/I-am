import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    readTime: string;
    tags: string[];
    imageUrl?: string;
    link?: string;
}

const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "The Future of AI in Healthcare",
        excerpt: "Exploring how Artificial Intelligence is revolutionizing patient care, diagnosis, and treatment planning in modern medicine.",
        date: "October 15, 2025",
        author: "Wilkister Kibor",
        readTime: "5 min read",
        tags: ["AI", "Healthcare", "Technology"],
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "2",
        title: "Demystifying Machine Learning Algorithms",
        excerpt: "A beginner-friendly guide to understanding the core concepts behind popular machine learning algorithms and their applications.",
        date: "September 28, 2025",
        author: "Wilkister Kibor",
        readTime: "8 min read",
        tags: ["Machine Learning", "Data Science", "Tutorial"],
        imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "3",
        title: "Data Visualization Best Practices",
        excerpt: "Learn how to create compelling data visualizations that effectively communicate insights and tell a story with your data.",
        date: "September 10, 2025",
        author: "Wilkister Kibor",
        readTime: "6 min read",
        tags: ["Data Visualization", "Design", "Analytics"],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

export function Blog() {
    return (
        <section className="py-20 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <Button variant="ghost" asChild className="mb-8 hover:bg-transparent hover:text-primary">
                        <Link to="/" className="flex items-center gap-2 text-muted-foreground">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">My Blog</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Thoughts, tutorials, and insights on Data Science, AI, and Technology.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 flex flex-col h-full border-t-4 border-t-primary">
                            {post.imageUrl && (
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}
                            <CardHeader className="flex-1">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <span>{post.date}</span>
                                    <span className="mx-1">•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-3">
                                    {post.excerpt}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardContent className="pt-0 mt-auto">
                                <Button variant="link" className="p-0 h-auto font-semibold text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform">
                                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
