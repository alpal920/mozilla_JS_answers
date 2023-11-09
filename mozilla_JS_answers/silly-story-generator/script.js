const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


let storyText = `It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.`;


let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


randomize.addEventListener('click', result);



function result() {
  let xItem = insertX[Math.floor(Math.random()*insertX.length)];
  let yItem = insertY[Math.floor(Math.random()*insertY.length)];
  let zItem = insertZ[Math.floor(Math.random()*insertZ.length)];
  
  let newStory = storyText;
    newStory = newStory.replaceAll(":insertX:",xItem);
    newStory = newStory.replace(":insertY:",yItem);
    newStory = newStory.replace(":insertZ:",zItem);
  
 
    if(customName.value !== '') {
      const name = customName.value;
      newStory =  newStory.replace("Bob", name)
     

    }

    if(document.getElementById("uk").checked) {
      const weight = Math.round(300/14) + " Stone";
      const temperature =  Math.round((94-32)/1.8) + " Centigrade";
      newStory = newStory.replace("94 fahrenheit", weight);
      newStory = newStory.replace("300 pounds", weight);

    }

    story.textContent = newStory ;
    story.style.visibility = 'visible';
  }




