# Frontend Mentor - Tic Tac Toe solution

This is a solution to the [Tic Tac Toe challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size ✅
- See hover states for all interactive elements on the page ✅
- Play the game either solo vs the computer or multiplayer against another person 🟨 (only PVP works at this point)


### Links

- Solution URL: [GitHub Repository](https://github.com/chocolateflight/react-tic-tac-toe)
- Live Site URL: [Vercel](https://react-tic-tac-toe-chocolateflight.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- TypeScript
- [React](https://reactjs.org/) - JS library

### What I learned

I learned how to use some JavaScript concepts, such as array functions. I also learned for myself that it is okay to make small mistakes as long as you learn from them. For example, I confused && with || and it took me a long time to find this mistake. The good thing is that I probably won't make this mistake again. 

All components were written in TypeScript.  While no advanced TypeScript features were used, I was able to learn a lot about types and see how TypeScript can detect bugs in the development process while writing.


#### *Logic to determine the winner*

```ts
  useEffect(() => {
    if (data[0] === data[1] && data[0] === data[2] && data[0] !== '') {
      updateWinner(data[0]);
    } else if (data[3] === data[4] && data[3] === data[5] && data[3] !== '') {
      updateWinner(data[3]);
    } else if (data[6] === data[7] && data[6] === data[8] && data[6] !== '') {
      updateWinner(data[6]);
    } else if (data[0] === data[3] && data[0] === data[6] && data[0] !== '') {
      updateWinner(data[0]);
    } else if (data[1] === data[4] && data[1] === data[7] && data[1] !== '') {
      updateWinner(data[1]);
    } else if (data[2] === data[5] && data[2] === data[8] && data[2] !== '') {
      updateWinner(data[2]);
    } else if (data[0] === data[4] && data[0] === data[8] && data[0] !== '') {
      updateWinner(data[0]);
    } else if (data[2] === data[4] && data[2] === data[6] && data[2] !== '') {
      updateWinner(data[2]);
    } else if (!data.includes('')) {
      updateWinner('tie');
    }
  });
```

#### *Game logic for selecting the fields*
```ts
const onClick = (event: React.MouseEvent) => {
  const target = event.currentTarget as HTMLElement;
  if (data[+target.id] !== 'x' && data[+target.id] !== 'o') {
    data[+target.id] = props.currentPlayer;
    target.innerHTML = `${props.currentPlayer === 'x' ? x : o}`;
    props.updateData(data);
  }
  if (props.gameMode === "pvp") {
    if (props.currentPlayer === "x") {
      props.updatePlayer("o");
    } else if (props.currentPlayer === "o") {
      props.updatePlayer("x")
    }
  }
};

const ids: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

return (
  <>
    {ids.map((id) => {
      return (
        <div
          id={id}
          key={id}
          className='inputfield w-[96px] h-[96px] flex justify-center items-center bg-greenLight col-span-1 rounded-lg shadow-darkest px-[28px] py-[24px] md:h-[140px] md:w-[140px]'
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        ></div>
      );
    })}
  </>
);

```

### Continued development

I have the impression that I have used far too many useStates in this project. I want to learn how to avoid this by perhaps using more advanced React features. My goal with this project was to learn more about how React and Typescript work together. In future projects, I want to pay more attention to scalability (e.g. building a better version of the logic to determine the winner) as well as making some aspects of the code more readable. 

### Useful resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation) - Great resource when working with Tailwind CSS

## Author

- GitHub - [@chocolateflight](https://github.com/chocolateflight)
- Frontend Mentor - [@chocolateflight](https://www.frontendmentor.io/profile/chocolateflight)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**