import { TeamsTable } from "../teams/TeamsTable";

function Toolbar() {
  return (
    <div className="tbar">
      <button id="removeSelected">❌ Remove selected</button>
      <div className="tfill"></div>
      <input type="search" name="search" id="search" placeholder="Search" />
      <label htmlFor="search">🔎</label>
    </div>
  );
}

export function ContentWrapper() {
  return (
    <section id="main">
      <Toolbar />
      <TeamsTable />
    </section>
  );
}
