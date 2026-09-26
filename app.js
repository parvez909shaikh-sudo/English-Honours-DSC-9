const texts = [

  {
    title: "Pride and Prejudice",
    author: "Jane Austen",

    notes: [
      {
        title: "Introduction",
        type: "introduction",
        icon: "✍️"
      },

      {
        title: "Story Summary",
        type: "story",
        icon: "📖"
      }
    ]
  },


  {
    title: "Hard Times",
    author: "Charles Dickens",

    notes: [
      {
        title: "Introduction",
        type: "coming",
        icon: "✍️"
      },

      {
        title: "Story Summary",
        type: "coming",
        icon: "📖"
      }
    ]
  },


  {
    title: "The Mayor of Casterbridge",
    author: "Thomas Hardy",

    notes: [
      {
        title: "Introduction",
        type: "coming",
        icon: "✍️"
      },

      {
        title: "Story Summary",
        type: "coming",
        icon: "📖"
      }
    ]
  },


  {
    title: "The Hero as Poet",
    author: "Thomas Carlyle",

    notes: [
      {
        title: "Introduction",
        type: "coming",
        icon: "✍️"
      },

      {
        title: "Main Ideas",
        type: "coming",
        icon: "💡"
      }
    ]
  }

];


const app = document.getElementById("app");

const backBtn = document.getElementById("backBtn");

const homeBtn = document.getElementById("homeBtn");


/* =========================================
   HOME
========================================= */

function renderHome() {

  app.innerHTML = `

    <section class="hero">

      <p class="app-title">
        📚 English Honours
      </p>

      <p class="semester-title">
        🎓 SEMESTER 5
      </p>

      <h2 class="dsc-title">
        DSC 9
      </h2>

      <p class="hero-description">
        Study notes, summaries and important exam points
        for English Honours.
      </p>

    </section>


    <section class="text-list">

      ${texts.map((text, index) => `

        <button
          class="text-card"
          onclick="openText(${index})"
        >

          <span class="card-number">
            ${String(index + 1).padStart(2, "0")}
          </span>


          <div class="card-content">

            <h3>
              📖 ${text.title}
            </h3>

            <p>
              — ${text.author}
            </p>

          </div>


          <span class="arrow">
            →
          </span>

        </button>

      `).join("")}

    </section>

  `;


  backBtn.style.display = "none";

  homeBtn.style.display = "none";
}


/* =========================================
   OPEN TEXT
========================================= */

function openText(index, saveHistory = true) {

  if (saveHistory) {

    history.pushState(
      {
        page: "text",
        index: index
      },
      "",
      ""
    );

  }

  renderTextPage(index);
}


function renderTextPage(index) {

  const text = texts[index];


  app.innerHTML = `

    <section class="page-header">

      <span class="page-label">
        📚 TEXT
      </span>

      <h1>
        ${text.title}
      </h1>

      <p>
        — ${text.author}
      </p>

    </section>


    <section class="note-list">

      ${text.notes.map((note, noteIndex) => `

        <button
          class="note-card"
          onclick="openNote(${index}, ${noteIndex})"
        >

          <span class="note-number">
            ${String(noteIndex + 1).padStart(2, "0")}
          </span>


          <div>

            <h3>
              ${note.icon} ${note.title}
            </h3>

            <p>
              ${
                note.type === "coming"
                  ? "Coming Soon"
                  : "Open notes"
              }
            </p>

          </div>


          <span class="arrow">
            →
          </span>

        </button>

      `).join("")}

    </section>

  `;


  backBtn.style.display = "flex";

  homeBtn.style.display = "flex";
}


/* =========================================
   OPEN NOTE
========================================= */

function openNote(
  textIndex,
  noteIndex,
  saveHistory = true
) {

  const text = texts[textIndex];

  const note = text.notes[noteIndex];


  if (saveHistory) {

    history.pushState(
      {
        page: "note",
        textIndex: textIndex,
        noteIndex: noteIndex
      },
      "",
      ""
    );

  }


  if (note.type === "introduction") {

    renderIntroduction();

  }

  else if (note.type === "story") {

    renderStorySummary();

  }

  else {

    renderComingSoon(text, note);

  }

}


/* =========================================
   INTRODUCTION
========================================= */

function renderIntroduction() {

  app.innerHTML = `

    <section class="page-header">

      <span class="page-label">
        ✍️ INTRODUCTION
      </span>

      <h1>
        Pride and Prejudice
      </h1>

      <p>
        — Jane Austen
      </p>

    </section>


    <article class="study-content">


      <section class="study-section">

        <h2>
          📖 1. About the Novel
        </h2>

        <p>
          <strong>Pride and Prejudice</strong> is a famous novel
          written by Jane Austen. It is a romantic novel with strong
          elements of social comedy and social criticism.
        </p>

        <p>
          The novel mainly focuses on Elizabeth Bennet, the second
          daughter of the Bennet family, and Fitzwilliam Darcy,
          a wealthy gentleman. Their relationship develops through
          misunderstandings, personal changes and gradually increasing
          understanding.
        </p>

        <p>
          The novel explores love, marriage, family, social class,
          reputation, pride and prejudice in early nineteenth-century
          English society.
        </p>

      </section>


      <section class="study-section">

        <h2>
          👩‍💼 2. About Jane Austen
        </h2>

        <p>
          Jane Austen (1775–1817) was an important English novelist.
          She is known for her sharp observation of society, especially
          the lives of women, family relationships, marriage and
          social class.
        </p>

        <p>
          Her novels often combine romance, humour and social criticism.
          Some of her other important novels are
          <em>Sense and Sensibility</em>, <em>Emma</em>,
          <em>Mansfield Park</em>, <em>Northanger Abbey</em>
          and <em>Persuasion</em>.
        </p>

      </section>


      <section class="study-section">

        <h2>
          📅 3. Publication
        </h2>

        <p>
          <strong>Pride and Prejudice</strong> was first published
          in <strong>1813</strong>.
        </p>

        <p>
          The novel developed from an earlier version that Austen had
          written in the late 1790s. It was originally known as
          <em>First Impressions</em>.
        </p>

      </section>


      <section class="study-section">

        <h2>
          📚 4. Genre
        </h2>

        <p>
          The novel can be described as:
        </p>

        <ul>

          <li>💞 Romantic novel</li>

          <li>📚 Novel of manners</li>

          <li>🎭 Comedy of manners</li>

          <li>🏛️ Social novel</li>

        </ul>

        <p>
          It combines the story of romantic relationships with a
          detailed picture of the society in which the characters live.
        </p>

      </section>


      <section class="study-section">

        <h2>
          🗺️ 5. Setting
        </h2>

        <p>
          The story is mainly set in Hertfordshire and Derbyshire,
          with important scenes also taking place in places such as
          London and Kent.
        </p>

        <p>
          The social world of the novel is largely that of the
          English landed gentry. Marriage, wealth, family background
          and social reputation have great importance in this society.
        </p>

      </section>


      <section class="study-section">

        <h2>
          👥 6. Major Characters
        </h2>


        <div class="character-box">

          <h3>
            👩 Elizabeth Bennet
          </h3>

          <p>
            The heroine of the novel. She is intelligent, lively,
            independent-minded and quick to form opinions.
          </p>

        </div>


        <div class="character-box">

          <h3>
            🎩 Fitzwilliam Darcy
          </h3>

          <p>
            A wealthy and socially respected gentleman. He initially
            appears proud and reserved, but his character develops
            throughout the novel.
          </p>

        </div>


        <div class="character-box">

          <h3>
            🌸 Jane Bennet
          </h3>

          <p>
            Elizabeth's elder sister. She is kind, gentle and
            good-natured.
          </p>

        </div>


        <div class="character-box">

          <h3>
            🤝 Charles Bingley
          </h3>

          <p>
            A wealthy, friendly and good-natured gentleman who
            develops a relationship with Jane Bennet.
          </p>

        </div>


        <div class="character-box">

          <h3>
            👨 Mr. Bennet
          </h3>

          <p>
            Elizabeth's father. He is intelligent and witty but often
            avoids responsibility for important family matters.
          </p>

        </div>


        <div class="character-box">

          <h3>
            👩 Mrs. Bennet
          </h3>

          <p>
            Elizabeth's mother. She is mainly concerned with finding
            financially secure husbands for her daughters.
          </p>

        </div>


        <div class="character-box">

          <h3>
            🎭 George Wickham
          </h3>

          <p>
            A charming but unreliable man whose pleasant appearance
            hides his weaknesses and selfish behaviour.
          </p>

        </div>

      </section>


      <section class="study-section">

        <h2>
          🎯 7. Major Themes
        </h2>


        <h3>
          💞 Love and Marriage
        </h3>

        <p>
          Austen presents different kinds of relationships and
          marriages. The novel suggests that mutual understanding,
          respect and affection are important in a successful marriage.
        </p>


        <h3>
          🎩 Pride
        </h3>

        <p>
          Darcy's pride affects his early behaviour and creates
          distance between him and Elizabeth.
        </p>


        <h3>
          👀 Prejudice
        </h3>

        <p>
          Elizabeth forms an early opinion of Darcy based partly on
          her first impressions and Wickham's story. Later, she learns
          that her judgment was incomplete.
        </p>


        <h3>
          🏛️ Social Class
        </h3>

        <p>
          Wealth, family background and social position strongly
          influence relationships and marriage in the novel.
        </p>


        <h3>
          👨‍👩‍👧‍👦 Family
        </h3>

        <p>
          The Bennet family shows both the importance and the
          difficulties of family relationships.
        </p>


        <h3>
          👀 First Impressions
        </h3>

        <p>
          The novel shows that first impressions can be misleading
          and that people may not always be what they first appear.
        </p>

      </section>


      <section class="study-section">

        <h2>
          🏷️ 8. Significance of the Title
        </h2>

        <p>
          The title <strong>Pride and Prejudice</strong> refers
          particularly to the weaknesses that initially prevent
          Elizabeth and Darcy from understanding each other.
        </p>

        <p>
          Darcy's pride and Elizabeth's prejudice contribute to their
          misunderstandings.
        </p>

        <p>
          As the story develops, both characters learn from their
          mistakes and change their attitudes. Therefore, the title
          is closely connected with the development of both characters.
        </p>

      </section>


      <section class="study-section">

        <h2>
          🎯 9. Important Points for Examination
        </h2>

        <ul class="exam-list">

          <li>
            ✍️ <strong>Author:</strong>
            Jane Austen
          </li>

          <li>
            📅 <strong>Publication:</strong>
            1813
          </li>

          <li>
            📚 <strong>Genre:</strong>
            Romantic novel / Novel of manners / Comedy of manners
          </li>

          <li>
            👩 <strong>Heroine:</strong>
            Elizabeth Bennet
          </li>

          <li>
            🎩 <strong>Hero:</strong>
            Fitzwilliam Darcy
          </li>

          <li>
            💞 <strong>Central Relationship:</strong>
            Elizabeth Bennet and Darcy
          </li>

          <li>
            🎯 <strong>Major Themes:</strong>
            Love, marriage, pride, prejudice, social class,
            family and first impressions
          </li>

          <li>
            🏛️ <strong>Social Background:</strong>
            English landed gentry
          </li>

          <li>
            💡 <strong>Main Idea:</strong>
            First impressions can be misleading, and people can
            change through self-knowledge.
          </li>

        </ul>

      </section>


      <section class="memory-box">

        <span class="memory-label">
          🧠 REMEMBER THIS
        </span>

        <h2>
          10. Introduction in Short
        </h2>

        <p>
          <strong>Pride and Prejudice</strong>, written by
          <strong>Jane Austen</strong> and published in
          <strong>1813</strong>, is a romantic novel of manners set
          mainly in the world of the English landed gentry. It follows
          Elizabeth Bennet and Mr. Darcy, whose relationship is shaped
          by love, marriage, social class, pride, prejudice and first
          impressions. Through their mistakes and self-understanding,
          Austen shows that true love requires mutual respect and the
          ability to overcome false judgments.
        </p>

      </section>

    </article>

  `;


  backBtn.style.display = "flex";

  homeBtn.style.display = "flex";
}


/* =========================================
   STORY SUMMARY
========================================= */

function renderStorySummary() {

  app.innerHTML = `

    <section class="page-header">

      <span class="page-label">
        📖 STORY SUMMARY
      </span>

      <h1>
        Pride and Prejudice
      </h1>

      <p>
        — Jane Austen
      </p>

    </section>


    <article class="study-content">


      <section class="study-section">

        <h2>
          🏠 1. The Bennet Family and Mr. Bingley
        </h2>

        <p>
          The story begins with the Bennet family living at Longbourn
          in Hertfordshire. Mr. and Mrs. Bennet have five daughters:
          Jane, Elizabeth, Mary, Catherine and Lydia.
        </p>

        <p>
          Mrs. Bennet is eager to see her daughters married because
          the family's property is not securely inherited by them.
        </p>

        <p>
          A wealthy young man named Charles Bingley arrives in the
          neighbourhood and rents Netherfield Park. Mrs. Bennet
          becomes excited because she hopes that Bingley will marry
          one of her daughters.
        </p>

        <p>
          At a local ball, Bingley becomes attracted to Jane Bennet.
          His friend Mr. Darcy, however, appears proud and distant.
          Elizabeth immediately forms a negative opinion of Darcy.
        </p>

      </section>


      <section class="study-section">

        <h2>
          👀 2. Elizabeth Meets Darcy
        </h2>

        <p>
          Elizabeth is intelligent and lively, but she is also strongly
          influenced by her first impressions.
        </p>

        <p>
          Darcy's reserved behaviour makes Elizabeth dislike him.
          At the same time, she meets George Wickham, a charming young
          officer who tells her that Darcy treated him unfairly.
        </p>

        <p>
          Elizabeth believes Wickham's story and becomes even more
          convinced that Darcy is a proud and unpleasant man.
        </p>

      </section>


      <section class="study-section">

        <h2>
          💞 3. Jane and Bingley
        </h2>

        <p>
          Jane and Bingley gradually become attracted to each other.
          Their relationship appears sincere and affectionate.
        </p>

        <p>
          However, Bingley's sisters and Darcy have concerns about
          Jane's family connections and social position.
        </p>

        <p>
          Jane later becomes seriously ill while visiting Netherfield,
          and Elizabeth goes there to care for her. During this period,
          Elizabeth spends more time with Darcy and other members of
          Bingley's circle.
        </p>

      </section>


      <section class="study-section">

        <h2>
          🎭 4. Wickham and Elizabeth's First Judgment
        </h2>

        <p>
          Wickham's pleasant manner makes Elizabeth trust him.
          She believes that Darcy has behaved badly towards him.
        </p>

        <p>
          Elizabeth does not yet know that Wickham has hidden important
          facts about his past.
        </p>

        <p>
          This becomes an important part of Elizabeth's prejudice
          against Darcy.
        </p>

      </section>


      <section class="study-section">

        <h2>
          💌 5. Darcy's First Proposal
        </h2>

        <p>
          Darcy gradually falls in love with Elizabeth despite the
          social differences between them.
        </p>

        <p>
          He eventually proposes marriage to her. However, his proposal
          is expressed with a strong awareness of their different
          social positions.
        </p>

        <p>
          Elizabeth refuses him.
        </p>

        <p>
          She also accuses Darcy of separating Jane and Bingley and
          of treating Wickham unfairly.
        </p>

        <p>
          Darcy later writes a letter explaining the truth about both
          situations. Elizabeth begins to question her earlier
          judgments.
        </p>

      </section>


      <section class="study-section">

        <h2>
          🏡 6. Elizabeth Visits Pemberley
        </h2>

        <p>
          Elizabeth later visits Pemberley, Darcy's estate, with her
          aunt and uncle.
        </p>

        <p>
          She hears positive comments about Darcy from people who know
          him well. She also sees another side of his character.
        </p>

        <p>
          Darcy behaves politely and generously towards Elizabeth and
          her relatives.
        </p>

        <p>
          Elizabeth gradually realizes that her earlier opinion of
          Darcy was wrong.
        </p>

      </section>


      <section class="study-section">

        <h2>
          ⚠️ 7. Lydia and Wickham
        </h2>

        <p>
          A serious crisis occurs when Lydia, Elizabeth's younger
          sister, runs away with Wickham.
        </p>

        <p>
          The situation threatens the reputation and future of the
          entire Bennet family.
        </p>

        <p>
          Elizabeth fears that her relationship with Darcy is now
          impossible because of the scandal.
        </p>

        <p>
          However, Darcy secretly takes action to solve the problem.
          He finds Wickham and arranges the circumstances necessary
          for Lydia and Wickham to marry.
        </p>

        <p>
          Elizabeth later learns about Darcy's actions and understands
          that he genuinely cares about her and her family.
        </p>

      </section>


      <section class="study-section">

        <h2>
          💡 8. Darcy's Change and Elizabeth's Realization
        </h2>

        <p>
          Darcy has changed from the proud and reserved man Elizabeth
          first met.
        </p>

        <p>
          Elizabeth also changes. She recognizes that her own
          prejudice and quick judgment prevented her from understanding
          Darcy's true character.
        </p>

        <p>
          Both characters therefore learn from their mistakes.
          Their relationship is now based on greater understanding,
          respect and affection.
        </p>

      </section>


      <section class="study-section">

        <h2>
          💍 9. The Happy Ending
        </h2>

        <p>
          Bingley returns and renews his relationship with Jane.
          He eventually asks Jane to marry him, and she accepts.
        </p>

        <p>
          Darcy proposes to Elizabeth again, but this time their
          relationship has changed completely.
        </p>

        <p>
          Elizabeth accepts Darcy's proposal.
        </p>

        <p>
          The novel ends with the marriages of Jane and Bingley and
          Elizabeth and Darcy. Both couples find happiness after
          overcoming misunderstandings and difficulties.
        </p>

      </section>


      <section class="memory-box">

        <span class="memory-label">
          🧠 REMEMBER THE STORY
        </span>

        <h2>
          10. Story in Short
        </h2>

        <p>
          Elizabeth Bennet and Mr. Darcy begin with misunderstanding
          and prejudice, but their feelings gradually change as they
          discover each other's true character. Elizabeth learns that
          her first judgment of Darcy was mistaken, while Darcy
          overcomes his pride and proves his genuine love through his
          actions. After Lydia's crisis and Darcy's help, Elizabeth
          understands his true nature. Their relationship finally leads
          to marriage, while Jane and Bingley also find happiness.
        </p>

      </section>

    </article>

  `;


  backBtn.style.display = "flex";

  homeBtn.style.display = "flex";
}


/* =========================================
   COMING SOON
========================================= */

function renderComingSoon(text, note) {

  app.innerHTML = `

    <section class="coming-soon">

      <div class="coming-icon">
        📚
      </div>

      <span class="page-label">
        🚧 COMING SOON
      </span>

      <h1>
        ${note.title}
      </h1>

      <p class="coming-book">
        ${text.title}

        <br>

        <span>
          — ${text.author}
        </span>
      </p>

      <p>
        Detailed study notes for this section will be added soon.
      </p>

    </section>

  `;


  backBtn.style.display = "flex";

  homeBtn.style.display = "flex";
}


/* =========================================
   HOME BUTTON
========================================= */

homeBtn.addEventListener("click", () => {

  history.pushState(
    {
      page: "home"
    },
    "",
    ""
  );

  renderHome();

});


/* =========================================
   BACK BUTTON
========================================= */

backBtn.addEventListener("click", () => {

  history.back();

});


/* =========================================
   BROWSER BACK
========================================= */

window.addEventListener("popstate", (event) => {

  const state = event.state;


  if (!state || state.page === "home") {

    renderHome();

    return;
  }


  if (state.page === "text") {

    renderTextPage(state.index);

    return;
  }


  if (state.page === "note") {

    const text = texts[state.textIndex];

    const note = text.notes[state.noteIndex];


    if (note.type === "introduction") {

      renderIntroduction();

    }

    else if (note.type === "story") {

      renderStorySummary();

    }

    else {

      renderComingSoon(text, note);

    }

  }

});


/* =========================================
   INITIAL LOAD
========================================= */

history.replaceState(
  {
    page: "home"
  },
  "",
  ""
);

renderHome();