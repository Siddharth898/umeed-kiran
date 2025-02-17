import type React from "react"

// This is a mock implementation. In a real application, you would fetch data from a database or API.

type BlogPost = {
  id: string
  title: string
  excerpt: string
  imageUrl: string
  content: React.ReactNode
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Empowering Specially Abled Children Through Art",
    excerpt: "Discover how Umeed Kiran is using art therapy to help children express themselves and develop new skills.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    content: (
      <>
        <p>
          At Umeed Kiran, we believe in the transformative power of art for specially abled children. Our art therapy
          programs have shown remarkable results in helping children express their emotions, develop fine motor skills,
          and boost their confidence.
        </p>
        <p>
          Through a variety of mediums such as painting, sculpting, and drawing, children are encouraged to explore
          their creativity in a supportive environment. Our trained therapists work closely with each child, adapting
          techniques to suit their individual needs and abilities.
        </p>
        <p>
          The impact of these programs extends beyond the art room. Parents and teachers report improved communication
          skills, increased attention spans, and a greater sense of accomplishment in the children who participate. Art
          therapy at Umid Kiran is not just about creating beautiful pieces; it's about unlocking potential and
          fostering growth in every child.
        </p>
      </>
    ),
  },
  {
    id: "2",
    title: "Inclusive Education: A Cornerstone of Umeed Kiran",
    excerpt:
      "Learn about our approach to inclusive education and how it's making a difference in the lives of specially abled children.",
    imageUrl:  "images/blog2.jpg",
    content: (
      <>
        <p>
          Inclusive education is at the heart of Umid Kiran\'s mission. We believe that every child, regardless of their
          abilities, deserves access to quality education in a supportive and inclusive environment. Our inclusive
          classrooms are designed to cater to diverse learning needs, ensuring that no child is left behind.
        </p>
        <p>
          Our teachers undergo specialized training to implement differentiated instruction techniques, allowing them to
          adapt the curriculum to suit each child\'s unique learning style and pace. We also employ assistive
          technologies and modified learning materials to make education accessible to all.
        </p>
        <p>
          The results of our inclusive approach have been inspiring. We\'ve witnessed improved social skills, higher
          self-esteem, and better academic outcomes among all students. By fostering an environment of acceptance and
          understanding, Umid Kiran is not just educating children; we\'re building a more inclusive society for the
          future.
        </p>
      </>
    ),
  },
  {
    id: "3",
    title: "Physical Therapy: Enhancing Mobility and Independence",
    excerpt:
      "Explore how our physical therapy programs are helping children overcome physical challenges and gain independence.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    content: (
      <>
        <p>
          Physical therapy plays a crucial role in enhancing the quality of life for many specially abled children at
          Umid Kiran. Our dedicated team of physical therapists works tirelessly to help children improve their
          mobility, strength, and coordination, paving the way for greater independence in their daily lives.
        </p>
        <p>
          Using a combination of exercises, specialized equipment, and play-based therapies, we create personalized
          treatment plans for each child. These plans are designed to address specific physical challenges while making
          the therapy sessions engaging and enjoyable for the children.
        </p>
        <p>
          The progress we\'ve seen in our physical therapy programs has been nothing short of remarkable. From taking
          their first steps to mastering fine motor skills, the children at Umid Kiran continue to surpass expectations
          and reach new milestones. Our physical therapy program is not just about physical improvement; it\'s about
          empowering children to explore their world with confidence and joy.
        </p>
      </>
    ),
  },
]

export async function getBlogPosts() {
  // In a real application, you would fetch this data from a database or API
  return blogPosts.map(({ id, title, excerpt, imageUrl }) => ({ id, title, excerpt, imageUrl }))
}

export async function getBlogPost(id: string) {
  // In a real application, you would fetch this data from a database or API
  return blogPosts.find((post) => post.id === id)
}

