import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingHearts from "./components/FloatingHearts";
import Envelope from "./components/Envelope";
import Question from "./components/Question";
import DestinationChoice from "./components/DestinationChoice";
import DetailForm from "./components/DetailForm";
import Summary from "./components/Summary";

// Urutan fase aplikasi:
// envelope -> question -> destination -> form -> summary
function App() {
  const [phase, setPhase] = useState("envelope");

  // Data bersama antar fase
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const reset = () => {
    setDestination(null);
    setDate("");
    setMessage("");
    setPhase("envelope");
  };

  return (
    <div className="relative min-h-svh w-full overflow-hidden bg-gradient-to-br from-rose-100 via-pink-100 to-purple-200">
      <FloatingHearts />

      <main className="relative z-10 flex min-h-svh items-center justify-center p-4 sm:p-6">
        <AnimatePresence mode="wait">
          {phase === "envelope" && (
            <Envelope key="envelope" onOpen={() => setPhase("question")} />
          )}

          {phase === "question" && (
            <Question key="question" onYes={() => setPhase("destination")} />
          )}

          {phase === "destination" && (
            <DestinationChoice
              key="destination"
              selected={destination}
              onSelect={setDestination}
              onNext={() => setPhase("form")}
            />
          )}

          {phase === "form" && (
            <DetailForm
              key="form"
              destination={destination}
              date={date}
              setDate={setDate}
              message={message}
              setMessage={setMessage}
              onBack={() => setPhase("destination")}
              onSubmit={() => setPhase("summary")}
            />
          )}

          {phase === "summary" && (
            <Summary
              key="summary"
              destination={destination}
              date={date}
              message={message}
              onReset={reset}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
