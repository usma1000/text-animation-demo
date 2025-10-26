import "./App.css";
import SplitText from "./components/SplitText";
import BlurText from "./components/BlurText";

function App() {
  return (
    <>
      <SplitText
        text="Be a force"
        className="text-parent"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      <BlurText
        text="Be a force"
        className="text-parent"
        delay={50}
        animateBy="letters"
        direction="bottom"
      />
    </>
  );
}

export default App;
