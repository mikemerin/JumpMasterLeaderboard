// const score_URL = 'http://45.55.244.51:3000/api/v1/scores'
const score_URL = 'http://localhost:3000/api/v1/scores'

export class ScoreAdapter {

  static all() {
    return fetch(score_URL)
      .then( res => res.json() )
  }

  static new(data) {
    return fetch(score_URL, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          username: "tehjman1993",

            total: 1496.35,
            jumps: 409,
            deaths: 221,
            longest_streak: 42,
            bestjump_type: "corner",
            bestjump_points: 125.64,

            easy: 261.77,
            gate_jumps: 48,
            gate_streak: 42,
            gate_points: 102.01,
            diagonal_jumps: 31,
            diagonal_streak: 10,
            diagonal_points: 50.68,
            fjump_jumps: 31,
            fjump_streak: 10,
            fjump_points: 36.09,
            sgate_jumps: 30,
            sgate_streak: 11,
            sgate_points: 43.68,
            platform_jumps: 16,
            platform_streak: 16,
            platform_points: 29.32,

            medium: 337.22,
            cascade_jumps: 24,
            cascade_streak: 13,
            cascade_points: 77.46,
            tbone_jumps: 26,
            tbone_streak: 10,
            tbone_points: 78.40,
            mjump2_jumps: 22,
            mjump2_streak: 16,
            mjump2_points: 72.80,
            shuriken_jumps: 21,
            shuriken_streak: 12,
            shuriken_points: 61.7,
            hdiamond_jumps: 26,
            hdiamond_streak: 13,
            hdiamond_points: 86.39,

            hard: 376.78,
            mjump1_jumps: 16,
            mjump1_streak: 6,
            mjump1_points: 73.85,
            diamond_jumps: 25,
            diamond_streak: 11,
            diamond_points: 118.39,
            bubble_jumps: 17,
            bubble_streak: 7,
            bubble_points: 73.01,
            vortex_jumps: 15,
            vortex_streak: 6,
            vortex_points: 60.71,
            hourglass_jumps: 12,
            hourglass_streak: 6,
            hourglass_points: 50.81,

            hardest: 438.10,
            plane_jumps: 14,
            plane_streak: 9,
            plane_points: 125.64,
            corner_jumps: 19,
            corner_streak: 4,
            corner_points: 139.90,
            valve_jumps: 12,
            valve_streak: 3,
            valve_points: 66.48,
            ninejump_jumps: 10,
            ninejump_streak: 3,
            ninejump_points: 66.48,
            ddiamond_jumps: 4,
            ddiamond_streak: 2,
            ddiamond_points: 25.81
          }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    }).then( res => res.json() )
  }

}
