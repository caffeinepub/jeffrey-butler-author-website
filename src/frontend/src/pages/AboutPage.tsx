import { Card, CardContent } from '@/components/ui/card';
import { siteContent } from '@/content/siteContent';

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">About Jeffrey Butler</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Author, storyteller, and explorer of the human psyche
          </p>
        </div>

        {/* About Content */}
        <div className="max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-[350px_1fr] gap-0">
                {/* Author Portrait */}
                <div className="relative aspect-square md:aspect-auto bg-muted">
                  <img
                    src={siteContent.about.portraitImage}
                    alt="Jeffrey Butler"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Bio Content */}
                <div className="p-8 md:p-12 space-y-6">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {siteContent.about.bio.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {siteContent.about.highlights && siteContent.about.highlights.length > 0 && (
                    <div className="pt-6 border-t border-border">
                      <h2 className="font-serif text-2xl font-bold mb-4">Highlights</h2>
                      <ul className="space-y-2">
                        {siteContent.about.highlights.map((highlight, index) => (
                          <li key={index} className="text-muted-foreground flex items-start">
                            <span className="mr-2 text-accent">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
