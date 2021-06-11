const app = Vue.createApp({
  el:'#app'
  data() {
    return {
      questions: [
        {
          question: "how many for a week?",
          answers: { a: "7", b: "6" ,c:"9",d="5"},
          correctans: "a"
        },
        {
          question: " how many colors in a rainbow?",
          answers: { a: "7", b: "8" ,c:"9",d="10"},
          correctans: "a"
        },
        {
          question: " how many letters are there in english alphabets?",
          answers: { a: "26", b: "25" ,c:"27",d="29" },
          correctans: "a"
        }
      ]
    };
  }
});
app.mount("#app");
