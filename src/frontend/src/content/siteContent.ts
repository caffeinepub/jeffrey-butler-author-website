export const siteContent = {
  hero: {
    title: 'Jeffrey Butler',
    subtitle: 'Author of psychological thrillers that explore the depths of human nature',
    backgroundImage: '/assets/generated/hero-bg.dim_1920x1080.png',
  },
  books: [
    {
      id: 'torment',
      title: 'Torment',
      status: 'published' as const,
      statusLabel: 'Published',
      coverImage: '/assets/generated/book-torment-cover.dim_1600x2560.png',
      blurb: 'A gripping psychological thriller that delves into the darkest corners of the human mind. When a series of mysterious events unfold, nothing is as it seems.',
      extendedDescription: 'Torment weaves a complex narrative of suspense and intrigue, challenging readers to question reality itself. With masterful pacing and unforgettable characters, this debut novel establishes Jeffrey Butler as a fresh voice in contemporary thriller fiction.',
    },
    {
      id: 'coming-soon',
      title: 'Untitled Second Novel',
      status: 'in-progress' as const,
      statusLabel: 'In Progress',
      coverImage: '/assets/generated/book-coming-soon-cover.dim_1600x2560.png',
      blurb: 'The highly anticipated follow-up is currently in development. A new story that promises to push boundaries and captivate readers with its intricate plot and compelling characters.',
      extendedDescription: 'Building on the success of Torment, this upcoming work explores new territory while maintaining the psychological depth and narrative tension that readers have come to expect. More details to be revealed soon.',
    },
  ],
  about: {
    portraitImage: '/assets/Jeffrey Butler profile image.png',
    bio: [
      'Jeffrey Butler is an emerging voice in psychological thriller fiction, known for crafting narratives that challenge readers to question their perceptions of reality. With a keen eye for detail and a deep understanding of human psychology, his stories explore the complex motivations that drive people to their breaking points.',
      'His debut novel, Torment, has captivated readers with its intricate plot and unforgettable characters. Drawing inspiration from classic thriller writers while bringing a fresh, contemporary perspective, Jeffrey creates stories that linger long after the final page.',
      'When not writing, Jeffrey can be found exploring the landscapes that inspire his work, studying human behavior, and crafting the next tale that will keep readers up at night. He is currently working on his second novel, which promises to deliver the same intensity and psychological depth that made Torment a compelling read.',
    ],
    highlights: [
      'Author of the psychological thriller "Torment"',
      'Currently working on second novel',
      'Specializes in psychological suspense and complex character studies',
      'Explores themes of perception, reality, and human nature',
    ],
  },
};
