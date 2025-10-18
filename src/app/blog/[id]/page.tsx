'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
}

const BlogPostPage = ({ params }: { params: Promise<{ id: string }> }) => {
  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params);
  
  // Sample blog posts data - in a real app, this would come from a CMS or API
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Designing a Scalable Chat System',
      excerpt: 'A deep dive into designing a distributed chat system that can handle real-time messaging at scale, covering architecture, protocols, and data storage strategies.',
      content: `
# Designing a Scalable Chat System

Designing a chat system was one of the most insightful system design exercises I've done. At first, it sounds simple—just send and receive messages—but when you consider scale, real-time delivery, and reliability, it becomes a complex distributed problem.

## Understanding the Requirements

I began by defining the requirements: whether the app supports one-on-one or group chats, whether it's for mobile, web, or both, and what scale it should handle—something small like an MVP or a massive WhatsApp-level system. I also considered message size limits, end-to-end encryption, and whether chat history should be stored.

## High-Level Architecture

At a high level, a chat application combines stateless services such as authentication and profiles with stateful services like the real-time chat server. For communication, I compared different protocols:

- **Basic polling** (inefficient)
- **Long polling** (better, but still limited)
- **WebSockets** — the preferred solution for modern chat apps since it provides a persistent, bidirectional connection between the client and server

## Data Storage Strategy

For data storage, I used a relational database for user profiles and relationships, and a key-value store for chat messages to handle high read/write throughput efficiently. Each message has a unique, time-sortable ID for proper ordering and easy retrieval.

## Message Flow Architecture

When a user logs in, a load balancer routes the request to the backend, which authenticates the user and uses a service discovery mechanism (like Kafka or a custom registry) to connect them to the best available chat server. From there, the user establishes a WebSocket connection for real-time communication.

### One-on-One Chat
Messages flow through the sender's chat server, into a message queue, and are forwarded to the receiver's server.

### Group Chat
The message is replicated into each member's message queue.

### Online Presence
Online presence—whether a user is active, idle, or offline—is typically tracked in an in-memory store like Redis.

## Key Learnings

This project taught me how to design scalable, distributed systems that balance stateful and stateless services, handle high concurrency, and maintain real-time consistency. It also reinforced the importance of designing for scalability and reliability from the start—principles that apply far beyond chat systems.

## Conclusion

Building a chat system from scratch provides invaluable insights into distributed systems design, real-time communication protocols, and the challenges of building applications that need to scale to millions of users while maintaining reliability and performance.
      `,
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'System Design',
      featured: true,
    },
    {
      id: '2',
      title: 'Learning the BFS Algorithm for Problem Solving',
      excerpt: 'Understanding how the Breadth-First Search (BFS) algorithm helps solve shortest path and traversal problems efficiently on LeetCode.',
      content: `
# Learning the BFS Algorithm for Problem Solving

Breadth-First Search (BFS) is one of the most fundamental graph traversal algorithms — and mastering it is essential for solving many shortest path and level-based traversal problems on LeetCode. Recently, I revisited the BFS framework in depth and learned how its different implementations balance simplicity and flexibility.

## Understanding BFS

BFS explores nodes level by level, starting from a source node and expanding outward like waves. In most algorithmic problems, we're not just traversing for exploration — we're trying to find the minimum number of steps to reach a target. This is where BFS shines, since its first visit to a node guarantees the shortest distance in an unweighted graph.

## The Standard BFS Pattern

Here's the standard BFS pattern I now use in coding interviews:

\`\`\`java
int bfs(int s, int target) {
    boolean[] visited = new boolean[graph.size()];
    Queue<Integer> q = new LinkedList<>();
    q.offer(s);
    visited[s] = true;
    int step = 0;

    while (!q.isEmpty()) {
        int sz = q.size();
        for (int i = 0; i < sz; i++) {
            int cur = q.poll();
            if (cur == target) return step;
            for (int to : neighborsOf(cur)) {
                if (!visited[to]) {
                    q.offer(to);
                    visited[to] = true;
                }
            }
        }
        step++;
    }
    return -1;
}
\`\`\`

This version tracks the number of steps taken from the start node to the target node — a pattern that directly applies to common LeetCode problems like Word Ladder, Open the Lock, or Shortest Path in a Grid.

## Key Steps for BFS Problems

Through practice, I've learned that BFS problems often come down to three key steps:

### 1. Define the State
What each node represents in your problem space.

### 2. Build the Neighbors
How to expand to the next states from the current state.

### 3. Track the Level or Distance
To compute the minimum moves or steps required.

## Common LeetCode Applications

This BFS template is particularly useful for:

- **Word Ladder**: Finding shortest transformation sequence
- **Open the Lock**: Minimum moves to reach target combination
- **Shortest Path in Binary Matrix**: Grid-based shortest path problems
- **Rotting Oranges**: Level-based propagation problems
- **Binary Tree Level Order Traversal**: Tree level processing

## Real-World Applications

Mastering this template not only simplifies BFS-related questions but also helps in designing scalable graph algorithms for real-world systems:

- **Network routing**: Finding shortest paths in computer networks
- **Social network analysis**: Degree of separation between users
- **Game development**: Pathfinding and AI decision making
- **Web crawling**: Systematic exploration of web pages

## Conclusion

BFS is more than just an algorithm — it's a fundamental problem-solving approach that teaches us to think systematically about state space exploration. The key is understanding when to use BFS (unweighted graphs, shortest path problems) and how to model your problem as a graph traversal.

The template I shared has become my go-to approach for any problem that involves finding the minimum number of steps or levels, making complex algorithmic challenges much more manageable.
      `,
      date: '2025-03-10',
      readTime: '7 min read',
      category: 'LeetCode',
      featured: true,
    },
    {
      id: '3',
      title: 'Understanding Java Thread Pools for High-Performance Systems',
      excerpt: 'A comprehensive guide to Java thread pools, their key parameters, different pool types, and best practices for building scalable backend systems.',
      content: `
# Understanding Java Thread Pools for High-Performance Systems

Learning how Java thread pools work is essential for building high-performance and scalable backend systems. A thread pool manages a group of reusable threads, reducing the overhead of frequent thread creation and destruction. Its key parameters include the core pool size, maximum pool size, keep-alive time, work queue, thread factory, and rejection handler — all of which control how tasks are executed and how resources are reused.

## Key Thread Pool Parameters

Understanding these parameters is crucial for optimal performance:

### Core Pool Size
The number of threads to keep in the pool, even if they are idle.

### Maximum Pool Size
The maximum number of threads that can exist in the pool.

### Keep-Alive Time
How long excess threads stay alive when idle.

### Work Queue
The queue that holds tasks before they are executed.

### Thread Factory
Creates new threads when needed.

### Rejection Handler
Handles tasks that cannot be executed when the pool is full.

## Different Pool Types

Different pool types serve different purposes:

### Fixed Thread Pool
For stable, predictable workloads with a fixed number of threads.

\`\`\`java
ExecutorService fixedPool = Executors.newFixedThreadPool(4);
\`\`\`

### Single Thread Executor
For sequential task execution (e.g., logging).

\`\`\`java
ExecutorService singleThread = Executors.newSingleThreadExecutor();
\`\`\`

### Cached Thread Pool
For short-lived, bursty tasks that can scale dynamically.

\`\`\`java
ExecutorService cachedPool = Executors.newCachedThreadPool();
\`\`\`

### Scheduled Thread Pool
For delayed or periodic tasks.

\`\`\`java
ScheduledExecutorService scheduledPool = Executors.newScheduledThreadPool(2);
\`\`\`

## Choosing the Right Pool Size

### CPU-Bound Tasks
Usually use **CPU cores + 1** to maximize CPU utilization.

### IO-Bound Tasks
Benefit from **CPU cores × 2 + 1** to reduce idle time while waiting for I/O operations.

## Coordination with Other Concurrency Tools

Thread pools often work with other concurrency utilities:

### CountDownLatch
For coordinating multiple threads:

\`\`\`java
CountDownLatch latch = new CountDownLatch(3);
// Submit tasks
latch.await(); // Wait for all tasks to complete
\`\`\`

### Future
For handling asynchronous results:

\`\`\`java
Future<String> future = executor.submit(() -> {
    return "Task completed";
});
String result = future.get(); // Block until completion
\`\`\`

## Real-World Applications

### Concurrent API Calls
Fetching multiple API results concurrently for better performance.

### Batch Data Processing
Processing large datasets efficiently by distributing work across threads.

### Microservice Communication
Handling multiple concurrent requests in microservice architectures.

## Best Practices

1. **Choose the right pool type** for your workload
2. **Size your pools appropriately** based on task characteristics
3. **Use proper synchronization** when sharing data between threads
4. **Handle exceptions** properly in your tasks
5. **Monitor pool metrics** to optimize performance

## Conclusion

Thread pools are foundational for asynchronous programming, improving throughput and system responsiveness, especially in microservice or high-concurrency environments. Mastering thread pool concepts and choosing the right configuration can significantly impact your application's performance and scalability.

The key is understanding your workload characteristics and selecting the appropriate pool type and size to match your specific use case.
      `,
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Backend Development',
      featured: false,
    },
    {
      id: '4',
      title: 'My Journey into Full-Stack Development',
      excerpt: 'Reflecting on the challenges and rewards of becoming a full-stack developer in today\'s tech landscape.',
      content: `
# My Journey into Full-Stack Development

Becoming a full-stack developer has been one of the most rewarding experiences of my career. Let me share my journey and the lessons I've learned along the way.

## The Beginning

I started as a frontend developer, focusing primarily on React and JavaScript. While I enjoyed creating user interfaces, I always felt curious about what happened on the server side.

## Learning Backend Technologies

### Node.js and Express
My first foray into backend development was with Node.js and Express. The transition felt natural since I was already familiar with JavaScript.

### Databases
Learning databases was a game-changer. Understanding how to design schemas and write efficient queries opened up new possibilities.

### APIs and Microservices
Building RESTful APIs and understanding microservices architecture helped me see the bigger picture of web applications.

## Full-Stack Challenges

### Context Switching
One of the biggest challenges is switching between frontend and backend mindsets. Each has different concerns and patterns.

### Technology Stack Decisions
Choosing the right technologies for each part of the stack requires careful consideration of:

- Project requirements
- Team expertise
- Scalability needs
- Maintenance considerations

## Key Learnings

1. **Start Simple**: Don't try to learn everything at once
2. **Build Projects**: Hands-on experience is invaluable
3. **Understand the Full Picture**: Know how frontend and backend work together
4. **Stay Curious**: Technology evolves rapidly, keep learning

## Conclusion

The journey to becoming a full-stack developer is challenging but incredibly rewarding. It gives you a unique perspective on how web applications work and makes you a more versatile developer.

If you're considering this path, start with one technology at a time and gradually expand your knowledge. The key is consistent learning and building real projects.
      `,
      date: '2024-01-01',
      readTime: '4 min read',
      category: 'Personal',
      featured: false,
    },
  ];

  const post = blogPosts.find(p => p.id === resolvedParams.id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Blog Post */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Post Header */}
          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                {post.readTime}
              </div>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                {post.category}
              </span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
              {post.content}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPostPage;