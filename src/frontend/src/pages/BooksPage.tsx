import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteContent } from '@/content/siteContent';

export default function BooksPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Books</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the literary works of Jeffrey Butler
          </p>
        </div>

        {/* Books Grid */}
        <div className="max-w-6xl mx-auto space-y-12">
          {siteContent.books.map((book) => (
            <Card key={book.id} className="overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Book Cover */}
                <div className="relative aspect-[2/3] md:aspect-auto bg-muted">
                  <img
                    src={book.coverImage}
                    alt={`${book.title} cover`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Book Details */}
                <div className="flex flex-col">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="font-serif text-4xl">{book.title}</CardTitle>
                      <Badge 
                        variant={book.status === 'published' ? 'default' : 'secondary'}
                        className="text-sm px-3 py-1 shrink-0"
                      >
                        {book.statusLabel}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-6">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {book.blurb}
                      </p>
                    </div>

                    {book.extendedDescription && (
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="text-muted-foreground leading-relaxed">
                          {book.extendedDescription}
                        </p>
                      </div>
                    )}

                    {book.status === 'published' && (
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          Available now at major retailers
                        </p>
                      </div>
                    )}

                    {book.status === 'in-progress' && (
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground italic">
                          Currently in development. Stay tuned for updates.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
