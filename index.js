//base by 𝐑𝐎𝐖𝐃𝐘 𝐱 𝐁𝐎𝐓 (𝐑𝐎𝐖𝐃𝐘 Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Sujaya
//Instagram: sujaya_life_a
//Telegram: t.me/Sujaya4876
//GitHub: @Sujayathulmeth
//WhatsApp: +94718628995
//want more free bot script?

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
