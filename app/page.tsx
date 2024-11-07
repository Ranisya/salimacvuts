import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/RiwayatPekerjaan";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import RiwayatKepanitiaan from "./components/RiwayatKepanitiaan";
import SkillList from "./components/Skills";
import "./salima-style.css";

export default function CVOnline() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <RiwayatKepanitiaan />
      <SkillList />
    </section>
  );
} 