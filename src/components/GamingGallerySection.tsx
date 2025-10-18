'use client';

import { motion } from 'framer-motion';
import Card from './Card';

interface GameImage {
  id: string;
  title: string;
  game: string;
  description: string;
  image: string;
}

const GamingGallerySection = () => {
  const gameImages: GameImage[] = [
    {
      id: '1',
      title: 'The Witcher 3',
      game: ' ',
      description: 'One of the most intense boss battles I\'ve experienced',
      image: '/img1.JPG',
    },
    {
      id: '2',
      title: 'Gran Turismo 7',
      game: ' ',
      description: 'Stunning landscapes and beautifully detailed cars.',
      image: '/img2.JPG',
    },
    {
      id: '3',
      title: 'Uncharted 4',
      game: ' ',
      description: 'A beautifully lit night scene that draws you into Nathan’s childhood memories.',
      image: '/img3.JPG',
    },
    {
      id: '4',
      title: 'God of War Ragnarok',
      game: ' ',
      description: 'A stunning moment when Kratos and Atreus gain the power to change day into night.',
      image: '/img8.JPG',
    },
    {
      id: '5',
      title: 'Final Fantacy 16',
      game: ' ',
      description: 'A stunning scene filled with magic and wonder.',
      image: '/img5.JPG',
    },
    {
      id: '6',
      title: 'Elden Ring',
      game: ' ',
      description: 'A powerful ending scene that inspires deep reflection beyond Elden Ring’s conclusion.',
      image: '/img6.JPG',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="gaming-gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
                    className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Gaming Adventures
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            When I'm not coding, you'll find me exploring virtual worlds. 
            Here are some of my favorite moments from the games I've played.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {gameImages.map((gameImage) => (
            <motion.div
              key={gameImage.id}
              variants={itemVariants}
              className="group h-full"
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  {gameImage.image ? (
                    <img
                      src={gameImage.image}
                      alt={gameImage.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">
                        {gameImage.game}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-foreground mb-1">
                    {gameImage.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-2">
                    {gameImage.game}
                  </p>
                  <p className="text-sm text-muted-foreground flex-1">
                    {gameImage.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground italic">
            "Gaming taught me problem-solving, strategic thinking, and the importance of persistence - 
            skills that translate perfectly into software development."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GamingGallerySection;
