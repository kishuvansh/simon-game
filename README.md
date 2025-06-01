
# Simon Game

A web-based implementation of the classic Simon Game, where players must repeat increasingly complex sequences of lights and sounds. Great for testing and improving your memory skills!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Game Rules](#game-rules)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

To get started, clone the repository and open the game in your web browser.

```bash
git clone https://github.com/kishuvansh/simon-game.git
cd simon-game
# Open index.html in your browser
```

No additional dependencies are required!

## Usage

1. Open `index.html` in your browser.
2. Press any key to start the game.
3. Repeat the sequence of colors as the game progresses.

## Game Rules

- The game will show a sequence of colors and sounds.
- Repeat the sequence by clicking the colored buttons in the correct order.
- Each round, the sequence gets longer and more challenging.
- If you make a mistake, the game will end, and you can start over.

## Examples
![image](https://github.com/user-attachments/assets/92c38cda-dbcd-4922-aa95-50b754141a68)

```javascript
// Example of sequence logic
var gamePattern = [];
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  // ...add color to pattern
}
```

## Contributing

Contributions are welcome!  
- Fork the repo
- Create a new branch
- Submit a pull request

## License

[MIT License](LICENSE)

## Contact

Created by [kishuvansh](https://github.com/kishuvansh).  
Feel free to reach out with suggestions or questions!
