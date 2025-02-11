// Defining classes as variables
const textRow = document.querySelectorAll(".text-row");
const cards = document.querySelectorAll(".card");

cards.forEach((card, cardIndex) => {
  const blockHids = card.querySelectorAll(".block-hid");
  const blocks = card.querySelectorAll(".block");
  const titles = card.querySelectorAll(".title");
  const texts = card.querySelectorAll(".text");
  const acts = card.querySelectorAll(".act");
  const logo = card.querySelectorAll(".logo");

  const observerCard = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        logo.forEach((logoElement, index) => {
          setTimeout(() => {
            logoElement.classList.add("right");
          }, 250 * index);
        });

        blocks.forEach((blockElement, index) => {
          setTimeout(() => {
            blockElement.classList.add("slin");
          }, 250 * index);
        });

        blockHids.forEach((blockHidElement, index) => {
          setTimeout(() => {
            blockHidElement.classList.add("slin-hid");
          }, 250 * index);
        });

        titles.forEach((titleElement, index) => {
          setTimeout(() => {
            titleElement.classList.add("done");
          }, 200 * (index + cardIndex));
        });

        acts.forEach((actElement, index) => {
          setTimeout(() => {
            actElement.classList.add("doneAct");
          }, 200 * (index + cardIndex));
        });

        texts.forEach((textElement, index) => {
          setTimeout(() => {
            textElement.classList.add("done");
          }, 200 * (index + cardIndex));
        });
      } else {
        logo.forEach((logoElement) => logoElement.classList.remove("right"));
        blocks.forEach((blockElement) => blockElement.classList.remove("slin"));
        blockHids.forEach((blockHidElement) =>
          blockHidElement.classList.remove("slin-hid")
        );
        titles.forEach((titleElement) => titleElement.classList.remove("done"));
        acts.forEach((actElement) => actElement.classList.remove("doneAct"));
        texts.forEach((textElement) => textElement.classList.remove("done"));
      }
    });
  });

  observerCard.observe(card);
});

// Intersection observer for image reveal
const observerImage = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, 250 * Array.from(entries).indexOf(entry));
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenim = document.querySelectorAll(".motion");
hiddenim.forEach((el) => observerImage.observe(el));

// Corner circle animations
const observerCornerCircle = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      setTimeout(() => {
        entry.target.classList.add("switch");
      }, 250 * Array.from(entries).indexOf(entry));
    } else {
      entry.target.classList.remove("switch");
    }
  });
});

const switch1 = document.querySelectorAll(".corner-circle");
switch1.forEach((el) => observerCornerCircle.observe(el));

const observerCornerOutline = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      setTimeout(() => {
        entry.target.classList.add("switch-outline");
      }, 250 * Array.from(entries).indexOf(entry));
    } else {
      entry.target.classList.remove("switch-outline");
    }
  });
});

const switch2 = document.querySelectorAll(".corner-circle-outline");
switch2.forEach((el) => observerCornerOutline.observe(el));

// Intersection observer for text rows
const observerTextRow = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      textRow.forEach((textRowElement) => {
        setTimeout(() => {
          textRowElement.classList.add("nothing");
        }, 2300);
      });
    } else {
      textRow.forEach((textRowElement) => {
        textRowElement.classList.remove("nothing");
      });
    }
  });
});

cards.forEach((card) => observerTextRow.observe(card));
