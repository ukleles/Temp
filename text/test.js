// var tc = require('text-censor')
// tc.filter('Ur so sexy babe!',function(err, censored){
//     console.log(censored) // 'Ur so ***y babe!'
// })
// 
/**
 * Created by kzz555 on 16/10/13.
 */

var tc = require('text-censor')

describe('index', ()=> {
  describe('#filter(s)', ()=> {
    it('try word "sex"', (done)=> {
      tc.filter('你好!',(err,filtered)=>{
        console.log(filtered)
        // if(filtered == 'Ur so ***y babe!') done()
        // else throw new Error('replace failed')
      })
    });
  })
});
