const score_URL = 'http://45.55.244.51:3000/api/v1/scores'
// const score_URL = 'http://localhost:3000/api/v1/scores'

const fail_data = {
id: 1, username: "Sorry, no data was found", total: 0, jumps: 0, deaths: 0, longest_streak: 0, bestjump_type: "N/A", bestjump_points: 0, easy: 0, gate_jumps: 0, gate_streak: 0, gate_points: 0, diagonal_jumps: 0, diagonal_streak: 0, diagonal_points: 0, fjump_jumps: 0, fjump_streak: 0, fjump_points: 0, sgate_jumps: 0, sgate_streak: 0, sgate_points: 0, platform_jumps: 0, platform_streak: 0, platform_points: 0, medium: 0, cascade_jumps: 0, cascade_streak: 0, cascade_points: 0, tbone_jumps: 0, tbone_streak: 0, tbone_points: 0, mjump2_jumps: 0, mjump2_streak: 0, mjump2_points: 0, shuriken_jumps: 0, shuriken_streak: 0, shuriken_points: 0, hdiamond_jumps: 0, hdiamond_streak: 0, hdiamond_points: 0, hard: 0, mjump1_jumps: 0, mjump1_streak: 0, mjump1_points: 0, diamond_jumps: 0, diamond_streak: 0, diamond_points: 0, bubble_jumps: 0, bubble_streak: 0, bubble_points: 0, vortex_jumps: 0, vortex_streak: 0, vortex_points: 0, hourglass_jumps: 0, hourglass_streak: 0, hourglass_points: 0, hardest: 0, plane_jumps: 0, plane_streak: 0, plane_points: 0, corner_jumps: 0, corner_streak: 0, corner_points: 0, valve_jumps: 0, valve_streak: 0, valve_points: 0, ninejump_jumps: 0, ninejump_streak: 0, ninejump_points: 0, ddiamond_jumps: 0, ddiamond_streak: 0, ddiamond_points: 0, created_at: "0000-00-00T00:00:00.000Z", updated_at: "0000-00-00T00:00:00.000Z" }

export class ScoreAdapter {

  static all() {
    return fetch(score_URL).then((res) => {
      if (res.ok)
        { return res.json() }
      else
        { throw new Error('Something went wrong') }
      }).catch((error) => {
        alert("Sorry something went wrong and no run data was found.\n\nPlease try again shortly.\n\nIf this problem persists please contact ShadowsDieAway on discord.")
        return [fail_data]
      })

  }

  static new(data) {
    return fetch(score_URL, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          username: "tehjman1993",

            total: 13.35,
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
