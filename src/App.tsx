import MyComponent from './MyComponent';

function App() {
  const state = {
    name: 'react',
  };

  console.log(state);

  return (
    <div>
      <MyComponent age={25}>
        <div>둘둘</div>
      </MyComponent>
    </div>
  );
}

export default App;
