import RPC from 'discord-rpc'
import info from '../settings.json'  assert { type: 'json'}
const client = new RPC.Client({transport: 'ipc'})

export default function customs(detail, img, imgtxt) {
    
    console.clear()
    client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid, 
        activity: {
            details: detail,
            assets: {
                large_image: img,
                large_text: imgtxt
            },
            instance: true
        }})
        .catch(error => console.log(`\nModule Customs> ${error} \nModule Customs> This may require you to RESTART discord and or your IDE/terminal. Make sure to read terminal error.`))
        
    })
        client.login({clientId: info.id})
        .catch(error => {
            if(error) console.log(`\nModule Customs> ${error}`)
        })
    }