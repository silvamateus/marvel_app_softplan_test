import data from '../marvel.json' 
export default async function dataCheck(state, action) {
  if(state)
    return state
  else
    return data

}