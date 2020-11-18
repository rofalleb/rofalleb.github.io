
const makeDisappear = {
  opacity: 0,
}
const moveDown = {
  y: 10,
}
const fadeInOrOutDown = {
  ...makeDisappear,
  ...moveDown
}
const standardAnimationDurationSeconds = 0.3;
const standardDurationSeconds = "+=1";
const longDurationSeconds = "+=4";

const animationTimeline = () => {
  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", standardAnimationDurationSeconds, fadeInOrOutDown)
    .to(
      ".one",
      standardAnimationDurationSeconds,
      fadeInOrOutDown,
      longDurationSeconds
    )
    .from(".two",standardAnimationDurationSeconds*2, fadeInOrOutDown)
    .to(
      ".two",
      standardAnimationDurationSeconds*2,
      fadeInOrOutDown,
      longDurationSeconds
    )
    .from(".three",standardAnimationDurationSeconds*2, fadeInOrOutDown)
    .to(
      ".three",
      standardAnimationDurationSeconds*2,
      fadeInOrOutDown,
      longDurationSeconds
    )
    .from(".four",standardAnimationDurationSeconds*2, fadeInOrOutDown)
    .to(
      ".four",
      standardAnimationDurationSeconds*2,
      fadeInOrOutDown,
      longDurationSeconds
    )
    .from(".five",standardAnimationDurationSeconds*2, fadeInOrOutDown)
    .to(
      ".five",
      standardAnimationDurationSeconds*2,
      fadeInOrOutDown,
      longDurationSeconds
    )
    .from(".six",standardAnimationDurationSeconds*2, fadeInOrOutDown)
    .to(
      ".six",
      standardAnimationDurationSeconds,
      fadeInOrOutDown,
      standardDurationSeconds
    )
    .from(".seven",standardAnimationDurationSeconds*2, fadeInOrOutDown)
    .to(
      ".seven",
      standardAnimationDurationSeconds,
      fadeInOrOutDown,
      standardDurationSeconds
    )
    .from(".eight",standardAnimationDurationSeconds*2, fadeInOrOutDown)
    .to(
      ".eight",
      standardAnimationDurationSeconds,
      fadeInOrOutDown,
      longDurationSeconds 
    )
    .from(".nine",standardAnimationDurationSeconds*2, fadeInOrOutDown)
    .staggerFromTo(
      ".balloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

animationTimeline();
