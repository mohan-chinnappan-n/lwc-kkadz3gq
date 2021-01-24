import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Lesson-1";

  showQuotes = true;

  /**
   * Getter for the quotes property
   */
  get quotes() {
    return [
      {
        text: "An ounce of practice is worth more than tons of preaching.",
        author: "Mohandas K Gandhi",

        icon: "utility:edit",
        image: "https://mohan-chinnappan-n.github.io/gandhi-mahatma-large.jpg"
      } ,

      {
        text: "Earth provides enough to satisfy every man's needs, but not every man's greed.",
        author: "Mohandas K Gandhi",

        icon: "utility:edit",
        image: "https://mohan-chinnappan-n.github.io/gandhi-mahatma-large.jpg"
      } ,

      {
        text: "You have to dream before your dreams can come true.",
        author: "A.P.J Abdul Kalam",

        icon: "utility:edit",
        image: "https://mohan-chinnappan-n.github.io/about/img/apj.png"
      } ,

        {
        text: "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more. ",
        author: "Nikola Tesla",

        icon: "utility:edit",
        image: "https://mohan-chinnappan-n.github.io/about/img/teslaN.jpg"
      } 






    ];
  }
}
