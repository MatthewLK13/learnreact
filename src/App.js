function MyButton() {
  return (
    <button>  
      I'll make button
    </button>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </div>
  );
}

export default function MyApp() {
  return(
    <> 
      <h1>  
       I'll make button
      </h1>
      <MyButton />
      <AboutPage />
    </>
  );
}
