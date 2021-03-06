

<!-- Destructured Assignment -->



const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

<!-- Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot. -->


const {functionality} = robot ;

<!-- Take advantage of this shortcut and call the .beep() method on functionality. -->

functionality.beep()