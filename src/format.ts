export const HEX: string[] = [];

{
  for (let i = 0; i < 256; ++i) {
    HEX.push((i + 0x100).toString(16).slice(1));
  }
}

function format(count: number, random: (size: number) => Uint8Array) {
  const buf = random(count * 3);
  let str = "";
  for (let i = 0; i < count; i++) {
    const color = HEX[buf[i]] + HEX[buf[i + 1]] + HEX[buf[i + 2]];
    str += color;
    if (i !== count - 1) {
      str += "-";
    }
  }
  return str;
}

export default format;
