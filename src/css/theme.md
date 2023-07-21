# Theme management using CSS Global Variables

- [requirement](#requirement)
- [solution](#solution)

## requirement

- Scale up multi theme application
- ablility to add new theme with ease
- Reduce rerender/renders asmuch as possible

## solution

- `step 1` : Define golbal theme dependent css variables in root, this will be default theme.

```scss
:root {
  --primary-hero-col: black; // primary color
  --primary-background-col: white; // primary background color
  --secondary-background-col: grey; // intermediate background color
  --primary-shadow: var(--shadow-1) grey; // shadows
  --primary-border: var(--border) black solid;
}
```

- `step 2` : Define css theme classes with same theme dependent css variables' name

```scss
.dark_ {
  --primary-hero-col: rgb(255, 255, 255);
  --primary-background-col: rgb(0, 0, 0);
  --secondary-background-col: rgb(124, 124, 124);
  --primary-shadow: 2px 2px 2px 2px rgb(212, 212, 212);
  --primary-border: var(--border) rgb(255, 255, 255) solid;
}

.neon_ {
  --primary-hero-col: var(--neon-col);
  --primary-background-col: rgb(1, 39, 52);
  --secondary-background-col: rgb(109, 88, 88);
  --primary-shadow: var(--shadow-1) grey;
  --primary-border: var(--border) var(--neon-col) solid;
}

.lime_ {
  --primary-hero-col: lime;
  --primary-background-col: rgb(2, 53, 2);
  --secondary-background-col: rgb(109, 88, 88);
  --primary-shadow: var(--shadow-1) grey;
  --primary-border: var(--border) lime solid;
}
```

- `step 3` : add the theme name for App component

```ts
<Div class="App neon_>
```
