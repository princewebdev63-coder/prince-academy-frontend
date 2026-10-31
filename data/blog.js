// Prince Academy Blog Data
// Sample data with full article bodies, categories, authors, and metadata.

export const blogs = [
  {
    slug: "annual-day-highlights",
    title: "Annual Day highlights: a night our students will remember",
    excerpt:
      "Dance, drama and music from every class, plus the awards that made the evening special.",
    image: "/blog/blog-1.jpg",
    category: "Events",
    date: "2026-10-28",
    readTime: "6 min read",
    author: "Prince Team",
    content: [
      "The annual cultural celebration at Prince Academy Sikar witnessed an overwhelming display of talent, creativity, and student leadership. Over 2,500 students, parents, and distinguished guests gathered at our grand open-air auditorium to celebrate the milestones and memories of the academic year.",
      "The evening commenced with the traditional Saraswati Vandana and lighting of the ceremonial lamp by our Chairman and Chief Guest. Students across primary, secondary, and senior secondary wings presented captivating musical performances, folk dances of Rajasthan, and theatrical enactments highlighting social responsibility and national pride.",
      "A standout highlight of the night was the Academic & Sports Excellence Awards, where 150+ students who achieved state and national distinctions in CBSE boards, Olympiads, and Khelo India tournaments were honored with trophies and scholarships.",
      "Events like Annual Day reinforce our belief that holistic education transcends textbooks. It builds stage confidence, teamwork, and an appreciation for cultural heritage that stays with our students for life.",
    ],
  },
  {
    slug: "admissions-open-guide",
    title: "Admissions open: what parents need to know before applying",
    excerpt:
      "Eligibility, documents, important dates and the steps to complete the process without stress.",
    image: "/blog/blog-2.jpg",
    category: "Admissions",
    date: "2026-10-21",
    readTime: "5 min read",
    author: "Admissions Desk",
    content: [
      "Choosing the right school for your child is one of the most critical decisions a parent makes. At Prince Academy, we make the admission process transparent, straightforward, and supportive for both parents and prospective students.",
      "Admissions are currently open for Nursery to Class 11 (Science, Commerce, and Arts streams) for the upcoming academic session. Our campus offers both day-scholar and world-class residential boarding facilities with separate boys' and girls' hostels.",
      "Key steps to complete your application:\n1. Fill the online enquiry or application form on our website.\n2. Schedule an interactive assessment and campus tour.\n3. Complete document verification (Birth Certificate, Previous Marksheets, Transfer Certificate, and Passport Photos).\n4. Receive admission confirmation and enrollment kit.",
      "We encourage all aspiring parents to visit our 100+ acre campus in Sikar or take our 360° virtual tour to experience the academic environment and sporting infrastructure firsthand.",
    ],
  },
  {
    slug: "board-exam-preparation-tips",
    title: "Board exam preparation: a simple plan that actually works",
    excerpt:
      "Break the syllabus into weekly goals, revise smartly and keep your focus until exam day.",
    image: "/blog/blog-3.jpg",
    category: "Academics",
    date: "2026-10-14",
    readTime: "8 min read",
    author: "Academic Desk",
    content: [
      "Preparing for CBSE Class 10 and 12 Board examinations does not require 14 hours of continuous cramming; it requires a structured, consistent, and disciplined strategy.",
      "Our top-ranking faculty members and national toppers have distilled the most effective study habits into four essential pillars:",
      "1. Master NCERT First: Over 90% of board questions directly trace back to fundamental concepts, formulas, and diagrams presented in NCERT textbooks. Solve every in-text exercise and exemplar problem before turning to reference books.",
      "2. Time-Bound Previous Year Question (PYQ) Practice: Solving the last 5-10 years of CBSE board papers under strict 3-hour exam conditions trains your brain to manage exam anxiety and optimize answer writing speed.",
      "3. Active Recall and Mind Mapping: Instead of passive re-reading, create one-page formula sheets and summary mind maps for each chapter. Test yourself regularly by writing down concepts without looking.",
      "4. Prioritize Physical and Mental Wellness: Adequate 7-8 hours of sleep, proper hydration, and brief physical exercise significantly enhance memory consolidation and cognitive stamina during intense revision weeks.",
    ],
  },
  {
    slug: "sports-week-recap",
    title: "Sports week recap: races, teamwork and a few big surprises",
    excerpt:
      "Relay finals, house points and the moments that had the whole campus cheering.",
    image: "/blog/blog-4.jpg",
    category: "Campus life",
    date: "2026-10-07",
    readTime: "4 min read",
    author: "Sports Dept",
    content: [
      "The annual Inter-House Sports Week at Prince Academy concluded with electrifying energy and memorable athletic achievements across our Olympic-standard grounds.",
      "Four houses competed fiercely across track and field athletics, football, cricket, basketball, volleyball, kabaddi, and badminton. The 4x100m relay finals and the inter-house basketball championship drew roaring cheers from fellow classmates and faculty members.",
      "Beyond medals and trophies, sports week instills lifelong qualities of resilience, sportsmanship, and mental fortitude. We congratulate all participants, house captains, and sports coaches for demonstrating true athletic spirit throughout the tournament.",
    ],
  },
  {
    slug: "building-reading-habit",
    title: "How to help your child build a reading habit at home",
    excerpt:
      "Fifteen minutes a day, a small shelf and a few easy rules can change how children learn.",
    image: "/blog/blog-5.jpg",
    category: "Parenting",
    date: "2026-09-30",
    readTime: "5 min read",
    author: "Counseling Cell",
    content: [
      "In an era dominated by rapid digital screens and short-form video content, nurturing a love for reading books is one of the greatest gifts parents and educators can offer a young mind.",
      "Reading expands vocabulary, sharpens analytical reasoning, and enhances empathy. Here are practical ways to cultivate a reading culture at home:",
      "• Start with 15 minutes of uninterrupted family reading time each evening.",
      "• Create an accessible, cozy reading corner with age-appropriate storybooks, science journals, and graphic novels.",
      "• Let children choose their own reading material without judgment. Whether it's mythology, space science, or adventure fiction, interest drives habit.",
      "• Discuss stories over dinner: Ask your child what surprised them or what choice they would have made in the character's place.",
    ],
  },
];

export function getPostBySlug(slug) {
  return blogs.find((post) => post.slug === slug);
}

export function getAllPosts() {
  return blogs;
}
