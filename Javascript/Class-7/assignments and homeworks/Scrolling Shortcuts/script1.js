// Implement key taps such that on:
// 1. pressing 1 you scroll to section 1,
// 2. pressing 2 you scroll to section 2 and
// 3. pressing 3 you scroll to section 3.
// 4. Also implement key tap b to go to bottom of the page
// 5. and key tap t to go to top of the page

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "1":
      document.getElementById("s1").scrollIntoView();
      break;
    case "2":
      document.getElementById("s2").scrollIntoView();
      break;
    case "3":
      document.getElementById("s3").scrollIntoView();
      break;
    case "b":
      window.scrollTo(0, document.body.scrollHeight);
      break;
    case "t":
      window.scrollTo(0, 0);
      break;
  }
});