import { useState } from "react";

const days = [
  {
    id: 1,
    label: "DAY 1",
    focus: "Chest & Abs",
    tag: "PUSH + CORE",
    color: "#e84a2e",
    exercises: [
      {
        name: "Smith Machine Incline Press",
        sets: "4 × 8–10",
        gear: "Smith Machine + Adjustable Bench (high incline)",
        muscle: "Upper Chest",
        how: "Set the bench to ~45°. Unrack the bar at chest level, lower it to your upper chest slowly (2–3 sec), then press explosively. The incline targets upper chest directly to fix that droopy lower-chest look. Keep shoulder blades pinched.",
      },
      {
        name: "Dumbbell Flat Chest Press",
        sets: "4 × 10–12",
        gear: "Dumbbells 20–28kg + Flat Bench",
        muscle: "Mid Chest",
        how: "Lie flat, dumbbells at chest level with elbows at ~75°. Press up and squeeze at the top as if trying to crush a pencil between your pecs. Lower slowly. Full range of motion builds shape.",
      },
      {
        name: "Cable Crossover (Low → High)",
        sets: "3 × 12–15",
        gear: "Cable Station — set pulley low, no bar needed",
        muscle: "Upper Chest / Inner Chest",
        how: "Attach a single handle low on the cable. Lean slightly forward, pull the cable up and across your body to opposite shoulder, squeezing the chest at peak. This sweeps upward — hits the upper-inner chest for that defined line.",
      },
      {
        name: "Dumbbell Fly",
        sets: "3 × 12",
        gear: "Dumbbells 12–16kg + Flat Bench",
        muscle: "Chest Stretch / Outer Chest",
        how: "Flat on bench, arms slightly bent. Lower dumbbells wide in a wide arc until you feel a deep stretch, then arc them back together. Don't press — keep the arc. Builds width and that coveted pec fullness.",
      },
      {
        name: "Cable Crunch",
        sets: "4 × 15",
        gear: "Cable Station — attach single rope or use one handle",
        muscle: "Abs",
        how: "Kneel facing cable, hold the attachment behind/at your head. Crunch your elbows toward your knees, rounding the spine hard. Pause at the bottom. Don't pull with your arms — the abs do the work.",
      },
      {
        name: "Hanging Knee Raise (from Smith Bar)",
        sets: "3 × 15–20",
        gear: "Smith Machine (hang from bar)",
        muscle: "Lower Abs",
        how: "Set the Smith bar high. Hang from it and pull your knees to your chest, curling your pelvis up. Lower slowly. For more intensity, keep legs straight.",
      },
      {
        name: "Oblique Cable Twist",
        sets: "3 × 12 each side",
        gear: "Cable Station — mid height",
        muscle: "Obliques",
        how: "Stand side-on to the cable, arms extended. Rotate your torso away from the cable, keeping hips locked forward. Resist the return slowly. Builds those side cuts.",
      },
    ],
  },
  {
    id: 2,
    label: "DAY 2",
    focus: "ARMS",
    tag: "BICEPS · TRICEPS · FOREARMS",
    color: "#2e8ae8",
    exercises: [
      {
        name: "EZ Bar Curl",
        sets: "4 × 8–10",
        gear: "EZ Bar + Plates",
        muscle: "Biceps (peak)",
        how: "Hold the EZ bar at the inner angled grip. Curl from full extension to chin level. Do NOT swing. Squeeze hard at the top and lower over 3 seconds. The EZ bar is easier on wrists than a straight bar.",
      },
      {
        name: "Dumbbell Hammer Curl",
        sets: "3 × 10–12",
        gear: "Dumbbells 14–20kg",
        muscle: "Brachialis + Forearm thickness",
        how: "Hold dumbbells with a neutral (hammer) grip — thumbs pointing up. Curl alternately or together. This targets the brachialis muscle which pushes the bicep peak UP, and builds forearm width. Key for that vascular look.",
      },
      {
        name: "Cable Curl (Single Arm)",
        sets: "3 × 12 each arm",
        gear: "Cable Station — low pulley, single handle",
        muscle: "Biceps (constant tension)",
        how: "Set cable low. Stand back slightly, curl one arm up keeping elbow pinned to your side. Cable provides constant tension unlike dumbbells — great for the squeeze at the top. Supinate (twist) your wrist at the top for full contraction.",
      },
      {
        name: "Archer Pull (Cable)",
        sets: "4 × 8–10 each side",
        gear: "Cable Station — mid-to-high pulley",
        muscle: "Biceps, Brachialis, Rear Delt",
        how: "Stand sideways to the cable, arm extended gripping the handle. Pull it toward your face in a rowing arc — elbow goes back and up — as if drawing a bow. Your pulling arm is bent like an archer. Massive bicep and brachialis engagement. Switch sides.",
      },
      {
        name: "Skull Crushers (EZ Bar)",
        sets: "4 × 10",
        gear: "EZ Bar + Plates + Flat Bench",
        muscle: "Triceps (long head)",
        how: "Lie on flat bench, grip EZ bar narrow. Lower the bar toward your forehead by bending only at the elbow, then press back up. Elbows stay pointing at the ceiling throughout. Long head gets fully stretched — this is where most tricep mass is built.",
      },
      {
        name: "Cable Tricep Pushdown (Rope or Handle)",
        sets: "4 × 12",
        gear: "Cable Station — high pulley, use single handle or two handles",
        muscle: "Triceps (lateral head)",
        how: "Face the cable, grip the handle(s) with an overhand grip. Push DOWN until arms are fully extended, flaring hands outward at the bottom. Squeeze hard. Keep elbows pinned to your sides throughout. The lateral head gives that horseshoe shape.",
      },
      {
        name: "Overhead Tricep Extension (Dumbbell)",
        sets: "3 × 12",
        gear: "One heavy Dumbbell (20–26kg)",
        muscle: "Triceps (long head, overhead stretch)",
        how: "Hold one dumbbell with both hands overhead. Lower it behind your head by bending your elbows, then press back up. Long head is maximally stretched in this position — works a different angle than pushdowns.",
      },
      {
        name: "Wrist Roller / Dumbbell Wrist Curl",
        sets: "3 × 15–20",
        gear: "Dumbbells 12–14kg",
        muscle: "Forearm flexors",
        how: "Sit on bench, forearms resting on thighs with wrists hanging off the edge. Curl the dumbbells upward using only your wrists, lower slowly. Builds that thick forearm that makes veins pop. Follow with reverse curls for extensors.",
      },
      {
        name: "Reverse EZ Bar Curl",
        sets: "3 × 12",
        gear: "EZ Bar (light plates)",
        muscle: "Forearm extensors + Brachialis",
        how: "Grip the EZ bar with an overhand (pronated) grip. Curl it up to chin height. Much harder than a regular curl — works the top of the forearm and makes veins appear on the outer forearm. Go lighter than your normal curl.",
      },
      {
        name: "Plate Pinch Hold",
        sets: "3 × 30–45 sec",
        gear: "Two weight plates",
        muscle: "Grip strength + Forearm vascularity",
        how: "Pinch two plates together (smooth sides out) between your fingers and thumb and hold for time. No hook grip — pure finger strength. This builds crushing grip strength and causes insane forearm pump that drives vascularity over time.",
      },
    ],
  },
  {
    id: 3,
    label: "DAY 3",
    focus: "Back & Lats",
    tag: "PULL + WIDTH",
    color: "#2ec87a",
    exercises: [
      {
        name: "Lat Pulldown (Wide Grip)",
        sets: "4 × 8–10",
        gear: "Lat Pulldown Machine",
        muscle: "Lats (width)",
        how: "Grip the bar as wide as possible. Lean back slightly (~15–20°), pull the bar to your upper chest, leading with your elbows pointing down and back. Squeeze your lats at the bottom. Slow return. This is your primary width builder — creates the V-taper.",
      },
      {
        name: "Single Arm Dumbbell Row",
        sets: "4 × 10 each side",
        gear: "Dumbbell 24–30kg + Flat Bench",
        muscle: "Mid Lats, Rhomboids",
        how: "Plant one knee and hand on the bench, torso parallel to floor. Row the dumbbell up to your hip — not your shoulder. Think 'elbow to hip'. Full stretch at the bottom. This builds lat thickness and the detail that makes your back look 3D.",
      },
      {
        name: "Cable Straight-Arm Pulldown",
        sets: "3 × 12–15",
        gear: "Cable Station — high pulley, single handle",
        muscle: "Lats (serratus / lower lat sweep)",
        how: "Face the cable, arm extended overhead. Keeping your arm dead straight, pull the handle down to your hip. Hinge at the shoulder only. This is pure lat isolation — builds the lower lat sweep visible from the side.",
      },
      {
        name: "Archer Pull (Cable — Back Focus)",
        sets: "4 × 8 each side",
        gear: "Cable Station — high pulley",
        muscle: "Lat, Rear Delt, Rhomboid",
        how: "Stand sideways to the cable, arm extended up at ~45°. Pull the handle down and toward your hip in an arcing motion, like an archer drawing a bow with your body. This combo hits the lat AND the rear delt in one move. Incredible for width and that swept-back look.",
      },
      {
        name: "Smith Machine Bent-Over Row",
        sets: "4 × 8–10",
        gear: "Smith Machine",
        muscle: "Upper Back, Traps, Rhomboids",
        how: "Hinge at hips to ~45°, grip the bar slightly wider than shoulders. Row it to your lower chest/navel, squeezing your shoulder blades together at the top. Lower slowly. The Smith locks the path so you can focus entirely on the back muscles.",
      },
      {
        name: "Face Pull (Cable)",
        sets: "3 × 15",
        gear: "Cable Station — mid-to-high pulley, one handle each hand",
        muscle: "Rear Delts, External Rotators",
        how: "Use both cable handles at face height. Pull them toward your face, elbows flaring high and out, hands ending beside your ears. Squeeze hard. Crucial for rear delt and external rotation health — fixes rounded shoulders and creates that 3D shoulder look.",
      },
      {
        name: "Kettlebell Deadlift",
        sets: "3 × 12",
        gear: "Heavy Kettlebell(s)",
        muscle: "Lower Back, Erectors, Glutes",
        how: "Kettlebell between your feet, hip-width stance. Hinge at hips, grip the bell, keep back flat. Drive through your heels to stand tall, squeezing glutes at the top. Not a squat — it's a hip hinge. Strengthens the lower back for a complete back.",
      },
    ],
  },
  {
    id: 4,
    label: "DAY 4",
    focus: "Shoulders & Obliques",
    tag: "DELTS + CORE",
    color: "#c82edd",
    exercises: [
      {
        name: "Smith Machine Overhead Press",
        sets: "4 × 8–10",
        gear: "Smith Machine + Adjustable Bench (upright)",
        muscle: "Front & Mid Delts",
        how: "Set bench upright inside the Smith. Press the bar from chin level overhead until arms are nearly locked. Lower slowly. The Smith lets you go heavier safely without a spotter. This is your primary shoulder mass builder. Don't arch your lower back excessively.",
      },
      {
        name: "Dumbbell Lateral Raise",
        sets: "4 × 15–20",
        gear: "Dumbbells 12–16kg",
        muscle: "Lateral Delts (WIDTH)",
        how: "Stand with dumbbells at your sides. Raise them out to the side until parallel to the floor — lead with your pinkies (as if pouring water). Pause at top, lower slowly over 3 seconds. This is THE exercise for broader shoulders. Do NOT go heavy and swing. Control wins.",
      },
      {
        name: "Cable Lateral Raise (Single Arm)",
        sets: "3 × 15 each side",
        gear: "Cable Station — low pulley",
        muscle: "Lateral Delt (constant tension)",
        how: "Stand beside the cable, arm crosses in front, grab the handle with the far hand. Raise it out to the side. Cable keeps tension through the whole lift unlike dumbbells (which go slack at the bottom). Perfect superset with dumbbell laterals.",
      },
      {
        name: "Dumbbell Arnold Press",
        sets: "3 × 10–12",
        gear: "Dumbbells 16–22kg",
        muscle: "All 3 delt heads",
        how: "Start with dumbbells at chin level, palms facing you. As you press up, rotate your palms to face forward at the top. Reverse on the way down. Hits all three heads of the deltoid in one motion. Named after the man himself.",
      },
      {
        name: "Dumbbell Rear Delt Fly",
        sets: "4 × 15",
        gear: "Dumbbells 12–16kg",
        muscle: "Rear Delts, Upper Back",
        how: "Hinge forward at hips until torso is nearly horizontal. Raise dumbbells out to the sides with a slight bend in the elbows, squeezing shoulder blades together at the top. Rear delts balance the shoulder — front delts are already trained by pressing. Critical for that 3D round shoulder look.",
      },
      {
        name: "Cable Upright Row",
        sets: "3 × 12",
        gear: "Cable Station — low pulley, use one handle each hand",
        muscle: "Lateral Delt, Upper Traps",
        how: "Hold handles with an overhand grip, stand close to the cable. Pull up to chin height with elbows flaring out and above hands. Keep the movement controlled. Wide grip targets delts more than traps — don't go too narrow.",
      },
      {
        name: "Pallof Press",
        sets: "3 × 12 each side",
        gear: "Cable Station — mid height",
        muscle: "Obliques, Core Anti-Rotation",
        how: "Stand sideways to the cable, hold the handle at chest level with both hands. Press it straight out in front of you and hold for 1–2 sec, then return. The cable tries to rotate you — your obliques resist. Best oblique exercise you're not doing.",
      },
      {
        name: "Russian Twist (Weighted)",
        sets: "3 × 20",
        gear: "Dumbbell or Kettlebell on mat",
        muscle: "Obliques",
        how: "Sit on mat, lean back ~45°, feet raised. Hold dumbbell with both hands and rotate side to side, touching the dumbbell near the floor each side. Keep your chest up. Slow controlled rotation — fast and sloppy does nothing.",
      },
      {
        name: "Dead Bug",
        sets: "3 × 10 each side",
        gear: "Mat",
        muscle: "Deep Core / Anti-Extension",
        how: "Lie on back, arms pointing at ceiling, knees at 90°. Simultaneously lower the opposite arm and leg toward the floor while exhaling and pressing your lower back INTO the mat. Return and switch. Builds deep core stability that makes everything else stronger.",
      },
    ],
  },
];

const schedule = [
  { day: "MON", plan: 1 },
  { day: "TUE", plan: 2 },
  { day: "WED", plan: null },
  { day: "THU", plan: 3 },
  { day: "FRI", plan: 4 },
  { day: "SAT", plan: null },
  { day: "SUN", plan: null },
];

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
            const d = plan ? days[plan - 1] : null;
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
          {[
            ["Progression", "Add reps or weight each week. Once you hit the top rep range for all sets, increase weight."],
            ["Rest", "60–90 sec between sets for isolation. 2–3 min for heavy compound lifts."],
            ["Forearm vascularity", "Keep forearm work at the END of arm day — the pump from the session drives it. Stay hydrated and lean body fat slightly."],
            ["Chest shape", "Incline work is your priority. Lower chest droopiness is fixed with upper chest dominance, not decline presses."],
            ["Shoulder width", "Lateral raises are king. Do them every shoulder session, never skip, never go heavy and sloppy."],
            ["Archer Pulls", "These appear on both back and arm day — they're a compound movement. On arm day, focus on the bicep squeeze. On back day, focus on the lat and rear delt drive."],
          ].map(([title, body]) => (
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