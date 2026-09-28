/* ==================================================
   PZ STUDY
   CLEAN FULL JAVASCRIPT
================================================== */


/* ==================================================
   SEMESTER DATA
================================================== */

const semesters = [

  {
    id: "semester-1",
    name: "SEMESTER 1",
    papers: ["DSC 1"]
  },

  {
    id: "semester-2",
    name: "SEMESTER 2",
    papers: ["DSC 2"]
  },

  {
    id: "semester-3",
    name: "SEMESTER 3",
    papers: ["DSC 3", "DSC 4"]
  },

  {
    id: "semester-4",
    name: "SEMESTER 4",
    papers: [
      "DSC 5",
      "DSC 6",
      "DSC 7",
      "DSC 8"
    ]
  },

  {
    id: "semester-5",
    name: "SEMESTER 5",
    papers: [
      "DSC 9",
      "DSC 10",
      "DSC 11",
      "DSC 12"
    ]
  },

  {
    id: "semester-6",
    name: "SEMESTER 6",
    papers: [
      "DSC 13",
      "DSC 14",
      "DSC 15"
    ]
  },

  {
    id: "semester-7",
    name: "SEMESTER 7",
    papers: [
      "DSC 16",
      "DSC 17",
      "DSC 18",
      "DSC 19"
    ]
  },

  {
    id: "semester-8",
    name: "SEMESTER 8",
    papers: [
      "DSC 20",
      "DSC 21",
      "DSC 22"
    ]
  }

];


/* ==================================================
   SYLLABUS DATA
================================================== */

const syllabusData = {

  "DSC 1": {

    "Poetry": [
      {
        title: "Sonnet 73",
        author: "William Shakespeare"
      },
      {
        title: "The Sun Rising",
        author: "John Donne"
      },
      {
        title: "To Autumn",
        author: "John Keats"
      },
      {
        title: "The Second Coming",
        author: "W. B. Yeats"
      },
      {
        title: "Crow’s Fall",
        author: "Ted Hughes"
      }
    ]

  },


  "DSC 2": {

    "Prose": [
      {
        title: "Of Studies",
        author: "Francis Bacon"
      },
      {
        title: "Dream Children: A Reverie",
        author: "Charles Lamb"
      },
      {
        title: "Araby",
        author: "James Joyce"
      },
      {
        title: "Shooting an Elephant",
        author: "George Orwell"
      },
      {
        title: "A Temporary Matter",
        author: "Jhumpa Lahiri"
      }
    ]

  },


  "DSC 3": {

    "Drama": [
      {
        title: "The Merchant of Venice",
        author: "William Shakespeare"
      },
      {
        title: "Arms and the Man",
        author: "George Bernard Shaw"
      },
      {
        title: "Riders to the Sea",
        author: "J. M. Synge"
      }
    ]

  },


  "DSC 4": {

    "Poetry": [
      {
        title: "After Apple-Picking",
        author: "Robert Frost"
      },
      {
        title: "O Captain! My Captain!",
        author: "Walt Whitman"
      },
      {
        title: "Daddy",
        author: "Sylvia Plath"
      },
      {
        title: "Harlem",
        author: "Langston Hughes"
      }
    ],

    "Novel": [
      {
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway"
      }
    ],

    "Stories": [
      {
        title: "The Purloined Letter",
        author: "Edgar Allan Poe"
      },
      {
        title: "Dry September",
        author: "William Faulkner"
      }
    ],

    "Drama": [
      {
        title: "Death of a Salesman",
        author: "Arthur Miller"
      }
    ]

  },


  "DSC 5": {

    "Popular Literature": [
      {
        title: "Through the Looking Glass",
        author: "Lewis Carroll"
      },
      {
        title: "Abol Tabol",
        author: "Sukumar Ray"
      },
      {
        title: "Tintin in Tibet",
        author: "Hergé"
      },
      {
        title: "The Hound of the Baskervilles",
        author: "Arthur Conan Doyle"
      }
    ]

  },


  "DSC 6": {

    "Stories": [
      {
        title: "A Bride for the Sahib",
        author: "Khushwant Singh"
      },
      {
        title: "Another Community",
        author: "R. K. Narayan"
      }
    ],

    "Poetry": [
      {
        title: "To a Lady",
        author: "Michael Madhusudan Dutt"
      },
      {
        title: "Our Casuarina Tree",
        author: "Toru Dutt"
      },
      {
        title: "Enterprise",
        author: "Nissim Ezekiel"
      }
    ],

    "Novel": [
      {
        title: "Rajmohan’s Wife",
        author: "Bankimchandra Chattopadhyay"
      }
    ]

  },


  "DSC 7": {

    "Poetry": [
      {
        title: "One Day I Wrote Her Name",
        author: "Edmund Spenser"
      },
      {
        title: "To His Coy Mistress",
        author: "Andrew Marvell"
      },
      {
        title: "Paradise Lost, Book I",
        author: "John Milton"
      },
      {
        title: "The Rape of the Lock, Canto I–III",
        author: "Alexander Pope"
      },
      {
        title: "The Lamb",
        author: "William Blake"
      },
      {
        title: "The Tyger",
        author: "William Blake"
      }
    ]

  },


  "DSC 8": {

    "Drama": [
      {
        title: "Macbeth",
        author: "William Shakespeare"
      },
      {
        title: "The Way of the World",
        author: "William Congreve"
      },
      {
        title: "The Importance of Being Earnest",
        author: "Oscar Wilde"
      },
      {
        title: "Look Back in Anger",
        author: "John Osborne"
      }
    ]

  },


  "DSC 9": {

    "Novel": [
      {
        title: "Pride and Prejudice",
        author: "Jane Austen"
      },
      {
        title: "Hard Times",
        author: "Charles Dickens"
      },
      {
        title: "The Mayor of Casterbridge",
        author: "Thomas Hardy"
      }
    ],

    "Prose": [
      {
        title: "The Hero as Poet",
        author: "Thomas Carlyle"
      }
    ]

  },


  "DSC 10": {

    "Poetry": [
      {
        title: "Tintern Abbey",
        author: "William Wordsworth"
      },
      {
        title: "Kubla Khan",
        author: "Samuel Taylor Coleridge"
      },
      {
        title: "Ode to the West Wind",
        author: "Percy Bysshe Shelley"
      },
      {
        title: "Ulysses",
        author: "Alfred Lord Tennyson"
      },
      {
        title: "Porphyria’s Lover",
        author: "Robert Browning"
      },
      {
        title: "Dover Beach",
        author: "Matthew Arnold"
      },
      {
        title: "Preludes",
        author: "T. S. Eliot"
      },
      {
        title: "Cut Grass",
        author: "Philip Larkin"
      }
    ]

  },


  "DSC 11": {

    "Prose": [
      {
        title: "A Passage to India",
        author: "E. M. Forster"
      },
      {
        title: "To the Lighthouse",
        author: "Virginia Woolf"
      },
      {
        title: "The Fly",
        author: "Katherine Mansfield"
      },
      {
        title: "The Lagoon",
        author: "Joseph Conrad"
      }
    ]

  },


  "DSC 12": {

    "Literary Theory": [
      {
        title: "Poetics",
        author: "Aristotle"
      },
      {
        title: "Preface to Lyrical Ballads",
        author: "William Wordsworth"
      },
      {
        title: "Biographia Literaria",
        author: "Samuel Taylor Coleridge"
      },
      {
        title: "A Defence of Poetry",
        author: "Percy Bysshe Shelley"
      }
    ]

  },


  "DSC 13": {

    "Indian Writing in English": [
      {
        title: "Waiting for the Mahatma",
        author: "R. K. Narayan"
      },
      {
        title: "The Room on the Roof",
        author: "Ruskin Bond"
      },
      {
        title: "To India, My Native Land",
        author: "H. L. V. Derozio"
      },
      {
        title: "Introduction",
        author: "Kamala Das"
      },
      {
        title: "River",
        author: "A. K. Ramanujan"
      },
      {
        title: "Dawn at Puri",
        author: "Jayanta Mahapatra"
      },
      {
        title: "Tara",
        author: "Mahesh Dattani"
      }
    ]

  },


  "DSC 14": {

    "Drama": [
      {
        title: "A Doll’s House",
        author: "Henrik Ibsen"
      },
      {
        title: "The Cherry Orchard",
        author: "Anton Chekhov"
      },
      {
        title: "The Good Woman of Szechuan",
        author: "Bertolt Brecht"
      },
      {
        title: "Waiting for Godot",
        author: "Samuel Beckett"
      }
    ]

  },


  "DSC 15": {

    "American Literature": [
      {
        title: "Beloved",
        author: "Toni Morrison"
      },
      {
        title: "Chicago",
        author: "Carl Sandburg"
      },
      {
        title: "I Carry Your Heart with Me",
        author: "E. E. Cummings"
      },
      {
        title: "A Mark of Resistance",
        author: "Adrienne Rich"
      },
      {
        title: "To Brooklyn Bridge",
        author: "Hart Crane"
      },
      {
        title: "The Glass Menagerie",
        author: "Tennessee Williams"
      }
    ]

  },


  "DSC 16": {

    "Stories": [
      {
        title: "The Shroud",
        author: "Prem Chand"
      },
      {
        title: "The Quilt",
        author: "Ismat Chughtai"
      },
      {
        title: "Rebati",
        author: "Fakir Mohan Senapati"
      }
    ],

    "Poetry": [
      {
        title: "Light, Oh Where is the Light?",
        author: "Rabindranath Tagore"
      },
      {
        title: "When My Play Was With Thee",
        author: "Rabindranath Tagore"
      },
      {
        title: "The Void",
        author: "G. M. Muktibodh"
      },
      {
        title: "I Say Unto Waris Shah",
        author: "Amrita Pritam"
      }
    ],

    "Novel": [
      {
        title: "The Home and the World",
        author: "Rabindranath Tagore"
      }
    ],

    "Drama": [
      {
        title: "Silence! The Court Is in Session",
        author: "Vijay Tendulkar"
      }
    ]

  },


  "DSC 17": {

    "Literary Theory": [
      {
        title: "Tradition and the Individual Talent",
        author: "T. S. Eliot"
      },
      {
        title: "The Death of the Author",
        author: "Roland Barthes"
      },
      {
        title: "Literature and History",
        author: "Terry Eagleton"
      },
      {
        title: "Modern Fiction",
        author: "Virginia Woolf"
      }
    ]

  },


  "DSC 18": {

    "Poetry": [
      {
        title: "I Cannot Live With You",
        author: "Emily Dickinson"
      },
      {
        title: "How Do I Love Thee",
        author: "Elizabeth Barrett Browning"
      },
      {
        title: "Advice to Women",
        author: "Eunice de Souza"
      }
    ],

    "Fiction": [
      {
        title: "Wuthering Heights",
        author: "Emily Brontë"
      },
      {
        title: "Draupadi",
        author: "Mahasweta Devi"
      },
      {
        title: "Bliss",
        author: "Katherine Mansfield"
      }
    ],

    "Non-Fiction": [
      {
        title: "A Vindication of the Rights of Woman, Chapters I–II",
        author: "Mary Wollstonecraft"
      },
      {
        title: "Amar Jiban",
        author: "Rassundari Devi"
      }
    ]

  },


  "DSC 19": {

    "Autobiography": [
      {
        title: "My Reminiscences, Chapters 1–15",
        author: "Rabindranath Tagore"
      },
      {
        title: "Autobiography or the Story of My Experiments with Truth, Part I, Chapters 1–8",
        author: "Mahatma Gandhi"
      },
      {
        title: "My Story and Life as an Actress, pp. 61–83",
        author: "Binodini Dasi"
      },
      {
        title: "Autobiography of an Unknown Indian, Book I",
        author: "Nirad C. Chaudhuri"
      }
    ]

  },


  "DSC 20": {},

  "DSC 21": {},

  "DSC 22": {}

};

/* ==================================================
   ICONS
================================================== */

const icons = {

  education: `
    <svg viewBox="0 0 24 24">
      <path d="M3 9L12 4L21 9L12 14L3 9Z"></path>
      <path d="M6 11.5V16C8 18 10 19 12 19C14 19 16 18 18 16V11.5"></path>
      <path d="M21 9V15"></path>
    </svg>
  `,


  syllabus: `
    <svg viewBox="0 0 24 24">
      <path d="M6 3.5H15L19 7.5V20.5H6Z"></path>
      <path d="M15 3.5V7.5H19"></path>
      <path d="M9 11H16"></path>
      <path d="M9 14.5H16"></path>
      <path d="M9 18H13"></path>
    </svg>
  `,


  question: `
    <svg viewBox="0 0 24 24">

      <circle
        cx="10.5"
        cy="10.5"
        r="6.5"
      ></circle>

      <path
        d="M15.5 15.5L20.5 20.5"
      ></path>

      <path
        d="M8.8 8.8C9.2 7.9 9.9 7.4 10.9 7.4C12.1 7.4 12.9 8.1 12.9 9.2C12.9 10.3 12.2 10.9 11.5 11.4C10.8 11.9 10.4 12.3 10.4 13.2"
      ></path>

      <circle
        cx="10.4"
        cy="15.4"
        r=".65"
        fill="currentColor"
        stroke="none"
      ></circle>

    </svg>
  `,


  class: `
    <svg viewBox="0 0 24 24">

      <rect
        x="3"
        y="4.5"
        width="18"
        height="13"
        rx="2"
      ></rect>

      <path d="M8 20H16"></path>

      <path d="M12 17.5V20"></path>

      <path
        d="M10 8.5L15 11L10 13.5V8.5Z"
      ></path>

    </svg>
  `,


  books: `
    <svg viewBox="0 0 24 24">

      <path
        d="M4 5.5C4 4.7 4.7 4 5.5 4H10C11.1 4 12 4.9 12 6V20C12 18.9 11.1 18 10 18H5.5C4.7 18 4 17.3 4 16.5V5.5Z"
      ></path>

      <path
        d="M20 5.5C20 4.7 19.3 4 18.5 4H14C12.9 4 12 4.9 12 6V20C12 18.9 12.9 18 14 18H18.5C19.3 18 20 17.3 20 16.5V5.5Z"
      ></path>

    </svg>
  `,


  notes: `
    <svg viewBox="0 0 24 24">

      <path d="M5 3.5H16L19 6.5V20.5H5Z"></path>

      <path d="M16 3.5V6.5H19"></path>

      <path d="M8 11H16"></path>

      <path d="M8 14.5H15"></path>

      <path d="M8 18H12"></path>

    </svg>
  `,


  arrow: `
    <svg viewBox="0 0 24 24">

      <path d="M5 12H19"></path>

      <path d="M13 6L19 12L13 18"></path>

    </svg>
  `,


  chart: `
    <svg viewBox="0 0 24 24">

      <path d="M5 19V11"></path>

      <path d="M12 19V5"></path>

      <path d="M19 19V8"></path>

    </svg>
  `

};


/* ==================================================
   MAIN ELEMENT
================================================== */

const mainContent =
  document.getElementById("mainContent");


let currentPage = "home";


/* ==================================================
   NAVIGATION
================================================== */

function navigate(page) {

  currentPage = page;

  closeSideMenu();

  closeNotifications();

  updateBottomNavigation(page);


  mainContent.classList.remove(
    "page-transition"
  );


  void mainContent.offsetWidth;


  mainContent.classList.add(
    "page-transition"
  );


  if (page === "home") {

    renderHome();

  }


  else if (page === "honours-hub") {

    renderEnglishHonours();

  }


  else if (page === "syllabus") {

    renderSyllabus();

  }


  else if (page === "pyq") {

    showComingSoon(
      "Previous Year Questions",
      "Previous year question papers will be added here."
    );

  }


  else if (page === "classes") {

    showComingSoon(
      "Free Classes",
      "Free English Honours classes will be added here."
    );

  }


  else {

    renderHome();

  }


  window.scrollTo({
    top: 0,
    behavior: "auto"
  });

}


/* ==================================================
   BOTTOM NAV
================================================== */

function updateBottomNavigation(page) {

  document
    .querySelectorAll(".bottom-nav-item")
    .forEach(item => {

      item.classList.remove("active");

    });


  if (page === "home") {

    document
      .getElementById("navHome")
      .classList.add("active");

  }


  else if (
    page === "honours-hub"
  ) {

    document
      .getElementById("navHonours")
      .classList.add("active");

  }


  else if (page === "pyq") {

    document
      .getElementById("navPYQ")
      .classList.add("active");

  }


  else if (page === "classes") {

    document
      .getElementById("navClasses")
      .classList.add("active");

  }

}


/* ==================================================
   HOME
================================================== */

function renderHome() {

  mainContent.innerHTML = `

    <div
      id="noticeWrapper"
      class="notice-wrapper"
    >

      <div class="notice-icon">

        <svg viewBox="0 0 24 24">

          <path d="M4 10V14"></path>

          <path d="M7 9L16 5V19L7 15"></path>

          <path
            d="M16 9C18 9.5 19 10.5 19 12C19 13.5 18 14.5 16 15"
          ></path>

          <path
            d="M7 15L8.5 20H11L10 15"
          ></path>

        </svg>

      </div>


      <div class="notice-content">

        <div class="notice-title">
          LATEST UPDATE
        </div>

        <div class="notice-text">

          <span class="notice-moving">
            Welcome to PZ Study • English Honours resources are being added • Notes, syllabus, PYQ and free classes coming soon
          </span>

        </div>

      </div>


      <button
        class="notice-close"
        type="button"
        onclick="closeNotice()"
      >
        ×
      </button>

    </div>



    <section class="hero">

      <div class="hero-content">

        <div class="hero-small">
          WELCOME TO PZ STUDY
        </div>

        <h1>
          English Honours
          <br>
          Study Platform
        </h1>

        <p>
          A simple and organised platform
          for English Honours students.
        </p>

      </div>

    </section>



    <div class="section-title">

      <h2>
        Explore PZ Study
      </h2>

      <p>
        Choose a section to continue.
      </p>

    </div>



    <section class="feature-grid">


      <button
        class="feature-card honours"
        type="button"
        onclick="animateFeature(this, 'honours-hub')"
      >

        <div class="feature-icon">
          ${icons.education}
        </div>

        <h3>
          English Honours Hub
        </h3>

        <p>
          Explore semesters and DSC papers.
        </p>

      </button>



      <button
        class="feature-card syllabus"
        type="button"
        onclick="animateFeature(this, 'syllabus')"
      >

        <div class="feature-icon">
          ${icons.syllabus}
        </div>

        <h3>
          Syllabus
        </h3>

        <p>
          View syllabus semester by semester.
        </p>

      </button>



      <button
        class="feature-card pyq"
        type="button"
        onclick="animateFeature(this, 'pyq')"
      >

        <div class="feature-icon">
          ${icons.question}
        </div>

        <h3>
          Previous Year Questions
        </h3>

        <p>
          Practice previous year questions.
        </p>

      </button>



      <button
        class="feature-card classes"
        type="button"
        onclick="animateFeature(this, 'classes')"
      >

        <div class="feature-icon">
          ${icons.class}
        </div>

        <h3>
          Free Classes
        </h3>

        <p>
          Learn through useful free classes.
        </p>

      </button>


    </section>

  `;

}


/* ==================================================
   FEATURE ANIMATION
================================================== */

function animateFeature(
  card,
  destination
) {

  if (
    card.classList.contains("touching")
  ) {

    return;

  }


  card.classList.add("touching");


  setTimeout(() => {

    card.classList.remove(
      "touching"
    );

    navigate(destination);

  }, 190);

}


/* ==================================================
   NOTICE CLOSE
================================================== */

function closeNotice() {

  const notice =
    document.getElementById(
      "noticeWrapper"
    );


  if (notice) {

    notice.style.display = "none";

  }

}


/* ==================================================
   ENGLISH HONOURS HUB
================================================== */

function renderEnglishHonours() {

  mainContent.innerHTML = `

    <div class="page-header">

      <button
        class="back-button"
        type="button"
        onclick="navigate('home')"
      >
        ← Back
      </button>


      <h1>
        English Honours Hub
      </h1>


      <p>
        Select a semester to explore its DSC papers.
      </p>

    </div>



    <section class="semester-grid">

      ${semesters.map(semester => `

        <button
          class="semester-card"
          type="button"
          onclick="openSemester('${semester.id}')"
        >

          <!-- ONLY ONE SEMESTER NAME -->

          <h3>
            ${semester.name}
          </h3>

        </button>

      `).join("")}

    </section>

  `;

}


/* ==================================================
   OPEN HONOURS SEMESTER
================================================== */

function openSemester(id) {

  const semester =
    semesters.find(
      item => item.id === id
    );


  if (!semester) {

    return;

  }


  mainContent.innerHTML = `

    <div class="page-header">

      <button
        class="back-button"
        type="button"
        onclick="renderEnglishHonours()"
      >
        ← Back
      </button>


      <h1>
        ${semester.name}
      </h1>


      <p>
        Select a DSC paper.
      </p>

    </div>



    <section class="dsc-grid">

      ${semester.papers.map(
        paper => `

          <button
            class="dsc-card"
            type="button"
            onclick="openDSC('${paper}')"
          >

            <div class="dsc-label">
              ${paper}
            </div>

            <h3>
              English Honours
            </h3>

            <p>
              View paper details
            </p>

          </button>

        `
      ).join("")}

    </section>

  `;

}


/* ==================================================
   OPEN DSC
================================================== */

function openDSC(paper) {

  if (paper === "DSC 9") {

    renderDSC9();

    return;

  }


  renderGenericDSC(paper);

}


/* ==================================================
   GENERIC DSC
================================================== */

function renderGenericDSC(paper) {

  mainContent.innerHTML = `

    <div class="page-header">

      <button
        class="back-button"
        type="button"
        onclick="renderEnglishHonours()"
      >
        ← Back
      </button>


      <h1>
        ${paper}
      </h1>


      <p>
        English Honours DSC paper.
      </p>

    </div>



    <div class="coming-soon">

      <div class="coming-icon">
        ${icons.notes}
      </div>


      <h2>
        Content Coming Soon
      </h2>


      <p>
        Syllabus, texts, notes and study resources
        for ${paper} will be added here.
      </p>

    </div>

  `;

}


/* ==================================================
   DSC 9
================================================== */

function renderDSC9() {

  mainContent.innerHTML = `

    <div class="page-header">

      <button
        class="back-button"
        type="button"
        onclick="renderEnglishHonours()"
      >
        ← Back
      </button>


      <h1>
        DSC 9
      </h1>


      <p>
        Select a text to explore its study resources.
      </p>

    </div>



    <section class="book-list">

      ${dsc9Books.map(
        book => `

          <button
            class="book-card"
            type="button"
            onclick="openBook('${book.title.replace(/'/g, "\\'")}')"
          >

            <div class="book-icon">
              ${icons.books}
            </div>


            <div class="book-info">

              <h3>
                ${book.title}
              </h3>

              <p>
                ${book.author}
              </p>

            </div>


            <div class="book-arrow">
              ${icons.arrow}
            </div>

          </button>

        `
      ).join("")}

    </section>

  `;

}


/* ==================================================
   BOOK
================================================== */

function openBook(title) {

  mainContent.innerHTML = `

    <div class="page-header">

      <button
        class="back-button"
        type="button"
        onclick="renderDSC9()"
      >
        ← Back
      </button>


      <h1>
        ${title}
      </h1>


      <p>
        Study resources for this text.
      </p>

    </div>



    <div class="coming-soon">

      <div class="coming-icon">
        ${icons.notes}
      </div>


      <h2>
        Study Resources
      </h2>


      <p>
        Notes, important questions,
        short questions, long questions
        and previous year questions
        will be added here.
      </p>

    </div>

  `;

}


/* ==================================================
   SYLLABUS
   IMPORTANT:
   ONLY SEMESTERS ARE SHOWN HERE.
================================================== */

function renderSyllabus() {

  mainContent.innerHTML = `

    <div class="page-header">

      <button
        class="back-button"
        type="button"
        onclick="navigate('home')"
      >
        ← Back
      </button>


      <h1>
        Syllabus
      </h1>


      <p>
        Select a semester to view its syllabus.
      </p>

    </div>



    <section class="semester-grid">

      ${semesters.map(semester => `

        <button
          class="semester-card"
          type="button"
          onclick="openSyllabusSemester('${semester.id}')"
        >

          <!-- ONLY ONE SEMESTER NAME -->

          <h3>
            ${semester.name}
          </h3>

        </button>

      `).join("")}

    </section>

  `;

}


/* ==================================================
   SYLLABUS SEMESTER
================================================== */

function openSyllabusSemester(id) {

  const semester =
    semesters.find(
      item => item.id === id
    );


  if (!semester) {

    return;

  }


  mainContent.innerHTML = `

    <div class="page-header">

      <button
        class="back-button"
        type="button"
        onclick="renderSyllabus()"
      >
        ← Back
      </button>


      <h1>
        ${semester.name}
      </h1>


      <p>
        Select a DSC paper to view its syllabus.
      </p>

    </div>



    <section class="dsc-grid">

      ${semester.papers.map(
        paper => `

          <button
            class="dsc-card"
            type="button"
            onclick="openSyllabusPaper('${paper}')"
          >

            <div class="dsc-label">
              ${paper}
            </div>

            <h3>
              View Syllabus
            </h3>

            <p>
              Texts and authors
            </p>

          </button>

        `
      ).join("")}

    </section>

  `;

}


/* ==================================================
   SYLLABUS PAPER
================================================== */

function openSyllabusPaper(paper) {

  const data =
    syllabusData[paper];


  if (
    !data ||
    Object.keys(data).length === 0
  ) {

    mainContent.innerHTML = `

      <div class="page-header">

        <button
          class="back-button"
          type="button"
          onclick="renderSyllabus()"
        >
          ← Back
        </button>


        <h1>
          ${paper}
        </h1>


        <p>
          Official syllabus details will be added here.
        </p>

      </div>



      <div class="coming-soon">

        <div class="coming-icon">
          ${icons.syllabus}
        </div>


        <h2>
          Syllabus Coming Soon
        </h2>


        <p>
          The syllabus details for
          ${paper} will be added here.
        </p>

      </div>

    `;

    return;

  }


  const semester =
    semesters.find(
      item =>
        item.papers.includes(paper)
    );


  const categories =
    Object.keys(data);


  mainContent.innerHTML = `

    <div class="page-header">

      <button
        class="back-button"
        type="button"
        onclick="openSyllabusSemester('${semester.id}')"
      >
        ← Back
      </button>


      <h1>
        ${paper}
      </h1>


      <p>
        Syllabus
      </p>

    </div>



    <section class="category-list">

      ${categories.map(
        category => `

          <div class="category-section">

            <h3>
              ${category}
            </h3>


            <div class="work-list">

              ${data[category].map(
                work => `

                  <div class="work-item">

                    <div class="work-title">
                      ${work.title}
                    </div>

                    <div class="work-author">
                      ${work.author}
                    </div>

                  </div>

                `
              ).join("")}

            </div>

          </div>

        `
      ).join("")}

    </section>

  `;

}


/* ==================================================
   COMING SOON
================================================== */

function showComingSoon(
  title,
  description
) {

  mainContent.innerHTML = `

    <div class="page-header">

      <button
        class="back-button"
        type="button"
        onclick="navigate('home')"
      >
        ← Back
      </button>


      <h1>
        ${title}
      </h1>


      <p>
        ${description}
      </p>

    </div>



    <div class="coming-soon">

      <div class="coming-icon">
        ${icons.chart}
      </div>


      <h2>
        Coming Soon
      </h2>


      <p>
        This section is currently being prepared
        for PZ Study.
      </p>

    </div>

  `;

}


/* ==================================================
   SIDE MENU
================================================== */

function openSideMenu() {

  document
    .getElementById("sideMenu")
    .classList.add("show");


  document
    .getElementById("menuOverlay")
    .classList.add("show");

}


function closeSideMenu() {

  document
    .getElementById("sideMenu")
    .classList.remove("show");


  document
    .getElementById("menuOverlay")
    .classList.remove("show");

}


/* ==================================================
   NOTIFICATIONS
================================================== */

function openNotifications() {

  document
    .getElementById("notificationPanel")
    .classList.toggle("show");

}


function closeNotifications() {

  document
    .getElementById("notificationPanel")
    .classList.remove("show");

}


/* ==================================================
   EVENTS
================================================== */

document
  .getElementById("menuButton")
  .addEventListener(
    "click",
    openSideMenu
  );


document
  .getElementById("closeMenuButton")
  .addEventListener(
    "click",
    closeSideMenu
  );


document
  .getElementById("menuOverlay")
  .addEventListener(
    "click",
    closeSideMenu
  );


document
  .getElementById("notificationButton")
  .addEventListener(
    "click",
    openNotifications
  );


document
  .getElementById("closeNotificationButton")
  .addEventListener(
    "click",
    closeNotifications
  );


/* ==================================================
   INITIAL LOAD
================================================== */

renderHome();

updateBottomNavigation("home");