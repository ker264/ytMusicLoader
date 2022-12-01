import childProcess from 'child_process'
import util from 'util'

const exec = util.promisify(childProcess.exec);


let video = "d:/ffmpegTest/Sing My Pleasure.mp4"
let song = "d:/ffmpegTest/1.mp3"

export const testFFMPEG = async (req, res) => {
    console.log("Начали testFFMPEG")

    async function lsExample() {
        const { stdout, stderr } = await exec(`d:/ffmpegTest/ffmpeg.exe -i "${video}" "${song}"`)
        console.log('stdout:', stdout);
        console.error('stderr:', stderr);
    }    
    lsExample()
        .then(() => res.status(200).json({ "path": song }))
        .catch(e => console.log("Ошибка трансмутации", e))
}

export const downloadMP3 = (req, res) => {
    console.log(song);
    res.download(song)
}


