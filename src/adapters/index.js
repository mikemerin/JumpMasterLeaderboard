const score_URL = 'http://localhost:3000/api/v1/scores'

export class ScoreAdapter {

  static all() {
    return fetch(score_URL)
      .then( res => res.json() )
  }

}
