
/**
 *
 * @author fuyg
 * @date  2019-08-28
 */

interface RgbColor {
    r: number
    g: number
    b: number
}

function color2gray({r, g, b}: RgbColor): number {
    const gray = Math.round(0.21 * r + 0.72 * g + 0.07 * b)
    return gray
}

function grayStyle(str: string): string {
    const color = {
        r: parseInt(str.substr(1, 2), 16),
        g: parseInt(str.substr(3, 2), 16),
        b: parseInt(str.substr(5, 2), 16),
    }
    console.log(color)
    const gray = color2gray(color)
    const grayAsStr = gray.toString(16)
    return `#${grayAsStr}${grayAsStr}${grayAsStr}`
}

const value = grayStyle('#fdc02f')

console.log(value)
