import customs from './module/custom.js'
import prompts from 'prompts'

function start(){
    (async () => {
        const prompt = await prompts({
          type: 'text',
          name: 'res',
          message: 'Please select an option. \n[1] Customs \n[2] Something2  \n[3] Exit \n> '
        });
      
        let responce = prompt.res
        if(responce === undefined){
          console.clear()
          console.log('Invalid responce.')
          start()
        }
        else if((responce === '1') || (responce.toLowerCase() === 'customs')){
            console.clear()
            const customQuestion = [
                {
                  type: 'text',
                  name: 'txt',
                  message: 'What text do you want displayed? (MUST be >2 characters.)'
                },
                {
                  type: 'text',
                  name: 'img',
                  message: 'Which image do you want displayed? (Image must be added in rich presence.)'
                },
                {
                  type: 'text',
                  name: 'imgtxt',
                  message: 'What do you want the image text to be? '
                }
              ];
              
              (async () => {
                const customResponse = await prompts(customQuestion);
                customs(customResponse.txt, customResponse.img, customResponse.imgtxt)
                console.log('Done.')
                start()
                
              })();
        }
        else if((responce.toLowerCase() === 'Something2') || (responce.toLowerCase() === '2')){
            console.clear()
            console.log('Currently unavalible at the moment.')
            start()
    
        }
        else if((responce.toLowerCase() === 'Exit') || (responce.toLowerCase() === '3')){
            console.clear()
            console.log('Exited successfully.')
            process.exit()
        }
        else{
            console.clear()
            console.log('Invalid responce.')
            start()
        }
    })();
}

start()