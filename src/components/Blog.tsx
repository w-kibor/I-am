import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowLeft, Calendar, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MediumPost {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    categories: string[];
}

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

export function Blog() {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const mediumUsername = '@kiborwilkister';

    useEffect(() => {
        const fetchMediumPosts = async () => {
            try {
                setLoading(true);
                // Using rss2json API to easily convert the Medium RSS feed to JSON
                const rssUrl = `https://medium.com/feed/${mediumUsername}`;
                const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch blog posts');
                }

                const data = await response.json();

                if (data.status === 'ok') {
                    const formattedPosts: BlogPost[] = data.items.map((item: MediumPost) => {
                        // Extract a plain text excerpt from the HTML description/content
                        const tempDiv = document.createElement("div");
                        tempDiv.innerHTML = item.description || item.content;
                        const textContent = tempDiv.textContent || tempDiv.innerText || "";
                        // Grab the first 150 characters for the excerpt
                        const excerpt = textContent.substring(0, 150) + (textContent.length > 150 ? "..." : "");

                        // Format the date nicely
                        const date = new Date(item.pubDate.replace(' ', 'T'));
                        const formattedDate = date.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        });

                        // Calculate a rough reading time (assume 200 words per minute)
                        const wordCount = textContent.split(/\s+/).length;
                        const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

                        // Find an image in the content if there's no thumbnail directly provided
                        let imageUrl = item.thumbnail;
                        if (!imageUrl) {
                            const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
                            if (imgMatch && imgMatch[1]) {
                                imageUrl = imgMatch[1];
                            }
                        }

                        return {
                            id: item.guid,
                            title: item.title,
                            excerpt: excerpt,
                            date: formattedDate,
                            author: item.author,
                            readTime: `${readTimeMinutes} min read`,
                            tags: item.categories || [],
                            imageUrl: imageUrl,
                            link: item.link
                        };
                    });

                    setBlogPosts(formattedPosts);
                } else {
                    throw new Error('Could not parse medium feed data');
                }
            } catch (err) {
                console.error("Error fetching Medium posts:", err);
                setError("Failed to load blog posts. Please check back later.");
            } finally {
                setLoading(false);
            }
        };

        fetchMediumPosts();
    }, []);

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
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-4">
                            Insights, tutorials, and my journey in Data Science, Machine Learning, and AI.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Articles fetched from my <a href={`https://medium.com/${mediumUsername}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Medium Profile</a>.
                        </p>
                    </div>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                        <p className="text-muted-foreground">Loading articles from Medium...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-20 text-destructive bg-destructive/10 rounded-lg max-w-2xl mx-auto">
                        <p>{error}</p>
                    </div>
                ) : blogPosts.length === 0 ? (
                    <div className="text-center py-20 text-muted-foreground bg-muted/20 rounded-lg max-w-2xl mx-auto">
                        <p>No articles found. Check out my Medium profile directly!</p>
                        <Button asChild className="mt-4">
                            <a href={`https://medium.com/${mediumUsername}`} target="_blank" rel="noopener noreferrer">
                                Visit My Medium
                            </a>
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 flex flex-col h-full border-t-4 border-t-primary">
                                {post.imageUrl && (
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={post.imageUrl}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => {
                                                // Fallback if image fails to load
                                                (e.target as HTMLImageElement).style.display = 'none';
                                            }}
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
                                        {post.tags.slice(0, 4).map(tag => (
                                            <Badge key={`${post.id}-${tag}`} variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardContent className="pt-0 mt-auto">
                                    {post.link ? (
                                        <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform">
                                            Read on Medium <ArrowRight className="w-4 h-4 ml-1" />
                                        </a>
                                    ) : (
                                        <Button variant="link" className="p-0 h-auto font-semibold text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform">
                                            Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
