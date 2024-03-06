export default function () {
   
   const buttonPressAudio = new Audio("./audios/buttonPress.wav")

   const kitchenTimer = new Audio("./audios/kitchenTime.mp3")

   const bgAudio = new Audio("./audios/bgAudio.mp3")

   bgAudio.loop = true

   function pressButton() {
      buttonPressAudio.play()
   }

   function timeEnd() {
      kitchenTimer.play()
   }

   return {
      pressButton,
      timeEnd,
      bgAudio,
   }

}