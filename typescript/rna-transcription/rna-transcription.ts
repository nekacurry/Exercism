class Transcriptor {
  toRna(DNA: string): string {
    let RNA = ''
    for (let i = 0; i< DNA.length; i += 1){
      switch(DNA[i]){
        case 'G':
          RNA += 'C'
          break
        case 'C':
          RNA += 'G'
          break
        case 'T':
          RNA += 'A'
          break
        case 'A':
          RNA += 'U'
          break
        default:
          throw new Error('Invalid input DNA.')
      }
    }
    return RNA
  }
}


export default Transcriptor
