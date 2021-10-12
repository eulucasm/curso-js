import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`On port ${port}`);
  console.log(`CTRL + Click to http://localhost:${port}`);
});
