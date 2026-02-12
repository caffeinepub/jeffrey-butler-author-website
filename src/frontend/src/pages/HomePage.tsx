import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteContent } from '@/content/siteContent';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${siteContent.hero.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">
              {siteContent.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {siteContent.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/books">
                <Button size="lg" className="text-lg px-8">
                  Explore Books <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  About the Author
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Featured Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive into tales of suspense, mystery, and the human condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {siteContent.books.map((book) => (
              <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 aspect-[2/3] relative overflow-hidden bg-muted">
                    <img
                      src={book.coverImage}
                      alt={`${book.title} cover`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="sm:w-2/3 p-6 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-2xl font-bold">{book.title}</h3>
                        <Badge variant={book.status === 'published' ? 'default' : 'secondary'}>
                          {book.statusLabel}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {book.blurb}
                      </p>
                    </div>
                    <div className="mt-6">
                      <Link to="/books">
                        <Button variant="outline" className="w-full sm:w-auto">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="container">
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Follow Jeffrey Butler's journey as he crafts new stories and brings characters to life
              </p>
              <Link to="/about">
                <Button size="lg" className="text-lg px-8">
                  Connect with Jeffrey
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
