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
    imageUrl: "/images/blog1.jpg",
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
    imageUrl: "/images/blog2.jpeg",
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
      "Explore how our physical therapy programs are helping children overcome physical challenges and gain Confidence.",
    imageUrl: "/images/blog3.jpg",
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
          The progress we 've seen in our physical therapy programs has been nothing short of remarkable. From taking
          their first steps to mastering fine motor skills, the children at Umid Kiran continue to surpass expectations
          and reach new milestones. Our physical therapy program is not just about physical improvement; it\'s about
          empowering children to explore their world with confidence and joy.
        </p>
      </>
    ),
  },

  {
    id: "4",
    title: "Physiotherapy & Speech Therapy: Enhancing Mobility & Communication",
    excerpt: "For many specially abled children, the ability to move freely and communicate effectively does not come naturally",
    imageUrl: "/images/blog4.jpg",
    content: (
      <>
        <p>
          Physiotherapy plays a crucial role in helping children with disabilities gain control over their movements. At Umeed Kiran, trained therapists use specialized exercises and equipment to strengthen muscles, improve coordination, and enhance mobility. Activities such as stretching, balance training, and assisted walking are tailored to each child's specific needs.
        </p>
        <p>
          One inspiring example is a young girl who had trouble walking independently due to a neurological condition. After months of physiotherapy, she not only gained the strength to walk but also became confident enough to participate in school activities.
        </p>
        <p>
          Physiotherapy and speech therapy are essential components of rehabilitation for specially-abled children. Umeed Kiran remains dedicated to providing these life-changing therapies, helping children break barriers and achieve milestones that once seemed impossible. The organization encourages parents, caregivers, and society at large to recognize the importance of these therapies and support initiatives that make them accessible to all children in need.


        </p>
      </>
    ),



  },

  {
    id: "5",
    title: "Art & Music Therapy: A Creative Path to Healing",
    excerpt: "Art and music have long been celebrated for their therapeutic properties, offering a powerful means of communication and self-expression",
    imageUrl: "/images/blog5.jpg",
    content: (
      <>
        <p>
          Art therapy provides children with disabilities an opportunity to express their emotions and thoughts in a non-verbal and stress-free environment. Through painting, sculpting, and crafting, children develop fine motor skills, hand-eye coordination, and sensory integration. At Umeed Kiran, professional therapists guide children through structured activities, ensuring they benefit both psychologically and physically from each session. Art therapy has been shown to reduce anxiety, improve focus, and boost self-esteem in children who struggle with social interactions.        </p>
        <p>
          Parents and teachers have witnessed remarkable changes in children who participate in art and music therapy. One such example is a young boy at Umeed Kiran who had difficulty expressing himself verbally but discovered a love for painting.        </p>
        <p>
          Art and music therapy are more than just recreational activities; they are transformative tools that empower specially-abled children to express, learn, and grow. Umeed Kiran remains committed to expanding these programs, ensuring that every child has access to creative therapies that enhance their quality of life. The organization invites the community to support these initiatives, whether through donations, volunteering, or simply appreciating the talents of these children.

        </p>
      </>
    ),
  },

  {
    id: "6",
    title: "The Journey of Umeed Kiran: A Decade of Empowerment",
    excerpt: "For the past ten years, Umeed Kiran has been a beacon of hope for specially-abled children, providing them with the tools, resources, and care necessary for their growth and development",
    imageUrl: "/images/blog6.jpg",
    content: (
      <>
        <p>
          Founded in 2014 by Archana Srivastava, Umeed Kiran has transformed into a well-established rehabilitation center, offering a wide range of therapies and programs aimed at holistic development. The journey, however, has not been without its challenges. From raising awareness about disabilities to ensuring quality education and therapy, the organization has continuously worked towards a society that embraces inclusion and equal opportunities.        </p>
        <p>
          The journey of Umeed Kiran began with a simple but profound vision: to create a safe and nurturing space for specially-abled children. However, the initial years were met with several hurdles. There was limited awareness about the importance of specialized therapy and education for children with disabilities        </p>
        <p>
          Over the years, Umeed Kiran has impacted hundreds of lives. Children who once struggled to communicate have now found their voice through speech therapy. Others, who faced mobility challenges, have gained independence with the help of physiotherapy. The organization has provided not only medical and therapeutic support but also emotional and psychological encouragement to both the children and their families. From participating in cultural programs to excelling in academic and vocational training, these children have showcased their immense potential, proving that disabilities do not define their capabilities.

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

