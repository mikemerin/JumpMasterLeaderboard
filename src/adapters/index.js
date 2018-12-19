// const score_URL = 'http://45.55.244.51:3000/api/v1/scores'
// const score_URL = 'http://localhost:3000/api/v1/scores'
const score_URL = 'https://jumpmasterapi.herokuapp.com/api/v1/'

const fail_data = {
id: 1, username: "Sorry, no data was found", total: 0, jumps: 0, deaths: 0, longest_streak: 0, bestjump_type: "N/A", bestjump_points: 0, easy: 0, gate_jumps: 0, gate_streak: 0, gate_points: 0, diagonal_jumps: 0, diagonal_streak: 0, diagonal_points: 0, fjump_jumps: 0, fjump_streak: 0, fjump_points: 0, sgate_jumps: 0, sgate_streak: 0, sgate_points: 0, platform_jumps: 0, platform_streak: 0, platform_points: 0, medium: 0, cascade_jumps: 0, cascade_streak: 0, cascade_points: 0, tbone_jumps: 0, tbone_streak: 0, tbone_points: 0, mjump2_jumps: 0, mjump2_streak: 0, mjump2_points: 0, shuriken_jumps: 0, shuriken_streak: 0, shuriken_points: 0, hdiamond_jumps: 0, hdiamond_streak: 0, hdiamond_points: 0, hard: 0, mjump1_jumps: 0, mjump1_streak: 0, mjump1_points: 0, diamond_jumps: 0, diamond_streak: 0, diamond_points: 0, bubble_jumps: 0, bubble_streak: 0, bubble_points: 0, vortex_jumps: 0, vortex_streak: 0, vortex_points: 0, hourglass_jumps: 0, hourglass_streak: 0, hourglass_points: 0, hardest: 0, plane_jumps: 0, plane_streak: 0, plane_points: 0, corner_jumps: 0, corner_streak: 0, corner_points: 0, valve_jumps: 0, valve_streak: 0, valve_points: 0, ninejump_jumps: 0, ninejump_streak: 0, ninejump_points: 0, ddiamond_jumps: 0, ddiamond_streak: 0, ddiamond_points: 0, created_at: "0000-00-00T00:00:00.000Z", updated_at: "0000-00-00T00:00:00.000Z" }

var jump_types = [];
var fail_data_jumps = {};
var jump_array = [
      'gate', 'diagonal', 'fjump', 'sgate', 'platform',
      'cascade', 'tbone', 'mjump2', 'shuriken', 'hdiamond',
      'mjump1', 'diamond', 'bubble', 'vortex', 'hourglass',
      'plane', 'corner', 'valve', 'ninejump', 'ddiamond'
      ];


jump_array.forEach(jump => {
	['_jumps', '_streak', '_points'].forEach(type => {
		jump_types.push(jump + type);
    })
})

jump_types.forEach(x => {
	fail_data_jumps[x] = { 'username': '', 'multi': {}, 'id': '', 'number': 0 }
})

export class ScoreAdapter {

  static all() {
    return fetch(score_URL + "scores").then((res) => {
      if (res.ok)
        { return res.json() }
      else
        { throw new Error('Something went wrong') }
      }).catch((error) => {
        alert("Sorry something went wrong and no run data was found.\n\nPlease try again shortly.\n\nIf this problem persists please contact ShadowsDieAway on discord.")
        return [fail_data]
      })

  }

  static jumps() {
    return fetch(score_URL + "top_jumps_with_names").then((res) => {
      if (res.ok)
        { return res.json() }
      else
        { throw new Error('Something went wrong') }
      }).catch((error) => {
        alert("Sorry something went wrong and no run data was found.\n\nPlease try again shortly.\n\nIf this problem persists please contact ShadowsDieAway on discord.")
        return [fail_data_jumps]
      })
  }

  static extra_jumps() {
    return fetch(score_URL + "jumps").then((res) => {
      if (res.ok)
        { return res.json() }
      else
        { throw new Error('Something went wrong') }
      }).catch((error) => {
        alert("Sorry something went wrong and no extra jump data was found.\n\nPlease try again shortly.\n\nIf this problem persists please contact ShadowsDieAway on discord.")
        // return [fail_data_jumps]
      })
  }

  static extra_jumps_top() {
    return fetch(score_URL + "extra_jumps").then((res) => {
      if (res.ok)
        { return res.json() }
      else
        { throw new Error('Something went wrong') }
      }).catch((error) => {
        alert("Sorry something went wrong and no extra jump top score data was found.\n\nPlease try again shortly.\n\nIf this problem persists please contact ShadowsDieAway on discord.")
        // return [fail_data_jumps]
      })
  }
}
