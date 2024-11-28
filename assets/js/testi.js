
    const testimonials = [
  {
    author: "Mohammed Mfa",
    text: "One of the finest Doctor Jagdish Chinnappa Sir, Child Specialist, Manipal Hospital Senior Doctor (Bengaluru H.A.L Road) and Very Respected Person, We are visiting to his clinic from Langford Town Clinic since 1993 till date to koramangala Clinic.",
    image: "assets/img/800x800.png"
  },
  {
    author: "Harpreet Kaur",
    text: "Dr. Jagdish is the best paediatrician I have ever come across. My son was suffering from severe eczema and I visited many doctors in Canada but nobody could help me with his condition. I came to India and visited Dr. Jagdish and he recommended me goat milk powder and to my surprise his skin started getting better within few days of using goat milk and within a month he was eczema free and he is a happy baby now. I will always be thankful to doctor. ",
    image: "assets/img/800x800.png"
  },
  {
    author: "Shirina Pothen",
    text: "Dr.Jagdish Chinappa is one of the best Pediatrician in Bangalore I have been going to him for years now and with Dr. Chinappa you know your in the best of hands and have nothing to worry about. Recently my son needed his vaccinations and I was very reluctant to get it done with Covid but I was amazed to see the level of precautionary measures Dr. Chinappa had put in place at his clinic making it absolutely safe for kids",
    image: "assets/img/800x800.png"
  },
  {
    author: "Amit Kumar",
    text: "One of the best pediatric in Bangalore. Have been consulting for my son from last3 years.Never prescribe unnecessary medicine. Come across as an expert. Highly recommend!.",
    image: "assets/img/800x800.png"
  }
];

let currentIndex = 0;
const author = document.querySelector('.testimonial-author');
const text = document.querySelector('.testimonial-text');
const image = document.querySelector('.testimonial-image');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Function to update the testimonial content
function updateTestimonial(index) {
  author.textContent = testimonials[index].author;
  text.textContent = testimonials[index].text;
  image.src = testimonials[index].image;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Event listeners for navigation
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
});

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateTestimonial(currentIndex);
  });
});

