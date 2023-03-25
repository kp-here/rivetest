import "./styles.css";
import { useRive } from "@rive-app/react-canvas";
import { useInView } from "react-intersection-observer";
import riveBotAnimationUrl from "./bot.riv";
import ImagePlaceholder from "./ImagePlaceholder";

const ART_BORD = "HeroBot";
const STATE_MACHINE_NAME = "State Machine 1";

export default function App() {
  const { RiveComponent, rive } = useRive({
    src: riveBotAnimationUrl,
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
    artboard: ART_BORD
  });

  const [ref, isInView] = useInView({
    triggerOnce: true,
    // rootMargin: "200px"
    threshold: 0.2
  });

  return (
    <div className="App">
      <section className="hero">
        <div>
          <h1>Rive Lazy Loading Example</h1>
          <p>Scroll down the page and look at network tab</p>
        </div>
      </section>
      <section ref={ref} className="animation-container">
        <ImagePlaceholder height={400} width={400}>
          {isInView && <RiveComponent />}
        </ImagePlaceholder>
      </section>
    </div>
  );
}
