import { useState } from "react";
import { days, schedule, generalNotes } from "./data/workouts";

export default function WorkoutPlan() {
  const [activeDay, setActiveDay] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const current = days[activeDay];

  return (
    <div style={{
      fontFamily: "'Bebas Neue', 'Impact', 'Arial Narrow', sans-serif",
      background: "#0a0a0a",
      minHeight: "100vh",
      color: "#f0ece0",
      padding: "0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
        .exercise-card {
          border: 1px solid #1e1e1e;
          border-radius: 6px;
          margin-bottom: 10px;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .exercise-card:hover { border-color: #333; }
        .exercise-card.open { border-color: var(--day-color); }
        .ex-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 16px;
          cursor: pointer;
          background: #111;
          user-select: none;
        }
        .ex-header:hover { background: #161616; }
        .ex-body {
          padding: 0 16px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.2s;
          background: #0d0d0d;
          font-family: 'DM Sans', sans-serif;
        }
        .ex-body.open {
          max-height: 300px;
          padding: 14px 16px;
        }
        .day-btn {
          border: 1px solid #222;
          background: #111;
          color: #555;
          cursor: pointer;
          padding: 10px 14px;
          border-radius: 6px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 15px;
          letter-spacing: 1px;
          transition: all 0.2s;
          flex: 1;
          text-align: center;
        }
        .day-btn:hover:not(:disabled) { border-color: #444; color: #aaa; }
        .day-btn.active { color: #0a0a0a; border-color: transparent; }
        .day-btn:disabled { opacity: 0.25; cursor: default; }
        .sched-cell {
          flex: 1;
          text-align: center;
          padding: 8px 4px;
          border-radius: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
        }
        .tag-pill {
          display: inline-block;
          border-radius: 20px;
          padding: 3px 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        .muscle-badge {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.7;
        }
      `}</style>

      {/* Header */}
      <div style={{
        background: "linear-gradient(180deg, #111 0%, #0a0a0a 100%)",
        borderBottom: "1px solid #1a1a1a",
        padding: "28px 20px 20px",
      }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: 4, color: "#555", marginBottom: 6, fontFamily: "'DM Sans', sans-serif" }}>
            UPPER BODY PROTOCOL
          </div>
          <h1 style={{ fontSize: 42, letterSpacing: 2, lineHeight: 1, marginBottom: 4 }}>
            4-DAY GYM PLAN
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#666", fontWeight: 300 }}>
            Smith Machine · Cables · Dumbbells · EZ Bar · Kettlebells
          </p>
        </div>
      </div>

      {/* Weekly schedule strip */}
      <div style={{ background: "#0d0d0d", borderBottom: "1px solid #1a1a1a", padding: "12px 20px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", gap: 4 }}>
          {schedule.map(({ day, plan }, i) => {
            const d = plan ? days.find((x) => x.id === plan) : null;
            return (
              <div key={day} className="sched-cell" style={{
                background: d ? d.color + "15" : "#111",
                border: `1px solid ${d ? d.color + "40" : "#1a1a1a"}`,
              }}>
                <div style={{ color: "#555", fontSize: 10, marginBottom: 2 }}>{day}</div>
                {d ? (
                  <div style={{ color: d.color, fontSize: 10, fontWeight: 500 }}>{d.label.split(" ")[1]}</div>
                ) : (
                  <div style={{ color: "#333", fontSize: 10 }}>REST</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "20px" }}>

        {/* Day selector */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          {days.map((d, i) => (
            <button
              key={d.id}
              className={`day-btn${activeDay === i ? " active" : ""}`}
              style={activeDay === i ? { background: d.color } : {}}
              onClick={() => { setActiveDay(i); setExpanded(null); }}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Current day header */}
        <div style={{
          background: current.color + "12",
          border: `1px solid ${current.color}30`,
          borderRadius: 8,
          padding: "18px 20px",
          marginBottom: 20,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 13, color: current.color, letterSpacing: 2, marginBottom: 4 }}>{current.label}</div>
              <div style={{ fontSize: 34 }}>{current.focus.toUpperCase()}</div>
            </div>
            <span className="tag-pill" style={{ background: current.color + "20", color: current.color }}>
              {current.tag}
            </span>
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#777", marginTop: 8 }}>
            {current.exercises.length} exercises · Click each to expand instructions
          </div>
        </div>

        {/* Exercise list */}
        <div style={{ "--day-color": current.color }}>
          {current.exercises.map((ex, i) => {
            const isOpen = expanded === i;
            return (
              <div key={i} className={`exercise-card${isOpen ? " open" : ""}`} style={{ "--day-color": current.color }}>
                <div className="ex-header" onClick={() => setExpanded(isOpen ? null : i)}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
                    <div style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: isOpen ? current.color : "#1e1e1e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      color: isOpen ? "#0a0a0a" : "#555",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                      flexShrink: 0,
                      transition: "all 0.2s",
                    }}>
                      {i + 1}
                    </div>
                    <div>
                      <div style={{ fontSize: 17, letterSpacing: 0.5, color: isOpen ? current.color : "#e0dbd0", transition: "color 0.2s" }}>
                        {ex.name.toUpperCase()}
                      </div>
                      <div className="muscle-badge" style={{ color: isOpen ? current.color + "bb" : "#555" }}>
                        {ex.muscle}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: current.color,
                      background: current.color + "15",
                      padding: "3px 10px",
                      borderRadius: 4,
                    }}>
                      {ex.sets}
                    </div>
                    <div style={{ color: "#444", fontSize: 18, transition: "transform 0.2s", transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}>+</div>
                  </div>
                </div>
                <div className={`ex-body${isOpen ? " open" : ""}`}>
                  <div style={{
                    fontSize: 11,
                    color: current.color,
                    background: current.color + "15",
                    borderRadius: 4,
                    padding: "4px 8px",
                    display: "inline-block",
                    marginBottom: 10,
                    letterSpacing: 0.5,
                    fontWeight: 500,
                  }}>
                    🔧 {ex.gear}
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: "#999", fontWeight: 300 }}>
                    {ex.how}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tips footer */}
        <div style={{
          marginTop: 28,
          padding: "20px",
          background: "#0d0d0d",
          borderRadius: 8,
          border: "1px solid #1a1a1a",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: 1, marginBottom: 12, color: "#f0ece0" }}>
            GENERAL NOTES
          </div>
          {generalNotes.map(([title, body]) => (
            <div key={title} style={{ marginBottom: 10, display: "flex", gap: 10 }}>
              <div style={{ color: "#e8a02e", fontWeight: 500, fontSize: 12, flexShrink: 0, paddingTop: 1 }}>▸</div>
              <div>
                <span style={{ color: "#e0dbd0", fontWeight: 500, fontSize: 13 }}>{title}: </span>
                <span style={{ color: "#666", fontSize: 13 }}>{body}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
