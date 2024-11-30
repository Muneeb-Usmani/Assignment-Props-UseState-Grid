import Grid from "./components/Grid";
import State from "./components/State";
import UserData from "./components/UserData";

export default function Home() {
  return (
    <>
      <section id="props">
        <UserData />
      </section>

      <section id="usestate">
        <State />
      </section>

      <section id="grid">
        <Grid />
      </section>
    </>
  );
}
